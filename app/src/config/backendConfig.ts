/**
 * Backend URL Configuration
 * 
 * Centralized module for determining the backend URL based on environment variables.
 * This replaces duplicated logic across the codebase.
 * 
 * Priority order:
 * 1. VITE_BACKEND_URL - Explicit override (highest priority)
 * 2. Environment-specific URLs (VITE_STAGING_BACKEND_URL, VITE_PRODUCTION_BACKEND_URL)
 * 3. Development mode detection (VITE_USE_LOCAL_WORKER)
 * 4. Default production URL (fallback)
 */

/**
 * Get the backend URL based on environment configuration
 * @returns The backend URL to use for API requests
 */
export function getBackendUrl(): string {
  // Priority 1: Explicit VITE_BACKEND_URL (highest priority)
  if (import.meta.env.VITE_BACKEND_URL) {
    console.log(`🔗 Using explicit backend URL: ${import.meta.env.VITE_BACKEND_URL}`);
    return import.meta.env.VITE_BACKEND_URL;
  }
  
  // Priority 2: Environment-specific URLs
  if (import.meta.env.VITE_STAGING_BACKEND_URL && import.meta.env.VITE_ENVIRONMENT === 'staging') {
    console.log(`🔗 Using staging backend URL: ${import.meta.env.VITE_STAGING_BACKEND_URL}`);
    return import.meta.env.VITE_STAGING_BACKEND_URL;
  }
  
  if (import.meta.env.VITE_PRODUCTION_BACKEND_URL && import.meta.env.VITE_ENVIRONMENT === 'production') {
    console.log(`🔗 Using production backend URL: ${import.meta.env.VITE_PRODUCTION_BACKEND_URL}`);
    return import.meta.env.VITE_PRODUCTION_BACKEND_URL;
  }
  
  // Priority 3: Development mode detection
  if (import.meta.env.DEV) {
    // In development mode, check if we want to use local worker
    const url = import.meta.env.VITE_USE_LOCAL_WORKER === 'true' 
      ? 'http://localhost:8787' 
      : 'https://sors-startup-finance-worker.morten-helgaland.workers.dev';
    console.log(`🔗 Using development backend URL: ${url}`);
    return url;
  }
  
  // Priority 4: Default production worker
  const defaultUrl = 'https://sors-startup-finance-worker.morten-helgaland.workers.dev';
  console.log(`🔗 Using default backend URL: ${defaultUrl}`);
  return defaultUrl;
}

/**
 * Get the backend URL and convert it to a WebSocket URL
 * @returns The WebSocket URL for the backend
 */
export function getBackendWebSocketUrl(): string {
  const backendUrl = getBackendUrl();
  return backendUrl.replace('https://', 'wss://').replace('http://', 'ws://');
}
