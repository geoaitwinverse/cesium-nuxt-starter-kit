import { copyFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Recursively copy a directory
 */
function copyDirectory(src, dest) {
  // Create destination directory
  mkdirSync(dest, { recursive: true });

  // Read all files and directories in source
  const entries = readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      // Recursively copy subdirectory
      copyDirectory(srcPath, destPath);
    } else {
      // Copy file
      copyFileSync(srcPath, destPath);
    }
  }
}

console.log('📦 Copying Cesium assets to .output/public/cesium...');

const cesiumSource = join(__dirname, '..', 'node_modules', 'cesium', 'Build', 'Cesium');
const cesiumDest = join(__dirname, '..', '.output', 'public', 'cesium');

try {
  copyDirectory(cesiumSource, cesiumDest);
  console.log('✅ Cesium assets copied successfully!');
} catch (error) {
  console.error('❌ Error copying Cesium assets:', error);
  process.exit(1);
}

// Also ensure public/images is copied
console.log('📦 Copying public/images to .output/public/images...');

const imagesSource = join(__dirname, '..', 'public', 'images');
const imagesDest = join(__dirname, '..', '.output', 'public', 'images');

try {
  copyDirectory(imagesSource, imagesDest);
  console.log('✅ Images copied successfully!');
} catch (error) {
  console.error('❌ Error copying images:', error);
  process.exit(1);
}

console.log('🎉 All assets copied successfully!');
