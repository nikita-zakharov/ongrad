const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    // mangle: true,
                },
            }),
        ],
    },
    plugins: [
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
                // custom options
                // zindex: false,
            },
        }),
    ],
});