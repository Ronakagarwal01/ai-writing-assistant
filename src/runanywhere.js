// ─────────────────────────────────────────────────────────────────────────────
// runanywhere.js
// Initializes RunAnywhere Web SDK and defines the model catalog.
// Import { initSDK, MODELS } in any component that needs AI.
// ─────────────────────────────────────────────────────────────────────────────

import {
  RunAnywhere,
  SDKEnvironment,
  ModelManager,
  ModelCategory,
  LLMFramework,
  EventBus,
} from '@runanywhere/web'

import { LlamaCPP } from '@runanywhere/web-llamacpp'

// ── MODEL CATALOG
// All models are GGUF format, downloaded from HuggingFace into browser OPFS.
// OPFS = Origin Private File System — persists across sessions, no re-download.
export const MODELS = [
  {
    id: 'lfm2-350m',
    name: 'LFM2 · 350M',
    desc: 'Ultra fast · ~250MB · Best for demo',
    size: '~250 MB',
    badge: 'FASTEST',
    badgeColor: '#059669',
    recommended: true,
    sdkDef: {
      id: 'lfm2-350m',
      name: 'LFM2 350M Q4_K_M',
      repo: 'LiquidAI/LFM2-350M-GGUF',
      files: ['LFM2-350M-Q4_K_M.gguf'],
      framework: LLMFramework.LlamaCpp,
      modality: ModelCategory.Language,
      memoryRequirement: 250_000_000,
    },
  },
  {
    id: 'qwen-0.5b',
    name: 'Qwen2.5 · 0.5B',
    desc: 'Tiny + multilingual (Hindi works well)',
    size: '~400 MB',
    badge: 'MULTILINGUAL',
    badgeColor: '#0891b2',
    sdkDef: {
      id: 'qwen-0.5b',
      name: 'Qwen2.5 0.5B Instruct',
      url: 'https://huggingface.co/Qwen/Qwen2.5-0.5B-Instruct-GGUF/resolve/main/qwen2.5-0.5b-instruct-q4_0.gguf',
      framework: LLMFramework.LlamaCpp,
      modality: ModelCategory.Language,
      memoryRequirement: 400_000_000,
    },
  },
  {
    id: 'llama-1b',
    name: 'Llama 3.2 · 1B',
    desc: "Meta's fast model · Good quality",
    size: '~700 MB',
    badge: 'FAST',
    badgeColor: '#7c3aed',
    sdkDef: {
      id: 'llama-1b',
      name: 'Llama 3.2 1B Instruct',
      repo: 'bartowski/Llama-3.2-1B-Instruct-GGUF',
      files: ['Llama-3.2-1B-Instruct-Q4_K_M.gguf'],
      framework: LLMFramework.LlamaCpp,
      modality: ModelCategory.Language,
      memoryRequirement: 700_000_000,
    },
  },
  {
    id: 'phi-3.5-mini',
    name: 'Phi-3.5 Mini',
    desc: "Microsoft's efficient model · High quality",
    size: '~1.8 GB',
    badge: 'SMART',
    badgeColor: '#b45309',
    sdkDef: {
      id: 'phi-3.5-mini',
      name: 'Phi-3.5 Mini Instruct',
      repo: 'bartowski/Phi-3.5-mini-instruct-GGUF',
      files: ['Phi-3.5-mini-instruct-Q4_K_M.gguf'],
      framework: LLMFramework.LlamaCpp,
      modality: ModelCategory.Language,
      memoryRequirement: 1_800_000_000,
    },
  },
  {
    id: 'llama-3b',
    name: 'Llama 3.2 · 3B',
    desc: 'Best quality balance',
    size: '~1.8 GB',
    badge: 'BALANCED',
    badgeColor: '#0369a1',
    sdkDef: {
      id: 'llama-3b',
      name: 'Llama 3.2 3B Instruct',
      repo: 'bartowski/Llama-3.2-3B-Instruct-GGUF',
      files: ['Llama-3.2-3B-Instruct-Q4_K_M.gguf'],
      framework: LLMFramework.LlamaCpp,
      modality: ModelCategory.Language,
      memoryRequirement: 1_800_000_000,
    },
  },
]

// ── SINGLETON INIT — safe to call multiple times from any component
let _initPromise = null

export async function initSDK() {
  if (_initPromise) return _initPromise

  _initPromise = (async () => {
    // 1. Initialize RunAnywhere core SDK
    await RunAnywhere.initialize({
      environment: SDKEnvironment.Development,
      debug: false,
    })

    // 2. Register LlamaCpp backend — loads WASM/WebGPU binaries automatically
    await LlamaCPP.register()

    // 3. Register all models in catalog (they won't download yet — just registered)
    RunAnywhere.registerModels(MODELS.map(m => m.sdkDef))
  })()

  return _initPromise
}

export { RunAnywhere, ModelManager, ModelCategory, LlamaCPP, EventBus }
