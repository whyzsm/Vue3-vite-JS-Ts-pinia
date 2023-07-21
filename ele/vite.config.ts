import { defineConfig,loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'


// 如果这里飘红则安装下依赖。
// pnpm add @types/node -D
// npm install @types/node -D
// yarn add @types/node -D
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log('env',env)
  return{
  plugins: [
    vue(),
    vueJsx(),
    VueSetupExtend(),
    Components({
      // 指定组件位置, 默认是src/components 自动导入自定义组件
     dirs: ['src/components'],
     extensions: ['vue', 'md'],
     resolvers: [
       ElementPlusResolver({
         importStyle: 'sass' // 非官方，必要
       })
     ],
     dts: 'src/components.d.ts'
   }),
   createSvgIconsPlugin({
     // 指定需要缓存的图标文件夹
     iconDirs: [path.resolve(process.cwd(), 'src/icons')],
     // 指定symbolId格式
     symbolId: 'icon-[dir]-[name]'
   }),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: command === 'serve',
      prodEnabled: command !== 'serve' && true,
      // 这样可以控制关闭mock的时候不让mock打包到最终代码内
      injectCode: `
        import { setupProdMockServer } from '../mock/mockProdServer';
        setupProdMockServer();
      `
    }),
    // ElementPlus(), // 非官方
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-import.d.ts'
    }),
  ],
  resolve: {
    // 配置别名
    alias: {
      "@": resolve(__dirname, "./src")
    },
    extensions: [".js", ".json", ".ts", ".vue"] // 使用路径别名时想要省略的后缀名
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;` // 路径根据配置改变，没有别名就用相对路径和绝对路径
      }
    }
  },
  server: {
    proxy: {
      // 选项写法

      // '/waybillmanage/api/shiro-cas': 'http://10.10.101.96:8899/waybillmanage',
      // '/api/': 'http://10.10.101.96:8899/waybillmanage/', //运单
      // "/api/waybill/getQueryMaxNumber": {
      //   // target:import.meta.env.VITE_API_BASE_URL, // 后台服务器地址
      //   target: 'http://10.10.230.102:58083/', // 所要代理的目标地址
      //   rewrite: (path) => path.replace(/^\/api/, '/api'), // 重写传过来的path路径，比如 `/api/index/1?id=10&name=zs`（注意:path路径最前面有斜杠（/），因此，正则匹配的时候不要忘了是斜杠（/）开头的；选项的 key 也是斜杠（/）开头的）
      //   changeOrigin: true ,// true/false, 默认值:false - 将主机报头的来源更改为目标URL
      //   secure: false, // 支持https
      // },
      '/api/dictionary': { target: 'http://10.10.106.25:6771' },
      "/api": {
        // target:import.meta.env.VITE_API_BASE_URL, // 后台服务器地址
        target: 'http://10.10.230.102:58094/', // 所要代理的目标地址
        rewrite: (path) => path.replace(/^\/api/, '/api'), // 重写传过来的path路径，比如 `/api/index/1?id=10&name=zs`（注意:path路径最前面有斜杠（/），因此，正则匹配的时候不要忘了是斜杠（/）开头的；选项的 key 也是斜杠（/）开头的）
        changeOrigin: true ,// true/false, 默认值:false - 将主机报头的来源更改为目标URL
        secure: false, // 支持https
      },
      // '/scan/api/shiro-cas': { target: 'http://10.10.101.96:8899/scan' }, //单点登录网关--架构
      // '/api/': { target: 'http://10.10.101.96:8899/scan/' }, //扫描


    },
    port:8003
  }
  // 此时会通过上面的代理规则，将源地址代理到目标地址，从而访问目标地址的接口
  // 需要注意的是 /api开头的 /不能丢，正则匹配也是
}
})
