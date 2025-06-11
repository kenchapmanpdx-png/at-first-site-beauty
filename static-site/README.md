# At First Sight Beauty - Static Website for GoDaddy Hosting

This is a static HTML, CSS, and JavaScript version of the At First Sight Beauty website, ready for deployment to GoDaddy hosting.

## 📁 File Structure

```
static-site/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styling and animations
├── js/
│   └── main.js             # All interactive functionality
├── assets/
│   └── images/             # All images and photos
│       ├── hero-image.png
│       ├── logo.png
│       ├── bridal-design.jpg
│       ├── bridal-party.jpg
│       ├── teeth-whitening.jpg
│       ├── spray-tanning.jpg
│       └── gallery-*.jpg
├── sw.js                   # Service worker for caching
└── README.md               # This file
```

## 🚀 How to Deploy to GoDaddy

### Step 1: Access Your GoDaddy Account
1. Log in to your GoDaddy account
2. Go to "My Products" 
3. Find your hosting plan and click "Manage"

### Step 2: Upload Files
1. In cPanel, open "File Manager"
2. Navigate to the `public_html` folder (this is your website's root directory)
3. Delete any existing files (like index.html, if present)
4. Upload ALL files from the `static-site` folder:
   - Upload `index.html` to the root
   - Upload the `css` folder (with styles.css inside)
   - Upload the `js` folder (with main.js inside) 
   - Upload the `assets` folder (with all images)
   - Upload `sw.js` to the root

### Step 3: Set File Permissions
- Ensure all files have read permissions (644)
- Ensure all folders have execute permissions (755)

### Step 4: Test Your Website
1. Visit your domain name in a web browser
2. Check that all images load properly
3. Test navigation and mobile responsiveness
4. Verify contact form displays correctly

## ✨ Features Included

- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Performance Optimized** - Fast loading with image optimization and caching
- **SEO Ready** - Meta tags, structured data, and semantic HTML
- **Accessibility** - Keyboard navigation and screen reader friendly
- **Interactive Elements** - Smooth scrolling, animations, and hover effects
- **Contact Form** - Ready for integration with your preferred form handler
- **Service Worker** - Caches resources for faster repeat visits

## 🔧 Customization

### Updating Content
- Edit `index.html` to change text, phone numbers, and links
- Replace images in `assets/images/` with your own photos
- Update booking links to point to your actual booking system

### Styling Changes
- All styles are in `css/styles.css`
- Colors are defined using CSS variables for easy customization
- Mobile responsiveness is built-in

### Adding More Images
1. Add new images to `assets/images/`
2. Update the gallery section in `index.html`
3. Add appropriate `data-category` attributes for filtering

## 📱 Mobile Optimization

The site is fully optimized for mobile devices with:
- Touch-friendly navigation
- Responsive image galleries
- Optimized font sizes
- Fast loading on mobile networks

## 🔒 Security Features

- Service worker provides offline functionality
- All external resources use HTTPS
- No inline scripts for better security
- Clean, semantic HTML structure

## 📞 Contact Form Integration

The contact form is ready to work with popular form services like:
- Formspree
- Netlify Forms
- EmailJS
- Your hosting provider's form handling

To integrate, update the form action in `index.html` or modify the JavaScript in `js/main.js`.

## 🎨 Color Scheme

Primary colors used:
- Pink gradient: `#e6d8db` to `#dab2b9`
- Quote accent: `#ad3b68`
- Background gradients: `#fbf8f9` to `#f0dfe5`

## 📈 Performance Features

- Image lazy loading
- Resource preloading
- Service worker caching
- Optimized animations
- Compressed assets

## 🆘 Troubleshooting

**Images not loading?**
- Check file paths in `index.html`
- Ensure images are in the correct `assets/images/` folder
- Verify file permissions (644 for files, 755 for folders)

**Fonts not working?**
- Check internet connection (fonts load from Google Fonts)
- Verify the font link in the HTML head section

**Animations not smooth?**
- Ensure JavaScript is enabled
- Check browser compatibility (works in all modern browsers)

## 📧 Support

If you need help with deployment or customization, contact your web developer or GoDaddy support.

---

**Note**: This website is ready to use as-is, but you should update the contact information, phone numbers, and booking links to match your actual business details before going live.