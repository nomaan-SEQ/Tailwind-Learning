import './index.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="text-center">
      <h1 class="text-5xl font-bold text-gray-900 mb-4">
        Welcome to Tailwind CSS
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        Build amazing designs without leaving your HTML
      </p>
      <button class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
