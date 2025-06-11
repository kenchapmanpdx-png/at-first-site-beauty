# Using GIF Backgrounds in At First Sight Beauty

## How to Add a GIF Background

### For Static HTML Version (`static-site/`):
1. **Add your GIF file:**
   - Place your GIF file in `static-site/assets/images/`
   - Name it `hero-animation.gif`

2. **The code will automatically:**
   - Detect if the GIF exists
   - Switch from static image to GIF
   - Apply elegant grayscale filter (80% desaturation)

### For React Lovable Version (`lovable-export/`):
1. **Add your GIF file:**
   - Place your GIF file in `lovable-export/public/assets/`
   - Name it `hero-animation.gif`

2. **The component will automatically:**
   - Check for GIF existence
   - Use GIF if available, fallback to static image
   - Apply elegant styling

## GIF Recommendations

### File Specifications:
- **Format:** GIF or WebM (GIF for maximum compatibility)
- **Size:** 1920x1080 or higher for desktop
- **File size:** Keep under 5MB for good performance
- **Duration:** 3-10 seconds (loops automatically)
- **Frame rate:** 15-24 fps for smooth motion

### Content Suggestions:
- Gentle fabric movement (dress, veil swaying)
- Soft hair movement in breeze
- Subtle background bokeh/lighting effects
- Flowing water or nature elements
- Delicate particle effects

### Performance Optimizations:
- The code includes lazy loading
- GIF is only loaded after static image
- Reduced grayscale for elegance
- Respects user motion preferences

## Alternative Formats

If you prefer other formats, you can modify the code to use:
- **WebM videos** (better compression)
- **MP4 videos** (wider compatibility)
- **CSS animations** (lightweight effects)

## Testing

1. Add your `hero-animation.gif` file
2. Refresh the website
3. Check browser console for loading status
4. Fallback to static image if GIF fails

## File Naming

Current setup looks for:
- `hero-animation.gif` (animated version)
- `hero-image.png` (static fallback)

You can modify the filenames in the code if needed.

---

**Ready to use!** Just add your GIF file and the website will automatically detect and use it.