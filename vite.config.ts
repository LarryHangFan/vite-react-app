
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    react(),
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    })
  ],
  css: {
    //* css模块化
    modules: { // css模块化 文件以.module.[css|less|scss]结尾
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      hashPrefix: 'prefix',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 支持内联 JavaScript
        additionalData: `@import "${path.resolve(__dirname, 'src/assets/styles/common.less')}";`
      }
    }
  },
})
