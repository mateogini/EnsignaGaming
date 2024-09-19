import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/EnsignaGaming/', // Ruta base para GitHub Pages
  plugins: [react()],
})
