# 🛡️ Personal Cybersecurity Blog with Astro

This is a **fast, Markdown-first personal blog** for a **Cybersecurity Analyst**, built with **Astro**.

![Homepage](https://github.com/user-attachments/assets/f2886af3-15cb-4ba9-a243-8982cb8e7307)

## 📦 Prerequisites

- Node.js >= 18
- Git
- GitHub account

## 🚀 Project Features

### ✅ Complete Setup
- ✅ Astro blog template with cybersecurity theme
- ✅ Dark theme with cyber-styled colors
- ✅ Responsive design
- ✅ Content collections for blog posts
- ✅ Static site generation
- ✅ GitHub Pages deployment ready

### 📝 Blog Posts Included
- **Welcome to My Cyber Blog** - Introduction and overview
- **Intro to Threat Hunting** - Comprehensive guide to proactive threat hunting

![Blog Post Example](https://github.com/user-attachments/assets/fde9f105-7731-4e8d-8c66-bc64e1ebd05c)

## 🛠️ Project Structure

```bash
cyber-blog/
├── .github/workflows/
│   └── deploy.yml           # GitHub Pages deployment
├── public/
│   ├── favicon.svg
│   └── images/              # Static images for blog posts
├── src/
│   ├── content/
│   │   ├── blog/
│   │   │   ├── intro.md
│   │   │   └── threat-hunting.md
│   │   └── config.ts        # Content collections config
│   ├── layouts/
│   │   ├── Layout.astro     # Base layout
│   │   └── BlogLayout.astro # Blog post layout
│   └── pages/
│       ├── index.astro      # Homepage
│       └── blog/
│           ├── index.astro  # Blog listing
│           └── [slug].astro # Dynamic blog posts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## ⚙️ Development & Build

### Start local development server
```bash
npm run dev
```
The site will be available at `http://localhost:4321/web-blog/`

### Build static site
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## 🎨 Customization

### Adding New Blog Posts
Create new `.md` files in `src/content/blog/` with frontmatter:

```md
---
title: "Your Blog Post Title"
pubDate: 2025-07-20
description: "Brief description of your post"
author: "Your Name"
---

Your content here...
```

### Styling
- Main styles in `src/layouts/Layout.astro`
- Blog-specific styles in `src/layouts/BlogLayout.astro`
- Cybersecurity-themed color scheme with dark background

### Theme Colors
- Primary: `#00d2ff` (cyber blue)
- Secondary: `#00ff88` (cyber green)  
- Background: `#13151a` (dark)
- Content background: `#1a1d29`

## 🚀 Deployment to GitHub Pages

### Automatic Deployment
The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on pushes to the main branch.

### Manual Setup
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to main branch to trigger deployment

### Configuration
The site is configured for deployment at:
- Site URL: `https://know-your-way-25.github.io/web-blog`
- Base path: `/web-blog/`

## 📖 Content Guidelines

### Focus Areas Covered
- 🎯 **Threat Hunting**: Proactive threat detection and analysis
- 🔍 **Malware Analysis**: Deep dives into malicious software
- 📊 **Threat Intelligence**: Analysis of emerging threats and TTPs
- 🚨 **Incident Response**: Lessons from security incidents

### Writing Style
- Technical but accessible
- Include practical examples
- Use code snippets and command examples
- Add relevant screenshots or diagrams

## 🛡️ Security Considerations

- Static site generation for enhanced security
- No database or server-side processing
- Content served via CDN (GitHub Pages)
- HTTPS by default

## 📝 License

This project is open source and available under the [ISC License](LICENSE).

---

**Happy hunting!** 🛡️

Built with ❤️ by a Cybersecurity Analyst