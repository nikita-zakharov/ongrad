// Webpack4
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const prependSassUtils = require('./prependSassUtils')

module.exports = {
    entry: {main: './src/js/app.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                url: false
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                outputStyle: 'expanded',
                                data: prependSassUtils()
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            // outputPath: 'img/',
                            // publicPath: ''
                        }
                    }
                ],
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'style.css'}),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: './src/img',
                to: 'img'
            },
            {
                from: './src/fonts',
                to: 'fonts'
            }
        ]),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/html/index.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 9000
    }
}