import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dir = path.dirname(fileURLToPath(import.meta.url))

// Copies RunAnywhere WASM binaries to dist/assets/ for production builds
function copyWasmPlugin() {
  const wasmSrc = path.resolve(__dir, 'node_modules/@runanywhere/web-llamacpp/wasm')
  return {
    name: 'copy-runanywhere-wasm',
    writeBundle(options) {
      const assetsDir = path.join(options.dir ?? path.resolve(__dir, 'dist'), 'assets')
      fs.mkdirSync(assetsDir, { recursive: true })
      for (const file of [
        'racommons-llamacpp.wasm',
        'racommons-llamacpp.js',
        'racommons-llamacpp-webgpu.wasm',
        'racommons-llamacpp-webgpu.js',
      ]) {
        const src = path.join(wasmSrc, file)
        if (fs.existsSync(src)) fs.copyFileSync(src, path.join(assetsDir, file))
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), copyWasmPlugin()],
  server: {
    headers: {
      // Required for SharedArrayBuffer — enables multi-threaded WASM (faster)
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'credentialless',
    },
  },
  assetsInclude: ['**/*.wasm'],
  worker: { format: 'es' },
  optimizeDeps: {
    // CRITICAL: prevents import.meta.url from resolving to wrong paths
    exclude: ['@runanywhere/web-llamacpp', '@runanywhere/web-onnx'],
  },
})
