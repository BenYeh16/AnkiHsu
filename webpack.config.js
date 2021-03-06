var webpack = require('webpack');
var path = require('path');

var webpackConfig = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './client.js'
    ],
    output: {
        path: path.resolve('./build/js'),
        publicPath: '/public/js/',
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: [
                    require.resolve('react-hot-loader'),
                    require.resolve('babel-loader')
                ]
            },
            { test: /\.json$/, loader: 'json-loader' },
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                loader: 'webpack-atomizer-loader?configPath=' + __dirname + '/atomCssConfig.js!babel-loader'
            },
        ]
    },
    node: {
        setImmediate: false,
        'console': true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    devtool: 'eval'
};

module.exports = webpackConfig;
