import { defineConfig } from 'vite'

// Ensure correct asset paths on GitHub Pages under a subdirectory.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/giro3d_samples/instances_amsterdam/demo/' : '/',
}))
