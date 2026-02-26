import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/giro3d_samples/sibbe/demo/' : '/',
  build: {
    outDir: '../demo',
    emptyOutDir: true,
  },
  plugins: [svelte()],
}))
