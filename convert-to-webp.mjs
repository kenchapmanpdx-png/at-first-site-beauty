
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

async function convertToWebP() {
  const inputDir = './attached_assets';
  const outputDir = './attached_assets/webp';
  
  // Create output directory
  try {
    await fs.mkdir(outputDir, { recursive: true });
  } catch (err) {
    console.error('Error creating directory:', err);
  }

  // Get all image files
  const files = await fs.readdir(inputDir);
  const imageFiles = files.filter(file => 
    file.endsWith('.png') || 
    file.endsWith('.jpg') || 
    file.endsWith('.jpeg')
  );

  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const outputName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const outputPath = path.join(outputDir, outputName);
    
    try {
      // Convert to WebP with optimization
      await sharp(inputPath)
        .resize(1920, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ 
          quality: 85,
          effort: 6 // Higher effort = better compression
        })
        .toFile(outputPath);
      
      const inputStats = await fs.stat(inputPath);
      const outputStats = await fs.stat(outputPath);
      const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
      
      console.log(`✓ ${file} → ${outputName}: ${(inputStats.size / 1024).toFixed(0)}KB → ${(outputStats.size / 1024).toFixed(0)}KB (saved ${savings}%)`);
      
    } catch (err) {
      console.error(`✗ Error processing ${file}:`, err.message);
    }
  }
  
  console.log('\n✅ Conversion complete! WebP images saved in:', outputDir);
  console.log('\n📝 Next steps:');
  console.log('1. Update your React components to use .webp files');
  console.log('2. Or use the <picture> element for fallback support');
}

// Run the conversion
convertToWebP();
