/*jshint esversion: 8 */
/*jshint -W030 */

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import banner from 'vite-plugin-banner';
import { createHtmlPlugin } from 'vite-plugin-html';


export default defineConfig({
    mode: 'jit',
    base: '/dist/',
    plugins: [
      vue(),
      createHtmlPlugin({
        minify: false,
        entry: './main.js',
        template: 'index.html',
      }),
      banner(`/**\n * Built by PremoWeb (https://premoweb.com/).\n */`),
    ],
    root: 'frontend/',
    build: {
      write: true,
      outDir: '../backend/dist/',
      publicPath: '/dist/',
      publicDir: './frontend/public/',
      emptyOutDir: true,
      manifest: true,
    },
    server: {
      watch: {
        usePolling: true,
        
      },
      cors: true,
      strictPort: true,
      port: 80,
      proxy: {
        '^/api/': {
          target: 'http://localhost:81',
          ws: true,
          changeOrigin: true,
          pathRewrite: { '^/api/': '/api/v1/' },
        }
      },
    }
});
