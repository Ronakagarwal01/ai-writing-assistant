// copy-wasm.js — Run this once: node copy-wasm.js
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dir = path.dirname(fileURLToPath(import.meta.url))
const wasmSrc = path.resolve(__dir, 'node_modules/@runanywhere/web-llamacpp/wasm')
const publicDir = path.resolve(__dir, 'public')

fs.mkdirSync(publicDir, { recursive: true })

const files = [
  'racommons-llamacpp.wasm',
  'racommons-llamacpp.js',
  'racommons-llamacpp-webgpu.wasm',
  'racommons-llamacpp-webgpu.js',
]

let copied = 0
for (const file of files) {
  const src = path.join(wasmSrc, file)
  const dst = path.join(publicDir, file)
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dst)
    console.log(`✓ Copied: ${file}`)
    copied++
  } else {
    console.log(`✗ Not found: ${src}`)
  }
}

console.log(`\nDone! ${copied}/${files.length} files copied to /public`)
console.log('Now run: npm run build')
