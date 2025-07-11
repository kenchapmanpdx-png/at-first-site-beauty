
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

async function compressImages() {
  const inputDir = './attached_assets';
  const outputDir = './attached_assets/compressed';
  
  // Create output directory if it doesn't exist
  try {
    await fs.mkdir(outputDir, { recursive: true });
  } catch (err) {
    console.error('Error creating directory:', err);
  }

  // List of actual images in your attached_assets directory
  const images = [
    'IMG_0943.png',
    'IMG_0944.png',
    'IMG_0959.jpeg',
    'IMG_0964.jpeg',
    'IMG_0969.webp',
    'IMG_0970_1749066905982.png',
    'IMG_0971_1749066905983.png',
    'IMG_0973_1749066905983.png',
    'IMG_6201.jpeg',
    'IMG_6202.jpeg',
    'IMG_8201.jpeg',
    'HollieD_1749336182646_1750713275911.png',
    '1At First Site Logo (1000 x 350 px).png'
  ];

  for (const image of images) {
    const inputPath = path.join(inputDir, image);
    const outputPath = path.join(outputDir, image);
    
    try {
      // Check if file exists
      await fs.access(inputPath);
      
      if (image.endsWith('.png')) {
        await sharp(inputPath)
          .resize(1920, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .png({ quality: 85, compressionLevel: 9 })
          .toFile(outputPath);
      } else if (image.endsWith('.jpeg') || image.endsWith('.jpg')) {
        await sharp(inputPath)
          .resize(1920, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .jpeg({ quality: 85, progressive: true })
          .toFile(outputPath);
      } else if (image.endsWith('.webp')) {
        await sharp(inputPath)
          .resize(1920, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ quality: 85 })
          .toFile(outputPath);
      }
      
      const inputStats = await fs.stat(inputPath);
      const outputStats = await fs.stat(outputPath);
      const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
      
      console.log(`✓ ${image}: ${(inputStats.size / 1024).toFixed(0)}KB → ${(outputStats.size / 1024).toFixed(0)}KB (saved ${savings}%)`);
      
    } catch (err) {
      console.error(`✗ Error processing ${image}:`, err.message);
    }
  }
  
  console.log('\nCompression complete! Find compressed images in:', outputDir);
  console.log('To replace originals, run: mv attached_assets/compressed/* attached_assets/');
}

// Run the compression
compressImages();
