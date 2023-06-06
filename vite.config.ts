import { fileURLToPath, URL } from 'node:url'
import { appConfig } from './src/config/appConfig'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
// export default defineConfig({})

export default defineConfig(({ command, mode }) => {
  // process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  console.log(process.env.SERVER_URI)
  const baseURI = mode === 'production' ? process.env.BASE_URI : appConfig.baseURI
  const customConfig = {
    base: baseURI,
    build: {
      target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari13'],
      rollupOptions: {
        output: {
          format: 'es'
        }
      }
    },
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }

  if (mode === 'development') {
    // customConfig.server = {
    //   proxy: {
    //     '^/api.*': {
    //       target: appConfig.serverURI,
    //       changeOrigin: true,
    //       rewrite: (path: string) => path.replace(/^\/api/, '')
    //     }
    //   }
    // }
     customConfig.server = {
       host: '0.0.0.0',
       port: '5300',
      //  proxy: {
      //    '^/server.*':{
      //     target: appConfig.serverURI,
      //     changeOrigin: true,
      //     rewrite: (path: string) => path.replace(/^\/api/, '')
      //   }
      //  }
    }
  }
  return customConfig
})
