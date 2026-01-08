# Vite with Tailwind css setup: V4 vs V3

A comprehensive guide for setting up Tailwind CSS with Vite and TypeScript, covering both the modern v4 approach and the legacy v3 setup.

---

## Table of Contents

- [Part A: Tailwind CSS v4 (Modern Setup)](#part-a--tailwind-css-v4-modern-setup)
- [Part B: Tailwind CSS v3 (Legacy Setup)](#part-b--tailwind-css-v3-legacy-setup)
- [Part C: Core Setup Differences](#part-c--core-setup-differences)
- [Final Project Structure Comparison](#final-project-structure-comparison)

---

## PART A — Tailwind CSS v4 (Modern Setup)

**This is the recommended setup for new projects.**

Tailwind v4 is framework-aware, plugin-driven, and requires no CLI, no PostCSS, and no initialization.

### Step A1: Create Vite + TypeScript Project

```bash
npm create vite@latest my-app
```

**Choose:**
- Framework: **Vanilla**
- Variant: **TypeScript**

```bash
cd my-app
npm install
```

### Step A2: Install Tailwind v4

```bash
npm install tailwindcss @tailwindcss/vite
```

**What this does:**
- Installs Tailwind's core engine
- Installs the Vite plugin, which replaces:
  - CLI
  - PostCSS
  - JIT configuration

### Step A3: Add Vite Configuration (Required)

Create at project root:

**`vite.config.js`**

```javascript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```

**Why this is required:**
- Tailwind v4 runs inside Vite
- Without this plugin, Tailwind does nothing

### Step A4: Add Tailwind to CSS

Edit existing CSS file:

**`src/style.css`**

```css
@import "tailwindcss";
```

**Important:**
- This single line replaces all legacy Tailwind directives
- No `@tailwind base/components/utilities`

### Step A5: Import CSS in Entry File

**`src/main.ts`**

```typescript
import './style.css'
```

**Why:**
- In Vite, JS/TS is the entry
- CSS is pulled into the dependency graph via imports

### Step A6: Connect Entry File in HTML

**`index.html`**

```html
<script type="module" src="/src/main.ts"></script>
```

**Notes:**
- `type="module"` is mandatory
- Absolute path (`/src/...`) is required
- CSS is not linked in HTML

### Step A7: Run the Dev Server

```bash
npm run dev
```

### Step A8: Verify Tailwind

```html
<h1 class="text-6xl font-black text-blue-500">
  Tailwind v4 is working
</h1>
```

If styles apply, setup is complete. ✅

### Optional Configuration (v4 Only When Needed)

Tailwind v4 does not require a config file.

If customization is needed:
- Create `tailwind.config.js` manually
- No CLI command is used

**Example:**

```javascript
export default {
  theme: {
    extend: {},
  },
}
```

---

## PART B — Tailwind CSS v3 (Legacy Setup)

**This setup is for older projects or maintenance work.**

Tailwind v3 relies on PostCSS + CLI + configuration files.

### Step B1: Create Vite + TypeScript Project

Same as v4.

### Step B2: Install Tailwind v3 Dependencies

```bash
npm install -D tailwindcss postcss autoprefixer
```

### Step B3: Initialize Tailwind (MANDATORY in v3)

```bash
npx tailwindcss init -p
```

**This generates:**
- `tailwind.config.js`
- `postcss.config.js`

Both are required in v3.

### Step B4: Configure Content Paths (v3 Only)

**`tailwind.config.js`**

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Why this is required:**
- v3 must be told what files to scan
- Missing paths = missing CSS

### Step B5: Add Tailwind Directives to CSS

**`src/style.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step B6: Import CSS in Entry File

Same as v4:

```typescript
import './style.css'
```

### Step B7: Run Dev Server

```bash
npm run dev
```

---

## PART C — Core Setup Differences (Step-by-Step)

| Feature | Tailwind v3 | Tailwind v4 |
|---------|-------------|-------------|
| **Installation** | Tailwind + PostCSS + Autoprefixer | Tailwind + Vite plugin |
| **Initialization** | `npx tailwindcss init -p` | ❌ No init step |
| **Configuration** | Mandatory `tailwind.config.js` | Optional, manual only |
| **CSS Entry** | `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| **Build Model** | CLI + PostCSS pipeline | Vite plugin pipeline |
| **File Scanning** | Manual `content` paths | Automatic framework awareness |

---

## Final Project Structure Comparison

### Tailwind v4

```
├─ index.html
├─ vite.config.js
├─ src/
│  ├─ main.ts
│  └─ style.css
```

### Tailwind v3

```
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
├─ src/
│  ├─ main.ts
│  └─ style.css
```

---

## Final Mental Model

**v3** = build-first, config-heavy  
**v4** = plugin-driven, on-demand
