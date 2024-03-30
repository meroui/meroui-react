const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.ts',
    Button: './src/Button/Button.tsx',
    Skeleton: './src/Skeleton/Skeleton.tsx'
  },
  output: {
    filename: '[name]/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    libraryTarget: 'umd',
    library: '@meroui/react'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/, /src\stories/],
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false
          }
        }
      })
    ]
  },
  externals: {
    react: 'react'
  }
}
