import CopyWebpackPlugin from 'copy-webpack-plugin';
const { clear } = require('console')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = { 
    entry: './src/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    mode: 'development',
    devServer: {
      static: './dist', 
      port: 9000,       
      open: true,       
      hot: true,        
      watchFiles: ['src/**/*'], 
    },
    plugins: [new HtmlWebpackPlugin({
      template: './src/main/index.html', 
      filename: 'index.html',
      inject: true
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'dist/assets')}]
        })],
    module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
}