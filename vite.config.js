import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['src/tests/setup.vitest.js'],
    globals: true,
    css: true,
  },
  
  // Configuración de build optimizada
  build: {
    // Generar source maps para debugging en producción
    sourcemap: false,
    
    // Optimizaciones de build
    rollupOptions: {
      output: {
        // Separar dependencias grandes en chunks
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          bootstrap: ['bootstrap', 'react-bootstrap'],
        },
      },
    },
    
    // Compresión y optimización
    minify: 'esbuild',
    target: 'es2015',
    
    // Configuración de assets
    assetsDir: 'assets',
    assetsInlineLimit: 4096, // 4kb
  },
  
  // Configuración del servidor de desarrollo
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  
  // Configuración de preview
  preview: {
    port: 4173,
    cors: true,
  },
  
  // Alias para imports más limpios
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@views': '/src/views',
      '@atoms': '/src/components/atoms',
      '@molecules': '/src/components/molecules',
      '@organisms': '/src/components/organisms',
      '@templates': '/src/components/templates',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
    },
  },
  
  // Optimización de dependencias
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'bootstrap'],
  },
})
