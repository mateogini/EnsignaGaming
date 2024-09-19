import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/',  // Ruta base para GitHub Pages
  plugins: [react()],
});
