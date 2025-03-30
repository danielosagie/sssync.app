const { execSync } = require('child_process');
const fs = require('fs');

// Install required packages
console.log('Installing bundle analyzer...');
execSync('npm install --save-dev @next/bundle-analyzer');

// Create bundle analyzer config
const nextConfigPath = './next.config.mjs';
const configContent = fs.readFileSync(nextConfigPath, 'utf8');

// Add bundle analyzer
const withBundleAnalyzer = `
import withBundleAnalyzer from '@next/bundle-analyzer'({
  enabled: process.env.ANALYZE === 'true',
});

`;

const newConfig = withBundleAnalyzer + configContent;
fs.writeFileSync(nextConfigPath, newConfig);

// Add script to package.json
const packageJsonPath = './package.json';
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

packageJson.scripts.analyze = 'ANALYZE=true next build';

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Bundle analyzer setup complete. Run "npm run analyze" to analyze your bundles.'); 