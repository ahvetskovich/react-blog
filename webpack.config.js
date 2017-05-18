const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/},
            {test: /\.svg$/, loader: 'file-loader', exclude: /node_modules/}
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        historyApiFallback: {
            index: './index.html'
        }
    }
}

