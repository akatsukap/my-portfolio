# 🐧 Minimal Portfolio

A modern, accessible, and performant personal portfolio built with React, TypeScript, and Vite. Features a unique penguin-inspired minimal design that emphasizes simplicity and elegance.

![Portfolio Screenshot](https://github.com/user-attachments/assets/624fd617-0f41-4bd4-8610-1d5157c995f3)

## ✨ Features

### 🎨 Design
- **Penguin-Inspired Minimal Design**: Clean black and white color scheme with orange accents
- **Responsive Layout**: Fully responsive design that works on all devices
- **Modern UI**: Card-based layouts with smooth transitions and hover effects

### ♿ Accessibility
- **WCAG 2.1 Compliant**: Follows Web Content Accessibility Guidelines
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Friendly**: Proper ARIA labels and semantic HTML
- **Skip Links**: "Skip to main content" link for easy navigation
- **Focus Indicators**: Clear visual focus indicators with high contrast
- **Reduced Motion Support**: Respects user's motion preferences

### ⚡ Performance
- **Optimized Build**: Uses Vite for lightning-fast builds and hot module replacement
- **Code Splitting**: Automatic code splitting for optimal loading
- **Minimal Bundle Size**: Optimized production build (~62KB gzipped)
- **Tree Shaking**: Removes unused code automatically

### 🛠️ Technology Stack
- **React 19.2**: Latest React with modern hooks
- **TypeScript 5.9**: Type-safe development experience
- **Vite 7.2**: Next-generation frontend tooling
- **ESLint**: Code quality and consistency
- **CSS3**: Modern CSS with custom properties

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/akatsukap/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Customization

### Update Personal Information

1. **Hero Section**: Edit the name and description in `src/App.tsx`:
```typescript
<h1>
  Hello, I'm <span className="hero-accent">Your Name</span>
</h1>
```

2. **Projects**: Update the `projects` array in `src/App.tsx`:
```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    tags: ['React', 'TypeScript'],
  },
]
```

3. **Skills**: Modify the `skills` array in `src/App.tsx`

4. **Contact Links**: Update email and social media links in the Contact section

### Customize Design

The color scheme is defined in `src/index.css` using CSS custom properties:

```css
:root {
  --color-primary: #000000;    /* Black */
  --color-secondary: #ffffff;  /* White */
  --color-accent: #ff6b35;     /* Orange */
  --color-gray: #e5e5e5;       /* Light Gray */
  --color-dark-gray: #333333;  /* Dark Gray */
}
```

Change these values to customize the color scheme while maintaining the minimal aesthetic.

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready to be deployed to any static hosting service.

### Deployment Options

- **GitHub Pages**: Use `gh-pages` package
- **Vercel**: Connect your repository and deploy with zero configuration
- **Netlify**: Drag and drop the `dist` folder or connect to GitHub
- **Cloudflare Pages**: Deploy directly from GitHub

## 🔍 Accessibility Testing

This portfolio has been built with accessibility in mind. To verify:

1. **Keyboard Navigation**: Tab through all interactive elements
2. **Screen Reader**: Test with NVDA (Windows), JAWS, or VoiceOver (macOS)
3. **Color Contrast**: All text meets WCAG AA standards (4.5:1 ratio)
4. **Automated Testing**: Use tools like Lighthouse, axe DevTools, or WAVE

## 🗺️ Roadmap

### Phase 1: Foundation ✅
- [x] Set up React + TypeScript + Vite project
- [x] Implement penguin-inspired minimal design
- [x] Add accessibility features (ARIA, keyboard navigation, focus indicators)
- [x] Optimize for performance (code splitting, minimal bundle)
- [x] Create responsive layout

### Phase 2: Enhancements (Planned)
- [ ] Add dark mode toggle with system preference detection
- [ ] Implement smooth scroll animations (with reduced motion support)
- [ ] Add project filtering and search functionality
- [ ] Create a blog section with markdown support
- [ ] Add multi-language support (i18n)

### Phase 3: Advanced Features (Future)
- [ ] Integrate CMS for easy content management (e.g., Contentful, Sanity)
- [ ] Add contact form with email integration
- [ ] Implement analytics (privacy-focused)
- [ ] Add RSS feed for blog posts
- [ ] Create downloadable resume/CV feature
- [ ] Add unit and integration tests with Vitest

### Phase 4: Performance & SEO (Future)
- [ ] Implement static site generation (SSG) with Vite SSG
- [ ] Add comprehensive meta tags for SEO
- [ ] Implement Open Graph and Twitter Card support
- [ ] Add structured data (JSON-LD) for better search engine visibility
- [ ] Optimize images with lazy loading and modern formats (WebP, AVIF)
- [ ] Implement service worker for offline support (PWA)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/akatsukap/my-portfolio/issues).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**

- GitHub: [@akatsukap](https://github.com/akatsukap)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Design inspiration from penguin's minimal black and white aesthetic
- Built with modern web development best practices
- Accessibility guidelines from WCAG 2.1 and WAI-ARIA

---

**Note**: Remember to update personal information, project details, and contact links before deploying!
