#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const workerDir = join(__dirname, '..');

// Parse command line arguments
const args = process.argv.slice(2);
let environment = args[0] || 'production';

// Handle case where script is called with extra arguments (like from pnpm)
// If first arg is not valid, check if second arg is valid (common with pnpm run deploy staging)
if (!['staging', 'production'].includes(environment) && args[1] && ['staging', 'production'].includes(args[1])) {
  environment = args[1];
}

// Default to production if still not valid
if (!['staging', 'production'].includes(environment)) {
  environment = 'production';
}

console.log(`🚀 Deploying to ${environment} environment...`);

try {
  // Step 1: Build the app first
  console.log(`📦 Building frontend application for ${environment}...`);
  const buildCommand = environment === 'staging' ? 'pnpm run build:staging' : 'pnpm run build:production';
  execSync(`cd ../app && ${buildCommand}`, { 
    stdio: 'inherit', 
    cwd: workerDir 
  });

  // Step 2: Assets are already built directly to worker/public by Vite config
  console.log('✅ Assets built directly to worker/public directory');

  // Step 3: Handle database setup for staging
  if (environment === 'staging') {
    console.log('🗄️  Setting up staging database...');
    
    // First, check if the database exists and is accessible
    try {
      console.log('🔍 Checking if staging database exists...');
      const listResult = execSync(
        `pnpm exec wrangler d1 list --config wrangler.staging.toml`, 
        { cwd: workerDir, encoding: 'utf8', stdio: 'pipe' }
      );
      
      if (listResult.includes('startup-finance-worksheets-staging')) {
        console.log('✅ Staging database exists');
      } else {
        console.log('❌ Staging database not found in list');
      }
    } catch (error) {
      console.log('⚠️  Could not list databases:', error.message.split('\n')[0]);
    }

    // Try to create the staging database (will fail if it already exists, which is fine)
    try {
      console.log('🔧 Attempting to create staging database...');
      const createDbResult = execSync(
        `pnpm exec wrangler d1 create startup-finance-worksheets-staging --config wrangler.staging.toml`, 
        { cwd: workerDir, encoding: 'utf8', stdio: 'inherit' }
      );
      console.log('✅ Created new staging database');
    } catch (error) {
      if (error.message.includes('already exists') || error.message.includes('A database with this name already exists')) {
        console.log('ℹ️  Staging database already exists - continuing...');
      } else {
        console.log('⚠️  Database creation warning:', error.message.split('\n')[0]);
      }
    }

    // Run migrations for staging database with full output (on REMOTE database)
    try {
      console.log('🔧 Running database migrations for staging (REMOTE)...');
      const migrationResult = execSync(
        `pnpm exec wrangler d1 execute startup-finance-worksheets-staging --config wrangler.staging.toml --remote --file migrations/0001_initial_schema.sql`, 
        { cwd: workerDir, encoding: 'utf8', stdio: 'inherit' }
      );
      console.log('✅ Database migrations completed for staging');
    } catch (error) {
      // Check if it's the expected "table already exists" error
      if (error.message.includes('already exists') || error.message.includes('SQLITE_ERROR')) {
        console.log('ℹ️  Database migrations have already been applied - skipping');
      } else {
        console.error('❌ Database migration failed:', error.message);
        console.log('🔧 Attempting to check remote database schema...');
        
        // Try to query the database to see what tables exist
        try {
          const schemaResult = execSync(
            `pnpm exec wrangler d1 execute startup-finance-worksheets-staging --config wrangler.staging.toml --remote --command "SELECT name FROM sqlite_master WHERE type='table';"`, 
            { cwd: workerDir, encoding: 'utf8', stdio: 'inherit' }
          );
          console.log('📋 Current remote database schema check completed');
        } catch (schemaError) {
          console.error('❌ Could not check remote database schema:', schemaError.message);
        }
        
        // Don't fail the deployment, but warn the user
        console.log('⚠️  Continuing with deployment despite migration issues...');
      }
    }
  }

  // Step 4: Deploy the worker and capture output to extract the URL
  console.log(`🚀 Deploying worker to ${environment}...`);
  const configFile = `wrangler.${environment}.toml`;
  
  // Run wrangler deploy and capture output to extract the deployed URL
  const deployOutput = execSync(`pnpm exec wrangler deploy --config ${configFile}`, { 
    encoding: 'utf8',
    cwd: workerDir 
  });
  
  // Print the deployment output
  console.log(deployOutput);

  // Step 5: Extract the deployment URL from wrangler output
  // Wrangler outputs lines like: "Published ... to https://worker-name.subdomain.workers.dev"
  // or "Current Version ID: ..." followed by URL information
  let deployedUrl = null;
  
  // Try to extract URL from "Published ... to <url>" pattern
  const publishedMatch = deployOutput.match(/Published[^]*?to\s+(https:\/\/[^\s]+)/i);
  if (publishedMatch) {
    deployedUrl = publishedMatch[1];
  }
  
  // Also try the "https://<name>.<subdomain>.workers.dev" pattern directly
  if (!deployedUrl) {
    const workersDevMatch = deployOutput.match(/(https:\/\/[^\s]+\.workers\.dev)/i);
    if (workersDevMatch) {
      deployedUrl = workersDevMatch[1];
    }
  }
  
  // Also check for custom domain patterns from routes - extract from wrangler output
  // Wrangler outputs custom domains when deploying to routes
  let customDomain = null;
  const customDomainMatch = deployOutput.match(/https:\/\/([a-zA-Z0-9][-a-zA-Z0-9]*\.[a-zA-Z0-9][-a-zA-Z0-9.]*[a-zA-Z0-9])(?![^\s]*\.workers\.dev)/);
  if (customDomainMatch) {
    customDomain = customDomainMatch[0];
  }

  console.log('');
  console.log('🎉 Deployment successful!');
  console.log('');
  console.log(`📍 ${environment.toUpperCase()} URLs:`);
  
  if (deployedUrl) {
    console.log(`   Worker: ${deployedUrl}`);
    console.log(`   App:    ${deployedUrl}`);
  } else {
    console.log('   (URL could not be extracted from deployment output)');
  }
  
  if (customDomain) {
    console.log(`   Custom Domain: ${customDomain}`);
  }
  
  console.log('');
  
  if (environment === 'staging' && deployedUrl) {
    console.log('💡 To test frontend against this staging backend:');
    console.log(`   VITE_BACKEND_URL=${deployedUrl} pnpm run dev`);
    console.log('');
    console.log('💡 Or update app/.env.staging:');
    console.log(`   VITE_STAGING_BACKEND_URL=${deployedUrl}`);
  }

} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
