import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Markdown from '@pity/vite-plugin-react-markdown'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Markdown({ 
      wrapperClasses: 'markdown-body',
      remarkPlugins: []
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  preview: {
    port: 4173
  },
})