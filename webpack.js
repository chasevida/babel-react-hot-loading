// webpack.js

var config = require('./gulp/config');
var path = require('path');
var webpack = require('webpack');
var SplitByPathPlugin = require('webpack-split-by-path');


module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        config.globs.scripts
    ],
    output: {
        path:  path.join(__dirname, config.paths.build, 'js'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: path.join(__dirname, config.paths.src, 'scripts'),
            loaders: ['react-hot', 'babel-loader']
        }, {
            test: /\.html$/,
            loader: 'file?name=[name].[ext]'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new SplitByPathPlugin([
            {
                name: 'libs',
                path: path.join(__dirname, 'node_modules/')
            }
        ])
    ],
    server: {
        contentBase: config.paths.build,
        hot: true,
        quiet: false,
        noInfo: false,
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }
    }
};
