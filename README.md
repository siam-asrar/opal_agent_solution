# Opal Agent Solution — Auto Registration

This repository implements an Opal tool registry backend and automatically registers/updates itself with the Opal Tools Registry API on startup/deploy.

## Live deployment
https://opal-agent-solution.vercel.app/

## Endpoints (Vercel)
- /api/discovery  (GET/POST) — discovery metadata
- /api/tools/* — tool endpoints

## Auto registration
Environment variables (optional):
- OPAL_API_KEY — if your Opal API requires authentication
- OPAL_API_URL — override Opal API url (defaults to https://opal.optimizely.com/api/v1/tool_registries)
- OPAL_REGISTRY_NAME — display name for the registry (default Marketing Content Orchestrator)
- DISCOVERY_URL — discovery URL to register (defaults to https://opal-agent-solution.vercel.app/discovery)

The server will attempt to create a registry; if one already exists it will list and patch the matching registry entry.

## Local dev
- npm install
- npm run dev
