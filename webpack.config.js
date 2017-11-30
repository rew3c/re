const path = require('path')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [{
      test: /\.scss/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'postcss-loader'
      },{
        loader: 'sass-loader',
        options: {
          // 指定scss文件中@import的查询路径
          includePaths: [
            './src/components'
          ]
        }
      }]
    }]
  },
  plugins: [
    new htmlPlugin({template:'./src/index.html'})
  ]
}