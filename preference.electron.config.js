const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin =  require('html-webpack-plugin')

module.exports = {
  entry: {
    main: path.join(__dirname, 'src/preference/preference.js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './fonts/[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/preference/preference.html')
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.vue'],
    alias: {
      '@@': path.resolve(__dirname, 'src/preference/')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist/preference')
  },
  target: 'electron-renderer'
}
