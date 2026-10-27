// Configuración de Vite: servidor de desarrollo y build de producción.
// El plugin de React transforma el JSX de los archivos .jsx.
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
})
