import * as path from 'path'
import * as webpack from 'webpack'

const config: webpack.Configuration = {
  entry: path.join(__dirname, 'src/electron/index.ts'),
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
    filename: 'index.js'
  },
  target: 'electron-main' // todo 不写该行会报 Can't resolve 'fs'
}

export default config
