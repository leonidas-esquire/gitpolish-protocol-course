# GitPolish Protocol™ Course Website

Interactive web platform for the GitPolish Protocol™ Certification Course.

## Technology Stack

- **React 19** - Modern UI library with latest features
- **TypeScript** - Type-safe development
- **Wouter** - Lightweight client-side routing
- **Tailwind CSS 4** - Utility-first styling
- **shadcn/ui** - Professional UI components
- **Vite** - Fast build tool and dev server

## Design System

The website features a **Developer Terminal Interface** aesthetic:

- **Color Palette:**
  - Background: `#1E1E1E` (Dark charcoal)
  - Accent: `#4EC9B0` (Teal)
  - Text: `#D4D4D4` (Light gray)
  - Secondary: `#569CD6` (Blue)
  - Highlight: `#CE9178` (Coral)

- **Typography:**
  - Monospace fonts: Fira Code, Source Code Pro, Roboto Mono
  - Clean, code-focused aesthetic

- **Components:**
  - Terminal-style headers with window controls
  - Consistent dark theme across all pages
  - Responsive design for mobile and desktop

## Pages

### Home (`/`)
Course overview, Five Pillars introduction, module listing, and certification information.

### Curriculum (`/curriculum`)
Detailed view of all 6 modules with learning outcomes and scenarios covered.

### Module 1 (`/module-1`)
Module 1 detail page with slides viewer integration, lab information, and materials download.

### Certification (`/certification`)
Certification requirements, exam information, capstone project guidelines, and benefits.

### Resources (`/resources`)
External learning materials, practice repositories, and additional references.

## Development

### Prerequisites

- Node.js 18 or higher
- pnpm package manager

### Installation

```bash
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

Visit `http://localhost:3000` to view the site.

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Project Structure

```
website/
├── client/                    # React application
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   └── Navigation.tsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Curriculum.tsx
│   │   │   ├── Module1.tsx
│   │   │   ├── Certification.tsx
│   │   │   └── Resources.tsx
│   │   ├── App.tsx          # Routes and layout
│   │   └── main.tsx         # Entry point
├── package.json
└── vite.config.ts
```

## Deployment

The website can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

### Automated Deployment

GitHub Actions workflow is configured in `.github/workflows/deploy-website.yml` for automated deployment.

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines on contributing to the website.

## License

Proprietary License - see [LICENSE](../LICENSE) for details.
