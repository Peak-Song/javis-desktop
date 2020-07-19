// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
const name = 'Javis DeskTop UI'

const _srcBase = path.resolve(__dirname, './src/renderer')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  lintOnSave: process.env.NODE_ENV === 'development',
  pwa: {
    name: name
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/styles/_variables.scss";\n@import "@/styles/_mixins.scss";'
      }
    }
  },
  configureWebpack: config => {
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
        alias: {
          '@': _srcBase,
          '@c': path.resolve(_srcBase, '/components'),
          utils: path.resolve(_srcBase, './utils'),
          views: path.resolve(_srcBase, '/views'),
          assets: path.resolve(_srcBase, '/assets'),
          com: path.resolve(_srcBase, '/components'),
          store: path.resolve(_srcBase, '/store')
        }
      },
      target: 'electron-renderer'
    })
  },
  pluginOptions: {},
  chainWebpack (config) {
    config.set('name', name)
  }
}
