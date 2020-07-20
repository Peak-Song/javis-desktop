// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
const name = 'Javis DeskTop UI'

const _srcBase = path.resolve(__dirname, './src/renderer')

module.exports = {
  outputDir: path.resolve(__dirname, 'dist/renderer'),
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  lintOnSave: process.env.NODE_ENV === 'development',
  pwa: {
    name: name
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: (content, loaderContext) => {
          const { resourcePath, rootContext } = loaderContext
          const relativePath = path.relative(rootContext, resourcePath)

          if (relativePath.includes('_variables.scss') || relativePath.includes('_mixins.scss')) {
            return content
          }

          return '@import "@/styles/_variables.scss";\n@import "@/styles/_mixins.scss";\n' + content
        }
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
