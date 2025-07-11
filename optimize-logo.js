
import sharp from 'sharp';
import fs from 'fs';

async function optimizeLogo() {
  const logoPath = './attached_assets/1At First Site Logo (1000 x 350 px).png';
  const outputPath = './attached_assets/logo-optimized.png';
  
  try {
    console.log('🔍 Checking for logo file...');
    
    // Check if file exists first
    if (!fs.existsSync(logoPath)) {
      console.error('❌ Logo file not found at:', logoPath);
      console.log('Available files in attached_assets:');
      const files = fs.readdirSync('./attached_assets/');
      files.forEach(file => console.log('  -', file));
      return;
    }
    
    console.log('✅ Logo file found, optimizing...');
    
    await sharp(logoPath)
      .png({ 
        quality: 95,
        compressionLevel: 9,
        palette: true
      })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(logoPath).size / 1024;
    const newSize = fs.statSync(outputPath).size / 1024;
    const saved = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log('✅ Logo optimized!');
    console.log(`Original: ${originalSize.toFixed(0)}KB`);
    console.log(`Optimized: ${newSize.toFixed(0)}KB`);
    console.log(`Saved: ${saved}%`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Stack:', error.stack);
  }
}

optimizeLogo();
