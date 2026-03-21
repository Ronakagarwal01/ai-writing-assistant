# ✍️ AI Writing Assistant — RunAnywhere SDK

> 100% offline browser AI · RunAnywhere Web SDK · WebGPU/WASM · No API Key · No Backend

---

## 🗂 Project Structure

```
ai-writing-assistant/
├── index.html              ← Entry HTML
├── package.json            ← Dependencies (RunAnywhere SDK)
├── vite.config.js          ← Vite config with WASM + COEP headers
└── src/
    ├── main.jsx            ← React entry point
    ├── App.jsx             ← Main app (all 3 tabs)
    ├── runanywhere.js      ← SDK init + model catalog
    └── styles.css          ← Full dark theme
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

> ⚠️ Use Chrome or Edge (WebGPU support required)

---

## 🏗 GitHub Branch Setup (Step by Step)

### Step 1 — GitHub par nayi repo banao

1. https://github.com/new pe jao
2. Repository name: `ai-writing-assistant`
3. Public select karo
4. "Create repository" click karo

---

### Step 2 — Local folder mein Git initialize karo

Command Prompt mein project folder pe jao:

```bash
cd C:\Users\ronak\ai-writing-assistant
git init
git add .
git commit -m "Initial commit — AI Writing Assistant with RunAnywhere SDK"
```

---

### Step 3 — GitHub se connect karo

```bash
git remote add origin https://github.com/YOUR_USERNAME/ai-writing-assistant.git
git branch -M main
git push -u origin main
```

> `YOUR_USERNAME` ko apne GitHub username se replace karo

---

### Step 4 — Feature Branches banana (Recommended Workflow)

Hackathon mein alag alag features ke liye branches banao:

```bash
# Writer feature branch
git checkout -b feature/writing-assistant
# ... kaam karo ...
git add .
git commit -m "feat: writing assistant with 5 AI actions"
git push origin feature/writing-assistant

# Chatbot branch
git checkout -b feature/chatbot
# ... kaam karo ...
git add .
git commit -m "feat: bilingual chatbot with streaming"
git push origin feature/chatbot

# Photo feature branch
git checkout -b feature/photo-ask
# ... kaam karo ...
git add .
git commit -m "feat: photo upload and AI analysis"
git push origin feature/photo-ask
```

---

### Step 5 — Main mein merge karo

GitHub website pe:
1. Apni repo kholo
2. "Pull requests" tab pe jao
3. "New pull request" click karo
4. feature branch → main select karo
5. "Merge pull request" click karo

Ya terminal se:
```bash
git checkout main
git merge feature/writing-assistant
git push origin main
```

---

### Step 6 — GitHub Pages pe Deploy karo (Free)

```bash
# 1. Build karo
npm run build

# 2. GitHub Pages ke liye gh-pages install karo
npm install --save-dev gh-pages

# 3. package.json mein add karo:
# "homepage": "https://YOUR_USERNAME.github.io/ai-writing-assistant",
# "scripts": {
#   "deploy": "gh-pages -d dist"
# }

# 4. Deploy karo
npm run deploy
```

Live URL: `https://YOUR_USERNAME.github.io/ai-writing-assistant`

---

## 🧩 RunAnywhere SDK — Kaise Kaam Karta Hai

| Step | Kya Hota Hai |
|------|-------------|
| `initSDK()` | RunAnywhere core + LlamaCpp WASM register hota hai |
| `ModelManager.downloadModel()` | HuggingFace se GGUF file browser OPFS mein download |
| `ModelManager.loadModel()` | GGUF file llama.cpp WASM engine mein load |
| `TextGeneration.generateStream()` | Real-time token streaming shuru |
| `LlamaCPP.accelerationMode` | `'webgpu'` ya `'cpu'` — kaunsa hardware use ho raha hai |

---

## 🏆 Hackathon Requirements — All Fulfilled

- ✅ **RunAnywhere SDK** — `@runanywhere/web` + `@runanywhere/web-llamacpp`
- ✅ **WebGPU/WebAssembly** — llama.cpp WASM, GPU accelerated
- ✅ **No backend** — zero server, zero cloud API
- ✅ **No API key** — completely free to run
- ✅ **User data never leaves device** — verifiable in DevTools
- ✅ **React + Vite** — production tech stack
- ✅ **Improve, Summarize, Make Formal** buttons
- ✅ **Loading indicator** with download % progress
- ✅ **Error handling** with retry
- ✅ **Clean modern UI** — dark theme
- 🎁 **BONUS: Tone Detector** — live rule-based AI
- 🎁 **BONUS: Chatbot** — Hindi + English conversation
- 🎁 **BONUS: Photo Ask** — image upload + AI analysis

---

## 💻 Tech Stack

| Technology | Usage |
|-----------|-------|
| React 18 + Vite | UI framework |
| `@runanywhere/web` | Core SDK |
| `@runanywhere/web-llamacpp` | llama.cpp WASM/WebGPU |
| HuggingFace GGUF | Model weights |
| Browser OPFS | Local model storage |
| WebGPU / WASM | Hardware acceleration |

---

## 🔒 Privacy Guarantee

DevTools → Network tab → Model load ke baad koi bhi feature use karo.
**Zero network requests.** Aapka data kabhi device nahi chodta.

---

*Built for hackathon · RunAnywhere Web SDK · 100% browser-local AI*
