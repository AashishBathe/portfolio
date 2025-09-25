const fs = require('fs');
const path = require('path');

const distIndex = path.resolve(__dirname, '..', 'dist', 'index.html');
const dist404 = path.resolve(__dirname, '..', 'dist', '404.html');

fs.copyFile(distIndex, dist404, (err) => {
  if (err) {
    console.error('Failed to copy index.html to 404.html:', err);
    process.exit(1);
  }
  console.log('Copied index.html to 404.html');
});
