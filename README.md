# Abdurrahman Muhammad Bello — Portfolio

> A modern, accessible, and performant personal portfolio built with React, TypeScript, Tailwind CSS, and Vite.

---

## 🚀 Live Demo

**[portfolio-three-blush-cdejg6qhk2.vercel.app](https://portfolio-three-blush-cdejg6qhk2.vercel.app)**

---

## ✨ Features

- **Modern Stack** — React 19, TypeScript, Tailwind CSS, Vite 6
- **Dark/Light Mode** — Persisted theme with system preference fallback, no flash
- **Accessible** — Semantic HTML, ARIA labels, focus management, skip link, WCAG AA contrast
- **SEO Ready** — Open Graph, Twitter Cards, JSON-LD Person schema
- **Performance** — Code splitting, lazy-loaded sections, font preloading, optimized images
- **Responsive** — Mobile-first, works beautifully on all screen sizes
- **Professional UI** — Clean design, subtle animations, polished interactions

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | React 19, TypeScript |
| **Build Tool** | Vite 6 |
| **Styling** | Tailwind CSS 3.4 |
| **Animations** | CSS keyframes (no heavy libraries) |
| **Icons** | Lucide React, React Icons |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── projects/          # Project screenshots
│   │   ├── profile.jpg        # Profile photo
│   │   └── favicon.svg
│   └── vite.svg
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ProfileImage.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectImage.tsx
│   │   └── Section.tsx
│   ├── sections/              # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── TechStack.tsx
│   │   ├── Projects.tsx
│   │   ├── Journey.tsx
│   │   ├── CurrentlyLearning.tsx
│   │   └── Contact.tsx
│   ├── data/                  # Content/data layer
│   │   ├── nav.ts
│   │   ├── social.ts
│   │   ├── about.ts
│   │   ├── tech.ts
│   │   ├── projects.ts
│   │   ├── journey.ts
│   │   └── learning.ts
│   ├── hooks/                 # Custom hooks
│   │   └── useActiveSection.ts
│   ├── contexts/              # React contexts
│   │   └── ThemeProvider.tsx
│   ├── lib/                   # Utilities
│   │   ├── utils.ts
│   │   └── animations.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tsconfig.json
├── tailwind.config.cjs
├── postcss.config.cjs
├── vite.config.ts
└── package.json
```

---

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Abdulrahmanvisit/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run typecheck` | Run TypeScript type checking |

---

## 🎨 Theming

The portfolio uses CSS custom properties for a clean dark/light mode system:

```css
:root {
  --color-bg: #ffffff;
  --color-bg-raised: #f4f6fb;
  --color-border: #e2e6ef;
  --color-text: #111827;
  --color-text-muted: #6b7280;
  --color-accent: #2563eb;
  --color-accent-2: #d97706;
}

html.dark {
  --color-bg: #0b0c14;
  --color-bg-raised: #13161f;
  --color-border: #202633;
  --color-text: #e5e7eb;
  --color-text-muted: #94a3b8;
  --color-accent: #60a5fa;
  --color-accent-2: #fb923c;
}
```

Theme persists in `localStorage` and respects `prefers-color-scheme`.

---

## 🖼️ Adding Project Screenshots

1. Resize your screenshot to **1280×720** (16:9)
2. Save as PNG to `public/images/projects/`
3. Use filename matching the project ID (e.g., `sme-expense-tracker.png`)
4. The `image` field in `src/data/projects.ts` should match

---

## 📦 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy

### Other Platforms

Any static hosting works (Netlify, GitHub Pages, Cloudflare Pages, etc.)

```bash
npm run build
# Deploy the `dist/` folder
```

---

## ♿ Accessibility

- Semantic HTML5 landmarks (`<header>`, `<main>`, `<section>`, `<footer>`)
- Proper heading hierarchy (h1 → h2 → h3)
- Focus-visible styles on all interactive elements
- ARIA labels on icon-only buttons
- Skip to main content link
- WCAG AA contrast ratios in both themes
- Reduced motion support via `prefers-reduced-motion`

---

## 📈 Performance

- **Code splitting** — Sections lazy-loaded with `React.lazy` + `Suspense`
- **Font optimization** — `font-display: swap`, critical fonts preloaded
- **Image optimization** — Lazy loading, appropriate sizing
- **Minimal JS** — No heavy animation libraries, CSS-only animations
- **Gzip/Brotli** — Enabled by default on Vercel/Netlify

---

## 👤 Author

**Abdurrahman Muhammad Bello**  
Frontend Developer | Final-year Computer Science Student  

- **GitHub:** [Abdulrahmanvisit](https://github.com/Abdulrahmanvisit)
- **LinkedIn:** [abdurrahmanbello](https://linkedin.com/in/abdurrahmanbello)
- **X:** [@abdulcodes001](https://x.com/abdulcodes001)
- **Email:** abdurrahmanbello99@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with care using React, TypeScript, and Tailwind CSS.*