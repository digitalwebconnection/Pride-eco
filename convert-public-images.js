import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertImage(inputFile, outputFile) {
  const inputPath = path.join(__dirname, inputFile);
  const outputPath = path.join(__dirname, outputFile);
  try {
    console.log(`Converting ${inputFile} to WebP...`);
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`Successfully converted ${outputFile}`);
  } catch (error) {
    console.error(`Error converting ${inputFile}:`, error);
  }
}

async function run() {
  await convertImage('public/PrideEco.png', 'public/PrideEco.webp');
  await convertImage('public/shiva-sir.jpeg', 'public/shiva-sir.webp');
}

run();
