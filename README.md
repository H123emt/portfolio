# Enterprise Portfolio — Alex Mercer

A premium, enterprise-grade personal portfolio built with React, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer, ScrollProgress
│   ├── sections/      # Hero, About, Skills, Experience, Projects, Resume, Contact
│   └── ui/            # Button, SectionHeading, ProjectCard, SocialLinks, AnimatedContainer
├── data/
│   ├── portfolioData.js   ← Edit personal info, stats, skills, experience here
│   └── projects.js        ← Add/edit projects here
├── pages/
│   ├── Home.jsx
│   └── ProjectDetails.jsx
├── routes/
│   └── AppRoutes.jsx
└── App.jsx
```

## ✏️ Customisation

### Personal Info
Edit `src/data/portfolioData.js`:
- Name, title, summary, email, location
- Profile image path (`profileImage`)
- Resume PDF path (`resumeFile`) → place PDF in `/public/resume.pdf`
- Social links (LinkedIn, GitHub, Twitter)
- Stats, about paragraphs, skills, experience

### Projects
Edit `src/data/projects.js`:
- Add/remove/update project entries
- Each project has a `detailedContent` object for the case study page

### Profile Photo
1. Place your photo in `public/profile.jpg`
2. Set `profileImage: "/profile.jpg"` in `portfolioData.js`

### Resume PDF
1. Place your PDF in `public/resume.pdf`
2. `resumeFile` is already set to `"/resume.pdf"` in `portfolioData.js`

## 🎨 Design System
- Background: `#0A0A0A`
- Primary: `#A855F7` (purple)
- Secondary: `#C084FC`
- Accent: `#EF4444` (red)
- Fonts: Syne (display), DM Sans (body), JetBrains Mono (code)

## 📦 Stack
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- React Router DOM
