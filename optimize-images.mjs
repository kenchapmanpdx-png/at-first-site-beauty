#!/usr/bin/env node
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

async function optimizeImages() {
  const inputDir = './attached_assets';
  const webpDir = './attached_assets/webp';
  const compressedDir = './attached_assets/compressed';
  
  try {
    // Create directories if they don't exist
    await fs.mkdir(webpDir, { recursive: true });
    await fs.mkdir(compressedDir, { recursive: true });
    
    // Read all files from input directory
    const files = await fs.readdir(inputDir);
    
    // Filter image files
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.png', '.jpg', '.jpeg'].includes(ext);
    });
    
    console.log(`Found ${imageFiles.length} images to optimize...`);
    
    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const filename = path.parse(file).name;
      
      try {
        // Create WebP version
        const webpPath = path.join(webpDir, filename + '.webp');
        await sharp(inputPath)
          .webp({ quality: 85, effort: 6 })
          .toFile(webpPath);
        
        // Create compressed version (for fallback)
        const compressedPath = path.join(compressedDir, file);
        const originalExt = path.extname(file).toLowerCase();
        
        if (originalExt === '.png') {
          await sharp(inputPath)
            .png({ quality: 80, compressionLevel: 9 })
            .toFile(compressedPath);
        } else if (['.jpg', '.jpeg'].includes(originalExt)) {
          await sharp(inputPath)
            .jpeg({ quality: 80, progressive: true })
            .toFile(compressedPath);
        }
        
        console.log(`✓ Optimized: ${file}`);
        
        // Get file sizes for comparison
        const originalStats = await fs.stat(inputPath);
        const webpStats = await fs.stat(webpPath);
        const compressedStats = await fs.stat(compressedPath);
        
        const originalSize = (originalStats.size / 1024).toFixed(1);
        const webpSize = (webpStats.size / 1024).toFixed(1);
        const compressedSize = (compressedStats.size / 1024).toFixed(1);
        
        console.log(`  Original: ${originalSize}KB → WebP: ${webpSize}KB → Compressed: ${compressedSize}KB`);
        
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    }
    
    console.log('\n✅ Image optimization complete!');
    console.log(`📁 WebP images saved in: ${webpDir}`);
    console.log(`📁 Compressed images saved in: ${compressedDir}`);
    
  } catch (error) {
    console.error('Error during optimization:', error);
  }
}

// Run the optimization
optimizeImages();