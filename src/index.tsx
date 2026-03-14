import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api/*', cors())

// ==================== API ROUTES ====================

app.get('/api/health', (c) => {
  return c.json({
    status: 'online',
    project: 'Gani Hypha Portfolio',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  })
})

app.get('/api/profile', (c) => {
  return c.json({
    name: 'Gani Hypha',
    tagline: 'Vibe Code Architect | AI Orchestrator',
    bio: 'From Barbershop to Digital Imperium. Building sovereign ecosystems where real-world services meet autonomous AI agents.',
    location: 'Indonesia',
    email: 'ganihypha@proton.me',
    github: 'https://github.com/ganihypha',
    philosophy: ['Uang Dulu, Sempurna Kemudian', 'Akar Dalam, Cabang Tinggi'],
    skills: ['Hono', 'Cloudflare Workers', 'TypeScript', 'AI Orchestration', 'Groq', 'Supabase', 'Web3'],
    status: 'Building the Sovereign Digital Imperium'
  })
})

app.get('/api/projects', (c) => {
  return c.json([
    {
      id: 1,
      name: 'Sovereign Predator Suite',
      description: 'AI-powered lead hunting engine with autonomous scout, closer, and architect agents for UMKM digital transformation.',
      tech: ['Hono v4', 'Groq AI', 'SerpAPI', 'Supabase', 'Cloudflare Pages'],
      url: 'https://sovereign-predator-suite.pages.dev',
      github: 'https://github.com/Estes786/Svereign-predtor-suite',
      status: 'Phase 3 - Scout Agent',
      category: 'AI Agent'
    },
    {
      id: 2,
      name: 'Sovereign Command Center',
      description: 'Central gateway dashboard that unifies the entire Sovereign ecosystem - monitoring all agents, apps, and revenue streams.',
      tech: ['Hono v4', 'TypeScript', 'Cloudflare Pages', 'npm Workspaces'],
      url: 'https://sovereign-command-center.pages.dev',
      github: 'https://github.com/Estes786/Svereign-dgital-imperium-mother',
      status: 'Live',
      category: 'Dashboard'
    },
    {
      id: 3,
      name: 'Sovereign Digital Imperium',
      description: 'The Mother Folder monorepo - a 4-layer architecture spanning Web 2.5 Bridge, Web 3.0 Economy, Web 4.0 AI Agents, and Web 5.0 Identity.',
      tech: ['Monorepo', 'npm Workspaces', 'Hono', 'React', 'Ethers.js'],
      url: 'https://sovereign-command-center.pages.dev',
      github: 'https://github.com/Estes786/Svereign-dgital-imperium-mother',
      status: 'Active Development',
      category: 'Ecosystem'
    },
    {
      id: 4,
      name: 'Eco-Green Barber Initiative',
      description: 'Transforming barbershop waste into sustainable assets - hair collection for bio-fertilizer and oil-absorbent mats. Real-world impact meets digital innovation.',
      tech: ['Sustainability', 'Circular Economy', 'IoT (Future)'],
      url: null,
      github: null,
      status: 'Research & Planning',
      category: 'Impact'
    },
    {
      id: 5,
      name: 'AI Agent Store (Web 2.5)',
      description: 'Marketplace for AI-powered business automation agents. Where UMKM owners discover and deploy sovereign agents for their businesses.',
      tech: ['Hono', 'Cloudflare Pages', 'Groq', 'TypeScript'],
      url: 'https://sovereignt-agent-store-1.pages.dev',
      github: null,
      status: 'MVP',
      category: 'Marketplace'
    },
    {
      id: 6,
      name: '$HYPHA Token Economy',
      description: 'Web 3.0 tokenomics layer - staking, yield farming, and DAO governance for the sovereign ecosystem circulating economy.',
      tech: ['Solidity', 'Ethers.js', 'React', 'Cloudflare Pages'],
      url: 'https://gani-hypha-web3.pages.dev',
      github: null,
      status: 'Architecture Phase',
      category: 'Web3'
    }
  ])
})

app.get('/api/timeline', (c) => {
  return c.json([
    { year: '2024', event: 'Started barbershop career (Kapster)', icon: 'scissors' },
    { year: '2025', event: 'Discovered AI & Vibe Coding', icon: 'brain' },
    { year: 'Jan 2026', event: 'First SaaS exploration & learning Claude API', icon: 'code' },
    { year: 'Feb 2026', event: 'Built Sovereign Predator Suite Phase 1-2', icon: 'rocket' },
    { year: 'Mar 2026', event: 'Sovereign Digital Imperium Mother Folder launched', icon: 'globe' },
    { year: 'Next', event: 'Scout Agent live + First $500 revenue from UMKM services', icon: 'target' }
  ])
})

// ==================== MAIN PAGE ====================

app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gani Hypha | Vibe Code Architect & AI Orchestrator</title>
  <meta name="description" content="From Barbershop to Digital Imperium. Gani Hypha builds sovereign ecosystems where real-world services meet autonomous AI agents.">
  <meta name="theme-color" content="#050505">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <meta property="og:title" content="Gani Hypha | Vibe Code Architect">
  <meta property="og:description" content="Building the Sovereign Digital Imperium - Where barber meets blockchain, AI meets real revenue.">
  <meta property="og:type" content="website">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
  <style>
    :root {
      --bg-primary: #050505;
      --bg-secondary: #0A0A0A;
      --bg-card: #111111;
      --bg-card-hover: #1A1A1A;
      --gold: #FFD700;
      --gold-dim: #B8860B;
      --neon: #00FF88;
      --neon-dim: #00CC6A;
      --blue: #4DA8FF;
      --purple: #A855F7;
      --red: #FF4444;
      --text-primary: #F5F5F5;
      --text-secondary: #888888;
      --text-muted: #555555;
      --border: #1A1A1A;
      --border-hover: #333333;
      --glass: rgba(255,255,255,0.03);
      --glass-border: rgba(255,255,255,0.06);
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    html { scroll-behavior: smooth; }
    
    body {
      font-family: 'Inter', -apple-system, sans-serif;
      background: var(--bg-primary);
      color: var(--text-primary);
      line-height: 1.7;
      overflow-x: hidden;
    }

    ::selection {
      background: var(--gold);
      color: var(--bg-primary);
    }

    /* ===== SCROLLBAR ===== */
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--bg-primary); }
    ::-webkit-scrollbar-thumb { background: var(--gold-dim); border-radius: 4px; }

    /* ===== NOISE OVERLAY ===== */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 9999;
    }

    /* ===== NAV ===== */
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      backdrop-filter: blur(20px);
      background: rgba(5,5,5,0.8);
      border-bottom: 1px solid var(--glass-border);
      transition: all 0.3s ease;
    }
    nav.scrolled { padding: 0.6rem 2rem; }
    .nav-brand {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 700;
      font-size: 1.1rem;
      color: var(--gold);
      text-decoration: none;
      letter-spacing: 0.5px;
    }
    .nav-brand span { color: var(--text-muted); font-weight: 400; }
    .nav-links { display: flex; gap: 2rem; align-items: center; }
    .nav-links a {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 500;
      transition: color 0.3s;
      letter-spacing: 0.3px;
    }
    .nav-links a:hover { color: var(--gold); }
    .nav-cta {
      padding: 0.5rem 1.2rem !important;
      border: 1px solid var(--gold-dim) !important;
      border-radius: 6px;
      color: var(--gold) !important;
      font-family: 'JetBrains Mono', monospace !important;
      font-size: 0.75rem !important;
    }
    .nav-cta:hover { background: var(--gold) !important; color: var(--bg-primary) !important; }
    .nav-hamburger { display: none; cursor: pointer; color: var(--text-secondary); font-size: 1.2rem; }

    /* ===== HERO ===== */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 8rem 2rem 4rem;
      position: relative;
      overflow: hidden;
    }
    .hero::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -20%;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(255,215,0,0.04) 0%, transparent 70%);
      pointer-events: none;
    }
    .hero::after {
      content: '';
      position: absolute;
      bottom: -30%;
      left: -10%;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(0,255,136,0.03) 0%, transparent 70%);
      pointer-events: none;
    }
    .hero-content {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
    .hero-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 1rem;
      background: var(--glass);
      border: 1px solid var(--glass-border);
      border-radius: 100px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      color: var(--neon);
      margin-bottom: 2rem;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .hero-tag .pulse {
      width: 6px;
      height: 6px;
      background: var(--neon);
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.5); }
    }
    .hero h1 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      letter-spacing: -1px;
    }
    .hero h1 .gold { color: var(--gold); }
    .hero h1 .dim { color: var(--text-muted); }
    .hero-subtitle {
      font-size: 1.1rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin-bottom: 2.5rem;
      font-weight: 300;
    }
    .hero-subtitle strong { color: var(--text-primary); font-weight: 500; }
    .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
    .btn-primary {
      padding: 0.8rem 2rem;
      background: var(--gold);
      color: var(--bg-primary);
      border: none;
      border-radius: 8px;
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.3s;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(255,215,0,0.2); }
    .btn-secondary {
      padding: 0.8rem 2rem;
      background: transparent;
      color: var(--text-primary);
      border: 1px solid var(--border-hover);
      border-radius: 8px;
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 500;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.3s;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }
    .btn-secondary:hover { border-color: var(--text-secondary); background: var(--glass); }
    .hero-stats {
      display: flex;
      gap: 3rem;
      margin-top: 4rem;
      padding-top: 2rem;
      border-top: 1px solid var(--border);
    }
    .stat-item { text-align: left; }
    .stat-value {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);
    }
    .stat-value .accent { color: var(--gold); }
    .stat-label {
      font-size: 0.75rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 0.2rem;
    }

    /* ===== SECTIONS ===== */
    section {
      padding: 6rem 2rem;
      max-width: 1100px;
      margin: 0 auto;
    }
    .section-header {
      margin-bottom: 4rem;
    }
    .section-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      color: var(--gold);
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 0.8rem;
    }
    .section-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      font-weight: 700;
      letter-spacing: -0.5px;
      line-height: 1.2;
    }
    .section-desc {
      font-size: 1rem;
      color: var(--text-secondary);
      margin-top: 1rem;
      max-width: 600px;
      font-weight: 300;
    }

    /* ===== ABOUT ===== */
    #about { border-top: 1px solid var(--border); }
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }
    .about-text p {
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
      font-weight: 300;
    }
    .about-text strong { color: var(--text-primary); font-weight: 500; }
    .philosophy-card {
      padding: 1.5rem;
      background: var(--glass);
      border: 1px solid var(--glass-border);
      border-radius: 12px;
      margin-top: 2rem;
    }
    .philosophy-card p {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      color: var(--gold);
      font-style: italic;
      margin-bottom: 0.5rem !important;
    }
    .philosophy-card p:last-child { margin-bottom: 0 !important; }
    .about-details { display: flex; flex-direction: column; gap: 1rem; }
    .detail-card {
      padding: 1.2rem 1.5rem;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: all 0.3s;
    }
    .detail-card:hover { border-color: var(--border-hover); transform: translateX(4px); }
    .detail-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      flex-shrink: 0;
    }
    .detail-icon.gold { background: rgba(255,215,0,0.1); color: var(--gold); }
    .detail-icon.neon { background: rgba(0,255,136,0.1); color: var(--neon); }
    .detail-icon.blue { background: rgba(77,168,255,0.1); color: var(--blue); }
    .detail-icon.purple { background: rgba(168,85,247,0.1); color: var(--purple); }
    .detail-info h4 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 0.2rem;
    }
    .detail-info p { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0 !important; }

    /* ===== STACK ===== */
    .stack-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 1rem;
    }
    .stack-item {
      padding: 1.2rem;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      text-align: center;
      transition: all 0.3s;
    }
    .stack-item:hover { border-color: var(--gold-dim); transform: translateY(-4px); }
    .stack-item i, .stack-item .stack-emoji {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      display: block;
    }
    .stack-item span {
      font-size: 0.8rem;
      color: var(--text-secondary);
      font-weight: 500;
    }

    /* ===== PROJECTS ===== */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 1.5rem;
    }
    .project-card {
      padding: 2rem;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 16px;
      transition: all 0.4s;
      position: relative;
      overflow: hidden;
    }
    .project-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--gold), var(--neon));
      opacity: 0;
      transition: opacity 0.4s;
    }
    .project-card:hover { border-color: var(--border-hover); transform: translateY(-4px); }
    .project-card:hover::before { opacity: 1; }
    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin-bottom: 1rem;
    }
    .project-category {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.65rem;
      padding: 0.3rem 0.8rem;
      border-radius: 100px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .cat-ai { background: rgba(0,255,136,0.1); color: var(--neon); }
    .cat-dashboard { background: rgba(77,168,255,0.1); color: var(--blue); }
    .cat-ecosystem { background: rgba(255,215,0,0.1); color: var(--gold); }
    .cat-impact { background: rgba(168,85,247,0.1); color: var(--purple); }
    .cat-marketplace { background: rgba(77,168,255,0.1); color: var(--blue); }
    .cat-web3 { background: rgba(168,85,247,0.1); color: var(--purple); }
    .project-status {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.65rem;
      color: var(--text-muted);
    }
    .project-card h3 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.6rem;
    }
    .project-card p {
      font-size: 0.85rem;
      color: var(--text-secondary);
      font-weight: 300;
      margin-bottom: 1.2rem;
      line-height: 1.6;
    }
    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-bottom: 1.2rem;
    }
    .project-tech span {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.65rem;
      padding: 0.25rem 0.6rem;
      background: var(--glass);
      border: 1px solid var(--glass-border);
      border-radius: 4px;
      color: var(--text-muted);
    }
    .project-links { display: flex; gap: 0.8rem; }
    .project-links a {
      font-size: 0.8rem;
      color: var(--text-muted);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      transition: color 0.3s;
    }
    .project-links a:hover { color: var(--gold); }

    /* ===== ARCHITECTURE ===== */
    .arch-stack {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 700px;
      margin: 0 auto;
    }
    .arch-layer {
      padding: 1.5rem 2rem;
      border-radius: 12px;
      border: 1px solid var(--border);
      display: flex;
      align-items: center;
      gap: 1.5rem;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
    }
    .arch-layer:hover { transform: scale(1.02); }
    .arch-layer.l0 { background: linear-gradient(135deg, rgba(0,255,136,0.05), transparent); border-color: rgba(0,255,136,0.15); }
    .arch-layer.l1 { background: linear-gradient(135deg, rgba(255,215,0,0.05), transparent); border-color: rgba(255,215,0,0.15); }
    .arch-layer.l2 { background: linear-gradient(135deg, rgba(168,85,247,0.05), transparent); border-color: rgba(168,85,247,0.15); }
    .arch-layer.l3 { background: linear-gradient(135deg, rgba(77,168,255,0.05), transparent); border-color: rgba(77,168,255,0.15); }
    .arch-layer.l4 { background: linear-gradient(135deg, rgba(255,68,68,0.05), transparent); border-color: rgba(255,68,68,0.15); }
    .arch-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.65rem;
      font-weight: 600;
      padding: 0.4rem 0.8rem;
      border-radius: 6px;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .arch-badge.b0 { background: rgba(0,255,136,0.15); color: var(--neon); }
    .arch-badge.b1 { background: rgba(255,215,0,0.15); color: var(--gold); }
    .arch-badge.b2 { background: rgba(168,85,247,0.15); color: var(--purple); }
    .arch-badge.b3 { background: rgba(77,168,255,0.15); color: var(--blue); }
    .arch-badge.b4 { background: rgba(255,68,68,0.15); color: var(--red); }
    .arch-info h4 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.95rem;
      font-weight: 600;
      margin-bottom: 0.3rem;
    }
    .arch-info p { font-size: 0.8rem; color: var(--text-muted); }
    .arch-status {
      margin-left: auto;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.65rem;
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .status-live { background: rgba(0,255,136,0.1); color: var(--neon); }
    .status-building { background: rgba(255,215,0,0.1); color: var(--gold); }
    .status-planned { background: rgba(136,136,136,0.1); color: var(--text-muted); }

    /* ===== TIMELINE ===== */
    .timeline {
      position: relative;
      max-width: 600px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 20px;
      top: 0;
      bottom: 0;
      width: 1px;
      background: linear-gradient(to bottom, var(--gold), var(--neon), transparent);
    }
    .timeline-item {
      display: flex;
      gap: 2rem;
      padding: 1.5rem 0;
      position: relative;
    }
    .timeline-dot {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--bg-card);
      border: 2px solid var(--gold-dim);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 0.8rem;
      color: var(--gold);
      z-index: 1;
    }
    .timeline-content h4 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: var(--gold);
      margin-bottom: 0.3rem;
    }
    .timeline-content p {
      font-size: 0.9rem;
      color: var(--text-secondary);
      font-weight: 300;
    }

    /* ===== CONTACT ===== */
    #contact { border-top: 1px solid var(--border); }
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
    .contact-text h3 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    .contact-text p {
      color: var(--text-secondary);
      margin-bottom: 2rem;
      font-weight: 300;
    }
    .contact-links { display: flex; flex-direction: column; gap: 0.8rem; }
    .contact-link {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.5rem;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      text-decoration: none;
      color: var(--text-primary);
      transition: all 0.3s;
    }
    .contact-link:hover { border-color: var(--gold-dim); transform: translateX(4px); }
    .contact-link i {
      font-size: 1.2rem;
      width: 24px;
      text-align: center;
    }
    .contact-link .cl-label { font-size: 0.85rem; font-weight: 500; }
    .contact-link .cl-value { font-size: 0.75rem; color: var(--text-muted); }
    .contact-cta {
      padding: 2rem;
      background: linear-gradient(135deg, rgba(255,215,0,0.05), rgba(0,255,136,0.03));
      border: 1px solid rgba(255,215,0,0.1);
      border-radius: 16px;
      text-align: center;
    }
    .contact-cta h4 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    .contact-cta p {
      font-size: 0.85rem;
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
    }

    /* ===== FOOTER ===== */
    footer {
      padding: 3rem 2rem;
      text-align: center;
      border-top: 1px solid var(--border);
    }
    footer p {
      font-size: 0.8rem;
      color: var(--text-muted);
    }
    footer .footer-tagline {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      color: var(--gold-dim);
      margin-top: 0.5rem;
    }

    /* ===== ANIMATIONS ===== */
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.6s ease-out;
    }
    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 768px) {
      nav { padding: 0.8rem 1.2rem; }
      .nav-links { display: none; }
      .nav-links.open {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(5,5,5,0.95);
        padding: 1.5rem;
        gap: 1rem;
        border-bottom: 1px solid var(--border);
        backdrop-filter: blur(20px);
      }
      .nav-hamburger { display: block; }
      .hero { padding: 7rem 1.5rem 3rem; min-height: auto; }
      .hero-stats { flex-direction: column; gap: 1.5rem; }
      section { padding: 4rem 1.5rem; }
      .about-grid, .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
      .projects-grid { grid-template-columns: 1fr; }
      .stack-grid { grid-template-columns: repeat(3, 1fr); }
      .arch-layer { flex-direction: column; text-align: center; gap: 0.8rem; }
      .arch-status { margin-left: 0; }
      .hero h1 { font-size: 2rem; }
    }
  </style>
</head>
<body>

  <!-- NAV -->
  <nav id="navbar">
    <a href="#" class="nav-brand">GANI<span>.HYPHA</span></a>
    <div class="nav-links" id="navLinks">
      <a href="#about">About</a>
      <a href="#stack">Stack</a>
      <a href="#projects">Projects</a>
      <a href="#architecture">Architecture</a>
      <a href="#journey">Journey</a>
      <a href="#contact" class="nav-cta">Contact</a>
    </div>
    <div class="nav-hamburger" id="hamburger" onclick="document.getElementById('navLinks').classList.toggle('open')">
      <i class="fas fa-bars"></i>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-content">
      <div class="hero-tag">
        <span class="pulse"></span>
        Building the Sovereign Digital Imperium
      </div>
      <h1>
        <span class="dim">From Barbershop to</span><br>
        <span class="gold">Digital Imperium</span>
      </h1>
      <p class="hero-subtitle">
        I'm <strong>Gani Hypha</strong> &mdash; a Vibe Code Architect & AI Orchestrator 
        building sovereign ecosystems where <strong>real-world services</strong> meet 
        <strong>autonomous AI agents</strong> on the edge.
      </p>
      <div class="hero-actions">
        <a href="#projects" class="btn-primary">
          <i class="fas fa-folder-open"></i> View Projects
        </a>
        <a href="https://github.com/ganihypha" target="_blank" rel="noopener" class="btn-secondary">
          <i class="fab fa-github"></i> GitHub
        </a>
      </div>
      <div class="hero-stats">
        <div class="stat-item">
          <div class="stat-value"><span class="accent">6</span>+</div>
          <div class="stat-label">Projects</div>
        </div>
        <div class="stat-item">
          <div class="stat-value"><span class="accent">4</span></div>
          <div class="stat-label">Layer Stack</div>
        </div>
        <div class="stat-item">
          <div class="stat-value"><span class="accent">130</span>+</div>
          <div class="stat-label">Strategy Docs</div>
        </div>
        <div class="stat-item">
          <div class="stat-value"><span class="accent">$500</span></div>
          <div class="stat-label">First Target</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about" class="fade-in">
    <div class="section-header">
      <div class="section-label">// About</div>
      <h2 class="section-title">The Sovereign Builder</h2>
    </div>
    <div class="about-grid">
      <div class="about-text">
        <p>
          I started as a <strong>Kapster (barber)</strong> in Indonesia, mastering the craft of transforming 
          appearances one haircut at a time. But I saw a bigger canvas &mdash; the digital world was 
          waiting for the same precision and creativity.
        </p>
        <p>
          In 2025, I discovered <strong>AI orchestration</strong> and <strong>Vibe Coding</strong>. 
          Instead of learning to code line by line, I learned to <strong>orchestrate AI agents</strong> 
          to build production-grade applications. Within weeks, I was deploying edge-native apps 
          on Cloudflare Workers.
        </p>
        <p>
          Now I'm building the <strong>Sovereign Digital Imperium</strong> &mdash; a 4-layer ecosystem 
          that bridges real-world barbershop revenue with autonomous AI agents, token economics, and 
          self-sovereign identity. The goal: <strong>$500 in 30 days</strong> from digital services to UMKM.
        </p>
        <div class="philosophy-card">
          <p>"Uang Dulu, Sempurna Kemudian"</p>
          <p>"Akar Dalam, Cabang Tinggi"</p>
        </div>
      </div>
      <div class="about-details">
        <div class="detail-card">
          <div class="detail-icon gold"><i class="fas fa-cut"></i></div>
          <div class="detail-info">
            <h4>Sovereign Barber</h4>
            <p>Real-world barbershop & revenue foundation</p>
          </div>
        </div>
        <div class="detail-card">
          <div class="detail-icon neon"><i class="fas fa-robot"></i></div>
          <div class="detail-info">
            <h4>AI Orchestrator</h4>
            <p>Multi-agent systems with Groq & Claude</p>
          </div>
        </div>
        <div class="detail-card">
          <div class="detail-icon blue"><i class="fas fa-globe"></i></div>
          <div class="detail-info">
            <h4>Edge Developer</h4>
            <p>Hono + Cloudflare Workers production apps</p>
          </div>
        </div>
        <div class="detail-card">
          <div class="detail-icon purple"><i class="fas fa-leaf"></i></div>
          <div class="detail-info">
            <h4>Eco-Green Pioneer</h4>
            <p>Hair waste to bio-fertilizer initiative</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TECH STACK -->
  <section id="stack" class="fade-in">
    <div class="section-header">
      <div class="section-label">// Tech Stack</div>
      <h2 class="section-title">Tools of the Trade</h2>
      <p class="section-desc">Edge-first, AI-native, built for sovereignty.</p>
    </div>
    <div class="stack-grid">
      <div class="stack-item"><span class="stack-emoji" style="color:#E36002">&#9906;</span><span>Hono v4</span></div>
      <div class="stack-item"><i class="fab fa-cloudflare" style="color:#F48120"></i><span>Cloudflare</span></div>
      <div class="stack-item"><i class="fab fa-js-square" style="color:#3178C6"></i><span>TypeScript</span></div>
      <div class="stack-item"><span class="stack-emoji" style="color:#00CC88">&#9889;</span><span>Groq AI</span></div>
      <div class="stack-item"><span class="stack-emoji" style="color:#3ECF8E">&#9783;</span><span>Supabase</span></div>
      <div class="stack-item"><i class="fab fa-node-js" style="color:#339933"></i><span>Node.js</span></div>
      <div class="stack-item"><i class="fab fa-react" style="color:#61DAFB"></i><span>React</span></div>
      <div class="stack-item"><span class="stack-emoji" style="color:#06B6D4">&#9830;</span><span>TailwindCSS</span></div>
      <div class="stack-item"><i class="fab fa-github" style="color:#F5F5F5"></i><span>GitHub</span></div>
      <div class="stack-item"><span class="stack-emoji" style="color:#7C3AED">&#9878;</span><span>Ethers.js</span></div>
      <div class="stack-item"><span class="stack-emoji" style="color:#FF6B6B">&#128269;</span><span>SerpAPI</span></div>
      <div class="stack-item"><span class="stack-emoji" style="color:#FFD700">&#9881;</span><span>Vite</span></div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section id="projects" class="fade-in">
    <div class="section-header">
      <div class="section-label">// Projects</div>
      <h2 class="section-title">What I'm Building</h2>
      <p class="section-desc">Each project is a layer in the Sovereign ecosystem.</p>
    </div>
    <div class="projects-grid" id="projectsGrid"></div>
  </section>

  <!-- ARCHITECTURE -->
  <section id="architecture" class="fade-in">
    <div class="section-header">
      <div class="section-label">// Architecture</div>
      <h2 class="section-title">The 4-Layer Sovereign Stack</h2>
      <p class="section-desc">A living digital ecosystem from physical world to self-sovereign identity.</p>
    </div>
    <div class="arch-stack">
      <div class="arch-layer l4">
        <span class="arch-badge b4">L-4</span>
        <div class="arch-info">
          <h4>Web 5.0 &mdash; Self-Sovereign Identity</h4>
          <p>DIDs, DWNs, Data Ownership, Legacy Vault</p>
        </div>
        <span class="arch-status status-planned">FUTURE</span>
      </div>
      <div class="arch-layer l3">
        <span class="arch-badge b3">L-3</span>
        <div class="arch-info">
          <h4>Web 4.0 &mdash; AI Orchestration</h4>
          <p>CrewAI, Groq Llama 3.3, Scout/Closer/Architect Agents</p>
        </div>
        <span class="arch-status status-building">IN PROGRESS</span>
      </div>
      <div class="arch-layer l2">
        <span class="arch-badge b2">L-2</span>
        <div class="arch-info">
          <h4>Web 3.0 &mdash; Token Economy</h4>
          <p>$HYPHA, Liquidity Pool, Staking, DAO Governance</p>
        </div>
        <span class="arch-status status-planned">ARCHITECTURE</span>
      </div>
      <div class="arch-layer l1">
        <span class="arch-badge b1">L-1</span>
        <div class="arch-info">
          <h4>Web 2.5 &mdash; Revenue Bridge</h4>
          <p>Agent Store, Digital Services, Booking</p>
        </div>
        <span class="arch-status status-building">BUILDING</span>
      </div>
      <div class="arch-layer l0">
        <span class="arch-badge b0">L-0</span>
        <div class="arch-info">
          <h4>Real World &mdash; Physical Business</h4>
          <p>Sovereign Barber, Eco-Green, Direct Revenue</p>
        </div>
        <span class="arch-status status-live">LIVE</span>
      </div>
    </div>
  </section>

  <!-- JOURNEY -->
  <section id="journey" class="fade-in">
    <div class="section-header">
      <div class="section-label">// Journey</div>
      <h2 class="section-title">The Evolution</h2>
      <p class="section-desc">From scissors to servers. Every step counts.</p>
    </div>
    <div class="timeline" id="timeline"></div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="fade-in">
    <div class="section-header">
      <div class="section-label">// Contact</div>
      <h2 class="section-title">Let's Connect</h2>
    </div>
    <div class="contact-grid">
      <div class="contact-text">
        <h3>Ready to Build Together?</h3>
        <p>
          Whether you need a digital transformation agent for your UMKM, 
          want to collaborate on edge-native AI projects, or just want to talk 
          about the future of sovereign technology &mdash; I'm here.
        </p>
        <div class="contact-links">
          <a href="https://github.com/ganihypha" target="_blank" rel="noopener" class="contact-link">
            <i class="fab fa-github" style="color:var(--text-primary)"></i>
            <div>
              <div class="cl-label">GitHub</div>
              <div class="cl-value">github.com/ganihypha</div>
            </div>
          </a>
          <a href="mailto:ganihypha@proton.me" class="contact-link">
            <i class="fas fa-envelope" style="color:var(--gold)"></i>
            <div>
              <div class="cl-label">Email</div>
              <div class="cl-value">ganihypha@proton.me</div>
            </div>
          </a>
          <a href="https://github.com/Estes786" target="_blank" rel="noopener" class="contact-link">
            <i class="fab fa-github" style="color:var(--neon)"></i>
            <div>
              <div class="cl-label">GitHub (Estes786)</div>
              <div class="cl-value">Sovereign Imperium repos</div>
            </div>
          </a>
        </div>
      </div>
      <div class="contact-cta">
        <h4>Sovereign Digital Services</h4>
        <p>AI-powered digital transformation for UMKM. From lead hunting to demo deployment, all automated.</p>
        <a href="https://sovereign-predator-suite.pages.dev" target="_blank" rel="noopener" class="btn-primary" style="display:inline-flex">
          <i class="fas fa-rocket"></i> Launch Predator Suite
        </a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <p>&copy; 2026 Gani Hypha. All rights reserved.</p>
    <p class="footer-tagline">"The Sovereign Predator Never Sleeps" &mdash; GAS POL, GYSS!</p>
  </footer>

  <!-- SCRIPTS -->
  <script>
    // Nav scroll effect
    window.addEventListener('scroll', () => {
      const nav = document.getElementById('navbar');
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Intersection Observer for fade-in
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Load Projects
    const projects = [
      {
        name: 'Sovereign Predator Suite',
        description: 'AI-powered lead hunting engine with autonomous scout, closer, and architect agents for UMKM digital transformation.',
        tech: ['Hono v4', 'Groq AI', 'SerpAPI', 'Supabase', 'Cloudflare Pages'],
        url: 'https://sovereign-predator-suite.pages.dev',
        github: 'https://github.com/Estes786/Svereign-predtor-suite',
        status: 'Phase 3',
        category: 'AI Agent',
        catClass: 'cat-ai'
      },
      {
        name: 'Sovereign Command Center',
        description: 'Central gateway dashboard unifying the entire ecosystem. Monitors agents, apps, and revenue streams from one place.',
        tech: ['Hono v4', 'TypeScript', 'Cloudflare Pages', 'npm Workspaces'],
        url: 'https://sovereign-command-center.pages.dev',
        github: 'https://github.com/Estes786/Svereign-dgital-imperium-mother',
        status: 'Live',
        category: 'Dashboard',
        catClass: 'cat-dashboard'
      },
      {
        name: 'Sovereign Digital Imperium',
        description: 'The Mother Folder monorepo \u2014 4-layer architecture spanning Web 2.5 Bridge through Web 5.0 Identity. 130+ strategy docs.',
        tech: ['Monorepo', 'npm Workspaces', 'Hono', 'React', 'Ethers.js'],
        url: null,
        github: 'https://github.com/Estes786/Svereign-dgital-imperium-mother',
        status: 'Active',
        category: 'Ecosystem',
        catClass: 'cat-ecosystem'
      },
      {
        name: 'Eco-Green Barber',
        description: 'Transforming barbershop waste into sustainable assets. Hair collection for bio-fertilizer and oil-absorbent mats with real-world impact.',
        tech: ['Sustainability', 'Circular Economy', 'IoT'],
        url: null,
        github: null,
        status: 'Research',
        category: 'Impact',
        catClass: 'cat-impact'
      },
      {
        name: 'AI Agent Store',
        description: 'Web 2.5 marketplace for AI business automation agents. UMKM owners discover and deploy sovereign agents instantly.',
        tech: ['Hono', 'Cloudflare Pages', 'Groq', 'TypeScript'],
        url: 'https://sovereignt-agent-store-1.pages.dev',
        github: null,
        status: 'MVP',
        category: 'Marketplace',
        catClass: 'cat-marketplace'
      },
      {
        name: '$HYPHA Token Economy',
        description: 'Web 3.0 layer \u2014 staking, yield farming, and DAO governance powering the sovereign circulating economy.',
        tech: ['Solidity', 'Ethers.js', 'React', 'Cloudflare Pages'],
        url: 'https://gani-hypha-web3.pages.dev',
        github: null,
        status: 'Architecture',
        category: 'Web3',
        catClass: 'cat-web3'
      }
    ];

    const grid = document.getElementById('projectsGrid');
    projects.forEach(p => {
      const links = [];
      if (p.url) links.push('<a href="'+p.url+'" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Live</a>');
      if (p.github) links.push('<a href="'+p.github+'" target="_blank" rel="noopener"><i class="fab fa-github"></i> Source</a>');
      
      grid.innerHTML += \`
        <div class="project-card">
          <div class="project-header">
            <span class="project-category \${p.catClass}">\${p.category}</span>
            <span class="project-status">\${p.status}</span>
          </div>
          <h3>\${p.name}</h3>
          <p>\${p.description}</p>
          <div class="project-tech">
            \${p.tech.map(t => '<span>'+t+'</span>').join('')}
          </div>
          <div class="project-links">
            \${links.join('')}
          </div>
        </div>
      \`;
    });

    // Load Timeline
    const timeline = [
      { year: '2024', event: 'Started barbershop career as Kapster', icon: 'fa-cut' },
      { year: '2025', event: 'Discovered AI & Vibe Coding paradigm', icon: 'fa-brain' },
      { year: 'Jan 2026', event: 'Deep-dived Claude API, MCP, Agents & Workflows', icon: 'fa-graduation-cap' },
      { year: 'Feb 2026', event: 'Built Sovereign Predator Suite Phase 1-2', icon: 'fa-rocket' },
      { year: 'Mar 2026', event: 'Launched Sovereign Digital Imperium Mother Folder', icon: 'fa-globe' },
      { year: 'Next', event: 'Scout Agent live + First $500 UMKM revenue', icon: 'fa-bullseye' }
    ];

    const tl = document.getElementById('timeline');
    timeline.forEach(t => {
      tl.innerHTML += \`
        <div class="timeline-item">
          <div class="timeline-dot"><i class="fas \${t.icon}"></i></div>
          <div class="timeline-content">
            <h4>\${t.year}</h4>
            <p>\${t.event}</p>
          </div>
        </div>
      \`;
    });

    // Close mobile nav on link click
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('open');
      });
    });
  </script>
</body>
</html>`)
})

export default app
