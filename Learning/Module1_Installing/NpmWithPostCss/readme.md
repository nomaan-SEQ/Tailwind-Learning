# Tailwind CSS v4 – Simple HTML Project Setup

This guide explains how to initialize a simple project using **Tailwind CSS v4** with plain HTML and npm.

---

## Prerequisites

- Node.js installed
- npm available in your terminal

---

## Setup Steps

### 1. Create Project Folder

```bash
mkdir <Project name>
cd <Project name>
```

### 2. Initialize npm

```bash
npm init -y
```

This creates a `package.json` file.

### 3. Install Required Dependencies

```bash
npm install -D tailwindcss postcss autoprefixer @tailwindcss/cli
```

**Installed packages:**
- `tailwindcss` → Tailwind CSS framework
- `@tailwindcss/cli` → Tailwind CLI tool
- `postcss` → CSS processing tool
- `autoprefixer` → Adds vendor prefixes to CSS

### 4. Create Project Folders

```bash
mkdir src dist
```

- `src` → source files
- `dist` → generated output files

### 5. Create Tailwind Input CSS File

Create the file: `src/input.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

This file tells Tailwind which CSS layers to generate.

### 6. Create HTML File

Create a file named `index.html` at the project root.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind CSS v4</title>
  <link href="./dist/output.css" rel="stylesheet">
</head>
<body class="p-10 bg-gray-100">
  <h1 class="text-3xl font-bold text-blue-600">
    Tailwind CSS is working
  </h1>
</body>
</html>
```

### 7. Build Tailwind CSS (One-time Build)

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css
```

This command generates the Tailwind CSS file once.

> **Note:** If you make changes afterward, you must run the command again.

### 8. Run Tailwind in Watch Mode (Recommended for Development)

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

**What Watch Mode Does:**
- Keeps the Tailwind CLI running
- Automatically rebuilds `output.css` when HTML or CSS files change
- Ideal for development
- Saves time by avoiding repeated manual builds

### 9. Open the HTML File

- Open `index.html` directly in a browser
- **OR** use a Live Server extension in VS Code

### 10. Stop Watch Mode

Press the following in the terminal:

```
CTRL + C
```

### 11. Production Build (Optional)

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify
```

This creates a smaller, optimized CSS file for production use.

---

## Project Structure Overview

```
NpmWithPostCss/
├─ src/
│  └─ input.css
├─ dist/
│  └─ output.css
├─ index.html
├─ package.json
└─ node_modules/
```

---

## Important Notes

- Tailwind CSS v4 does not require a configuration file by default
- `tailwind.config.js` is optional and only needed for customization
- Tailwind v4 does not use an `init` command

---

## Quick Reference

| Command | Purpose |
|---------|---------|
| `npm init -y` | Initialize npm project |
| `npx tailwindcss -i ./src/input.css -o ./dist/output.css` | One-time build |
| `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch` | Watch mode (development) |
| `npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify` | Production build |

---

**Happy coding with Tailwind CSS v4! 🎨**