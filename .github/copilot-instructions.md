# Startup Finance - Copilot Instructions

This is a startup finance calculator with real-time collaboration features, built with React and Cloudflare Workers.

## Project Architecture

This is a **monorepo** with two main components:
- **`app/`** - React frontend (TypeScript, Vite, React 19)
- **`worker/`** - Cloudflare Worker backend (TypeScript, Durable Objects, D1 database)

The frontend is built and deployed as static assets served by the Cloudflare Worker. They work together as a single application.

## Technology Stack

### Frontend (`app/`)
- **React 19** with TypeScript
- **Vite** for build and development
- **Tailwind CSS v4** for styling
- **shadcn/ui** components
- **Zustand** for state management
- **Jest** for testing
- Path aliases: `@/` → `app/src/app/*`, `@library/` → `app/src/library/*`, `@config/` → `app/src/config/*`

### Backend (`worker/`)
- **Cloudflare Workers** for serverless backend
- **Durable Objects** for real-time WebSocket collaboration
- **D1 (SQLite)** for data persistence
- **Miniflare** for local development (no Cloudflare account needed)
- **Vitest** for testing

## Development Workflow

### Quick Start
```bash
# Install all dependencies
pnpm run install:all

# Local development (recommended - no Cloudflare account needed)
pnpm run dev:local
# App: http://localhost:5173
# Worker: http://localhost:8787
```

### Key Commands
- `pnpm run dev` or `pnpm run dev:local` - Full local development with Miniflare
- `pnpm run dev:staging` - Frontend against staging backend
- `pnpm run dev:production` - Frontend against production backend
- `pnpm test` - Run app tests (in app directory)
- `cd worker && pnpm test` - Run worker tests
- `pnpm run build` - Build production app
- `pnpm run deploy:staging` - Deploy to staging
- `pnpm run deploy:production` - Deploy to production

### Testing
- **App tests**: Use Jest, run with `cd app && pnpm test`
- **Worker tests**: Use Vitest, run with `cd worker && pnpm test`
- Tests should be colocated with source files in `__tests__/` directories
- Test files use `.test.ts` or `.test.tsx` extension

### Building
- Frontend builds to `worker/public/` directory (automatically served by worker)
- Always build frontend before deploying worker in production
- The build process is handled by deployment scripts in `worker/scripts/`

## Code Style & Conventions

### TypeScript
- **Strict mode enabled** - All type checking is strict
- Use explicit types for function parameters and return values
- Prefer interfaces over type aliases for object shapes
- Use `const` for immutable values, avoid `var`

### Frontend Code Style
- **React 19** patterns - Use hooks, functional components
- **Component organization**: Place in `app/src/app/` directory
- **Shared logic**: Place in `app/src/library/` for reusable calculations
- **State management**: Use Zustand stores in `app/src/app/*/state/` directories
- **Path imports**: Use `@/` alias for app code, `@library/` for shared library
- **ESLint config**: Standard React/TypeScript rules with react-hooks plugin

### Backend Code Style
- **Worker code**: Entry point is `worker/src/index.ts`
- **Formatting**: Uses Prettier with tabs, single quotes, 140 char line width (see `worker/.prettierrc`)
- **Type safety**: Cloudflare Worker types from `@cloudflare/workers-types`
- **Database**: D1 (SQLite) for persistence, migrations in `worker/migrations/`

### General Patterns
- Use TypeScript enums and const assertions for type safety
- Follow existing naming conventions in each directory
- Keep functions focused and single-purpose
- Add JSDoc comments for complex logic or public APIs

## Environment Configuration

### Development Modes
1. **Local mode** (default): Both app and worker run locally with Miniflare
   - No Cloudflare account required
   - Full feature parity with production
   - Data stored in `worker/.miniflare/`

2. **Staging mode**: Frontend connects to deployed staging worker
   - Useful for testing production-like environment
   - Use `VITE_BACKEND_URL` environment variable

3. **Production mode**: Full production deployment to Cloudflare

### Environment Variables
- `VITE_BACKEND_URL` - Override backend URL (highest priority)
- `VITE_USE_LOCAL_WORKER` - Set to `true` for local worker in dev mode
- `VITE_ENVIRONMENT` - Target environment (`staging`, `production`)
- See `BACKEND_CONFIGURATION.md` for detailed configuration

## Deployment

### Environments
- **Staging**: `1984-startup-finance-worker-staging` (auto-deploy from `v3_staging` branch)
- **Production**: `1984-startup-finance-worker` (auto-deploy from `v3` branch)

### GitHub Actions
- **CI checks**: `.github/workflows/checks.yml` - Runs on PRs and main branch pushes
  - Linting, testing, and building for the app
- **Staging deployment**: Triggered on push to `v3_staging` branch
- **Production deployment**: Triggered on push to `v3` branch
- Required secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`

### Manual Deployment
```bash
# Deploy to staging
pnpm run deploy:staging

# Deploy to production
pnpm run deploy:production
```

See `DEPLOYMENT.md` for comprehensive deployment guide.

## Important Patterns

### Cap Table Calculations
- Core logic in `app/src/library/cap-table/`
- Separate modules for pre-round and priced-round calculations
- Use immutable patterns, pure functions
- Thoroughly tested in `app/src/library/__tests__/`

### Real-time Collaboration
- WebSocket connections via Durable Objects
- State compression for efficient data transfer
- See `worker/src/utils/stateCompression.ts`

### Database Access
- D1 database accessed through Cloudflare Worker bindings
- Migrations in `worker/migrations/` directory
- Local development uses SQLite emulation via Miniflare

## File Organization

```
├── app/
│   ├── src/
│   │   ├── app/          # React components and app-specific code
│   │   ├── library/      # Shared calculation logic (cap table, etc.)
│   │   └── config/       # Configuration files
│   ├── public/           # Static assets
│   └── package.json
├── worker/
│   ├── src/              # Worker source code
│   │   ├── index.ts      # Main worker entry point
│   │   ├── pages/        # HTML pages
│   │   ├── types/        # TypeScript type definitions
│   │   └── utils/        # Utility functions
│   ├── public/           # Built frontend assets (from app build)
│   ├── migrations/       # Database migrations
│   ├── scripts/          # Deployment and setup scripts
│   └── package.json
└── package.json          # Root workspace configuration
```

## Common Tasks

### Adding a New Feature
1. Determine if it's frontend, backend, or both
2. Add tests for new functionality
3. Implement the feature following existing patterns
4. Test locally with `pnpm run dev:local`
5. Run appropriate test suite
6. Deploy to staging first, then production

### Fixing Bugs
1. Add a failing test that reproduces the bug
2. Fix the bug
3. Verify test passes
4. Check no other tests broke
5. Deploy fix following deployment process

### Database Changes
1. Create migration file in `worker/migrations/`
2. Test migration locally with Miniflare
3. Test in staging environment before production
4. Be careful with production database - consider data backup

## Useful Documentation
- `README.md` - Development setup and quick start
- `DEPLOYMENT.md` - Comprehensive deployment guide
- `BACKEND_CONFIGURATION.md` - Environment configuration details
- `UPSTREAM_MERGE_GUIDE.md` - Git workflow for upstream merges
