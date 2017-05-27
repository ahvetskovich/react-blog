const path = require('path');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]',
        exclude: /node_modules/
      },
      {test: /\.svg$/, loader: 'file-loader', exclude: /node_modules/},
      {
        test: /\.jsx?$/, // both .js and .jsx
        loader: 'eslint-loader',
        include: path.resolve(process.cwd(), 'src'),
        enforce: 'pre',
        options: {
          fix: true,
        },
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
}

