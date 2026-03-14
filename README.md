# Gani Hypha - Web Portfolio

## Project Overview
- **Name**: Gani Hypha Web Portfolio
- **Goal**: Professional web portfolio showcasing the journey from Barbershop to Digital Imperium
- **Identity**: Vibe Code Architect | AI Orchestrator
- **Built with**: Hono v4 + Cloudflare Pages (Edge-native)

## URLs
- **Production**: https://gani-hypha-web-porto.pages.dev
- **GitHub**: https://github.com/ganihypha/Gani-hypha-web-porto

## Features
- Hero section with animated pulse indicator
- About section with philosophy cards
- Tech stack showcase (12 technologies)
- 6 project cards with live links and GitHub repos
- 4-Layer Sovereign Architecture visualization
- Timeline/Journey section
- Contact section with GitHub and email links
- Full mobile responsive design (375px+)
- Glassmorphism design with Obsidian Black + Gold + Neon Green theme
- API endpoints: `/api/health`, `/api/profile`, `/api/projects`, `/api/timeline`
- Smooth scroll navigation
- Intersection Observer fade-in animations

## Projects Showcased
1. **Sovereign Predator Suite** - AI lead hunting engine
2. **Sovereign Command Center** - Ecosystem gateway dashboard
3. **Sovereign Digital Imperium** - Mother Folder monorepo
4. **Eco-Green Barber** - Sustainable barbershop initiative
5. **AI Agent Store** - Web 2.5 marketplace
6. **$HYPHA Token Economy** - Web 3.0 tokenomics

## Tech Stack
- Hono v4 (Edge Framework)
- Cloudflare Pages / Workers
- TypeScript
- Vite (Build)
- Space Grotesk + Inter + JetBrains Mono (Fonts)
- Font Awesome (Icons)

## Deployment
- **Platform**: Cloudflare Pages
- **Status**: LIVE
- **Last Updated**: 2026-03-14

## Development
```bash
npm install
npm run build
pm2 start ecosystem.config.cjs
curl http://localhost:3000
```

## Deploy
```bash
npm run build
npx wrangler pages deploy dist --project-name gani-hypha-web-porto
```
