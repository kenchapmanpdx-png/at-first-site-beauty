#!/usr/bin/env node
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

// Create a temporary vite config without the problematic package
const tempConfig = `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    viteCompression({
      algorithm: 'gzip',
      verbose: true,
      threshold: 512,
      deleteOriginFile: false,
      compressionOptions: {
        level: 9
      }
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      verbose: true,
      threshold: 512,
      deleteOriginFile: false,
      ext: '.br'
    }),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-slot']
        }
      }
    }
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});`;

// Write temporary config
fs.writeFileSync('vite.config.temp.ts', tempConfig);

// Run vite build with the temporary config
const buildProcess = spawn('vite', ['build', '--config', 'vite.config.temp.ts'], {
  stdio: 'inherit',
  shell: true
});

buildProcess.on('close', (code) => {
  // Clean up temporary file
  fs.unlinkSync('vite.config.temp.ts');
  
  if (code === 0) {
    console.log('Build completed successfully!');
    // Now run the server build
    const serverBuild = spawn('esbuild', [
      'server/index.ts',
      '--platform=node',
      '--packages=external',
      '--bundle',
      '--format=esm',
      '--outdir=dist'
    ], {
      stdio: 'inherit',
      shell: true
    });
    
    serverBuild.on('close', (serverCode) => {
      if (serverCode === 0) {
        console.log('Server build completed successfully!');
      } else {
        console.error('Server build failed with code:', serverCode);
      }
      process.exit(serverCode);
    });
  } else {
    console.error('Build failed with code:', code);
    process.exit(code);
  }
});