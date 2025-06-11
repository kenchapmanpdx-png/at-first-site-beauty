# At First Sight Beauty - Lovable Export

This is a complete Lovable-compatible React project for the At First Sight Beauty website with floating rose petals, mobile optimizations, and luxury animations.

## 🚀 Quick Setup for Lovable

1. **Import to Lovable:**
   - Upload all files from this `lovable-export` folder to Lovable
   - Lovable will automatically detect the project structure and dependencies

2. **File Structure:**
```
lovable-export/
├── package.json              # Dependencies and scripts
├── vite.config.ts            # Vite configuration with path aliases
├── tailwind.config.js        # Tailwind with custom colors and animations
├── tsconfig.json             # TypeScript configuration
├── index.html                # HTML entry point with SEO meta tags
├── src/
│   ├── main.tsx              # React entry point
│   ├── App.tsx               # Main app component
│   ├── index.css             # Global styles with Tailwind and custom CSS
│   ├── components/           # All React components
│   │   ├── Header.tsx        # Navigation with mobile menu
│   │   ├── Hero.tsx          # Hero section with floating rose petals
│   │   ├── About.tsx         # About section with scroll animations
│   │   ├── Services.tsx      # Services with sparkle effects
│   │   ├── Gallery.tsx       # Gallery with filtering
│   │   ├── Testimonials.tsx  # Customer testimonials
│   │   ├── Contact.tsx       # Contact form
│   │   └── Footer.tsx        # Footer section
│   ├── hooks/
│   │   └── useScrollAnimation.ts  # Custom hook for scroll animations
│   ├── lib/
│   │   └── utils.ts          # Utility functions
│   └── public/
│       └── assets/           # All images and assets
```

## ✨ Key Features

### 🌸 Floating Rose Petals
- 10 white rose petals floating across the hero section
- Optimized for mobile (fewer petals on smaller screens)
- Respects reduced motion preferences

### 📱 Mobile Optimizations
- Touch-friendly navigation with hamburger menu
- Optimized animations for mobile performance
- Responsive design for all screen sizes
- Reduced effects on smaller devices for better performance

### ✨ Luxury Animations
- Sparkle effects on service cards (hover-activated)
- Smooth scroll animations using Intersection Observer
- Parallax background effect on hero section
- Gradient backgrounds and hover effects

### 🎨 Design System
- Custom Tailwind configuration with brand colors
- Responsive typography with Google Fonts
- Consistent spacing and component styling
- Professional color palette

## 🛠 Dependencies

All dependencies are included in `package.json`:

- **React 18** - Core framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool

## 🎯 Performance Features

- Lazy loading for gallery images
- Optimized animations with `will-change` CSS
- Passive event listeners for smooth scrolling
- Reduced motion support for accessibility
- Mobile-specific optimizations

## 🔧 Customization

### Colors
Update brand colors in `tailwind.config.js`:
```js
colors: {
  primary: {
    light: '#e6d8db',    // Light pink
    dark: '#dab2b9',     // Dark pink
    accent: '#ad3b68'    // Accent burgundy
  }
}
```

### Content
- Update booking URLs in `Services.tsx`
- Replace contact information in `Contact.tsx` and `Footer.tsx`
- Replace images in `public/assets/`

### Rose Petals
Customize floating petals in `index.css`:
- Adjust count (currently 10)
- Modify animation duration
- Change colors and opacity

## 📞 Integration Points

### Booking Integration
Service booking buttons link to Calendly:
- Bridal Design: `https://calendly.com/atfirstsightbeauty/bridal-design`
- Bridal Party: `https://calendly.com/atfirstsightbeauty/bridal-party`
- Teeth Whitening: `https://calendly.com/atfirstsightbeauty/teeth-whitening`
- Spray Tanning: `https://calendly.com/atfirstsightbeauty/spray-tanning`

### Contact Form
Contact form is ready for integration with:
- Formspree
- EmailJS
- Netlify Forms
- Custom backend

### Social Media
Social links configured for:
- Instagram: `@atfirstsightbeauty`
- Facebook: `@atfirstsightbeauty`

## 🚀 Deployment

Once imported to Lovable:
1. Install dependencies automatically
2. Run development server
3. Build for production
4. Deploy with one click

## 📱 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Reduced motion preferences
- Color contrast compliance

---

**Ready for Lovable Import** - This project is fully configured and optimized for the Lovable platform with all modern React best practices.