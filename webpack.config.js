const path = require('path')
const htmlPlugin = require('html-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: resolve('dist'),
    filename: 'main.js'
  },
  resolve: {
    alias: {
      "@": resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { minimize: true }
          },
          { loader: 'postcss-loader' },
          {
            loader: 'sass-loader',
            options: { includePaths: ['./src/components'] }
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlPlugin({ template: './src/index.html' })
  ]
}
