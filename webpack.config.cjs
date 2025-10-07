const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/main/index.html', 
        filename: 'index.html',
        inject: true
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'licenses.txt',
            to: 'LICENSE',
            noErrorOnMissing: true 
          }
        ]
      })
  
    ],
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