const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Install Sharp for image processing
console.log('Installing Sharp...');
execSync('npm install --save-dev sharp');

const sharp = require('sharp');

// Directory containing images
const imageDir = path.join(__dirname, '../public/assets');
const outputDir = path.join(__dirname, '../public/assets/optimized');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Process all image files in the directory
fs.readdir(imageDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
      const filePath = path.join(imageDir, file);
      const fileName = path.basename(file, ext);
      
      // Create WebP version
      sharp(filePath)
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, `${fileName}.webp`))
        .then(() => console.log(`Created WebP: ${fileName}.webp`))
        .catch(err => console.error(`Error creating WebP for ${file}:`, err));
      
      // Create AVIF version
      sharp(filePath)
        .avif({ quality: 65 })
        .toFile(path.join(outputDir, `${fileName}.avif`))
        .then(() => console.log(`Created AVIF: ${fileName}.avif`))
        .catch(err => console.error(`Error creating AVIF for ${file}:`, err));
    }
  });
});