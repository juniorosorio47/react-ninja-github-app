'use strict';

const webpack = require('webpack');
const path = require('path');
const validate = require('webpack-validator');

module.exports = validate({
    devtool: 'source-map',

    entry: [
        "react-hot-loader/patch",
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",
        path.join(__dirname, 'src', 'index')
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module:{
        preLoaders:[{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'standard'
        }],
        loaders:[{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel'
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            include: /css/,
            loader: 'css-loader'
        },
    ]}
})