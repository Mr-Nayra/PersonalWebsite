const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputImages = [
  'IMG_1297.HEIC',
  'IMG-20230723-WA0005.jpg',
  'Screenshot_20260316_171215_Instagram.jpg',
  'Screenshot_20260316_171804_Instagram.jpg',
  'IMG-20230210-WA0019.jpg'
];

const inputDir = 'c:\\Users\\rawth\\OneDrive\\Desktop\\TheFounder\\PersonalWebsite';
const outputDir = path.join(inputDir, 'public', 'images', 'dogs');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function convert() {
  for (let i = 0; i < inputImages.length; i++) {
    const inputFile = path.join(inputDir, inputImages[i]);
    const outputFile = path.join(outputDir, `temp_${i}.webp`);
    try {
      await sharp(inputFile)
        .webp({ quality: 80 })
        .toFile(outputFile);
      console.log(`Converted ${inputImages[i]} to temp_${i}.webp`);
    } catch (e) {
      console.error(`Error converting ${inputImages[i]}:`, e.message);
    }
  }
}

convert();
