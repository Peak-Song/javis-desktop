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
      // by default the `sass` option will apply to both syntaxes
      // because `scss` syntax is also processed by sass-loader underlyingly
      // but when configuring the `data` option
      // `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
      // in that case, we can target the `scss` syntax separately using the `scss` option
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
      }
    })
  },
  pluginOptions: {},
  chainWebpack (config) {
    // Provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    config.set('name', name)
  }
}
