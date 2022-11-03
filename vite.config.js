import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // base: process.env.NODE_ENV === 'production' ? './' : '/',
  base: './',
  publicPath: "./",
  server: {
    host: '0.0.0.0',
    port: '3000'
  },
  // build: {
  //   terserOptions: {
  //     compress: {
  //       //生产环境时移除console
  //       drop_console: true,
  //       drop_debugger: true,
  //     },
  //   },
  //   // 取消计算文件大小，加快打包速度
  //   reportCompressedSize: false,
  //   sourcemap: true,
  //   // assetsDir: 'static/img',
  //   rollupOptions: {
  //     output: {
  //       chunkFileNames: 'js/[name]-[hash].js',
  //       entryFileNames: 'js/[name]-[hash].js',
  //       assetFileNames: '[ext]/[name]-[hash].[ext]',
  //     },
  //   },
  // },
})
