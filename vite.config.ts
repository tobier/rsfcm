import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  base: './', // Ensure that paths are relative for Electron
  build: {
    target: 'esnext',
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
    },
  },
});
