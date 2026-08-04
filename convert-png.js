import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'src', 'assets', 'Pride-Eco.png');
const outputPath = path.join(__dirname, 'src', 'assets', 'Pride-Eco.webp');

async function convertImage() {
  try {
    console.log(`Converting Pride-Eco.png to WebP...`);
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
      
    console.log(`Successfully converted.`);
  } catch (error) {
    console.error('Error during conversion:', error);
  }
}

convertImage();
