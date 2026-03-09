import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'images');
const outputDir = path.join(__dirname, 'public', 'images', 'optimized');

const imagesToProcess = [
    {
        input: 'media__1773079161513.jpg',
        output: 'logo.webp',
        width: 400
    },
    {
        input: 'WhatsApp Image 2026-03-07 at 11.13.44.jpeg',
        output: 'dr-jacob.webp',
        width: 600
    },
    {
        input: 'media__1773079036079.jpg',
        output: 'dr-maria.webp',
        width: 600
    },
    {
        input: 'WhatsApp Image 2026-03-07 at 11.13.44 (1).jpeg',
        output: 'hero-clinic.webp',
        width: 1200
    },
    {
        input: 'WhatsApp Image 2026-03-07 at 11.13.43.jpeg',
        output: 'clinic-interior.webp',
        width: 800
    }
];

async function processImages() {
    try {
        // Create output directory if it doesn't exist
        await fs.mkdir(outputDir, { recursive: true });
        console.log(`Created directory: ${outputDir}`);

        for (const image of imagesToProcess) {
            const inputPath = path.join(inputDir, image.input);
            const outputPath = path.join(outputDir, image.output);

            console.log(`Processing: ${image.input} -> ${image.output}`);

            await sharp(inputPath)
                .resize(image.width, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .webp({ quality: 80 })
                .toFile(outputPath);

            console.log(`Successfully compressed: ${image.output}`);
        }

        console.log('All images processed successfully!');
    } catch (error) {
        console.error('Error processing images:', error);
    }
}

processImages();
