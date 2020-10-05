// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

const name = 'Javis DeskTop UI'

const _srcBase = path.resolve(__dirname, './src/renderer')
function resolve (dir) {
  return path.join(_srcBase, dir)
}

module.exports = {
  publicPath: './',
  assetsDir: 'assets',
  outputDir: 'dist',
  devServer: {
    // can be overwritten by process.env.HOST
    host: '0.0.0.0',
    port: 7895
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
  pwa: {
    name: name
  },
  chainWebpack: config => {
    // 路径别名，如用“@”指代“src”等
    // Path alias, such as "@" for "src", etc.
    config.resolve.alias
      .set('@', _srcBase)
      .set('@c', resolve('components'))
      .set('src', resolve('src'))
      .set('static', resolve('src/assets'))
      .set('utils', resolve('utils'))
      .set('views', resolve('views'))
      .set('svg', resolve('assets/svg'))
      .set('store', resolve('store'))
  },
  pluginOptions: {
    electronBuilder: {
      preload: 'src/renderer/preload.js',
      disableMainProcessTypescript: false,
      mainProcessTypeChecking: true,
      builderOptions: {
        win: {
          icon: './public/app.ico'
        },
        mac: {
          icon: './public/app.png'
        },
        productName: name
      },
      mainProcessFile: 'src/background.ts'
    },
    // i18n config
    i18n: {
      locale: 'zh',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
