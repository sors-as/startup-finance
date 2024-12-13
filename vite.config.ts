import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': "/src/app",
      '@library': "/src/library",
    },
  },
  plugins: [
    react(),
    // scopeTailwind({react: true})
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // Your library's entry point,
      name: 'StartupFinance',
      formats: ['es', 'umd'],
      fileName: (format) => `startup-finance.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      }
    }
  },
  base: '/startup-finance/'
})
