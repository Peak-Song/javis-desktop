import * as path from 'path'
import * as webpack from 'webpack'
import CopyPlugin from 'copy-webpack-plugin'

const config: webpack.Configuration = {
  entry: path.join(__dirname, 'src/electron/index.ts'),
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/electron/preload.js', to: 'preload.js' }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'electron-entry.js'
  },
  target: 'electron-main'
}

export default config
