import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

console.log('Building for Vercel...');

execSync('npx vite build', { stdio: 'inherit', cwd: rootDir });

const srcAssets = path.resolve(rootDir, 'attached_assets');
const destAssets = path.resolve(rootDir, 'dist/public/attached_assets');

if (fs.existsSync(srcAssets)) {
  fs.cpSync(srcAssets, destAssets, { recursive: true });
  console.log('Copied attached_assets to dist/public/attached_assets');
}

const src404 = path.resolve(rootDir, 'client/404.html');
const dest404 = path.resolve(rootDir, 'dist/public/404.html');
if (fs.existsSync(src404)) {
  fs.copyFileSync(src404, dest404);
  console.log('Copied 404.html');
}

console.log('Vercel build complete!');
