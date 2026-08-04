import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'src', 'assets', 'images');

async function convertImages() {
  try {
    const files = fs.readdirSync(inputDir);
    
    for (const file of files) {
      if (file.toLowerCase().endsWith('.jpg')) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(inputDir, file.replace(/\.jpg$/i, '.webp'));
        
        console.log(`Converting ${file} to WebP...`);
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        console.log(`Successfully converted to ${path.basename(outputPath)}`);
      }
    }
    console.log('All conversions complete.');
  } catch (error) {
    console.error('Error during conversion:', error);
  }
}

convertImages();
