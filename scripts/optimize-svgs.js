const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Install SVGO
console.log('Installing SVGO...');
execSync('npm install --save-dev svgo');

const svgo = require('svgo');

// Directory containing SVG files
const svgDir = path.join(__dirname, '../public/assets');

// Ensure the directory exists
if (!fs.existsSync(svgDir)) {
  fs.mkdirSync(svgDir, { recursive: true });
}

// SVGO configuration
const svgoConfig = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          cleanupIDs: true,
          mergePaths: true,
          removeUselessStrokeAndFill: true,
          convertShapeToPath: true,
          collapseGroups: true,
          removeDimensions: true,
        },
      },
    },
  ],
};

// Process all SVG files in the directory
fs.readdir(svgDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    if (path.extname(file).toLowerCase() === '.svg') {
      const filePath = path.join(svgDir, file);
      const svgContent = fs.readFileSync(filePath, 'utf8');
      
      // Optimize SVG
      const result = svgo.optimize(svgContent, svgoConfig);
      
      // Write optimized SVG back to file
      fs.writeFileSync(filePath, result.data);
      
      console.log(`Optimized: ${file}`);
    }
  });
  
  console.log('SVG optimization complete!');
}); 