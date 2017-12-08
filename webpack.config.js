const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

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
        test: /\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          { 
            loader: 'style-loader',
            options: {
              sourceMap:true
            }
          },
          {
            loader: 'css-loader',
            options: { 
              minimize: true,
              sourceMap: true
            }
          },
          { 
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: { 
              includePaths: ['./src/components'],
              sourceMap: true
             }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: resolve('dist'),
    port:9000,
    inline:true
  },
  plugins: [
    new htmlPlugin({ template: './src/index.html' }),
    new webpack.SourceMapDevToolPlugin({
      filename: 'abc.map',
      exclude: ['test.js']
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
