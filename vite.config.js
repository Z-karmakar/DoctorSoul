import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    historyApiFallback: true,
    server: {
      port:5174,
      proxy: {
        '/auth': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
        ws: true,
        headers: {
          Connection: 'keep-alive'
        }
      },
        '/api': {
          target: 'http://localhost:4000',
          changeOrigin: true,
          secure: false
        }
      },
    }
  }        
});