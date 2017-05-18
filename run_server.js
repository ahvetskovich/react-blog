var config            = require('./webpack.config.js');
var webpack           = require('webpack');
var WebpackDevServer  = require('webpack-dev-server');

webpackDevServer = new WebpackDevServer(webpack(config), {
    hot: true,
    quiet: false,
    inline: true,
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    stats: {
        colors: true,
        progress: true
    }
})

webpackDevServer.listen(4000, '0.0.0.0', function (error, result) {
    if (error) {
        console.error(error)
    }

    console.log('📡  ON AIR @ http://localhost:4000')
})