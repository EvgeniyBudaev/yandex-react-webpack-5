const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                //use: ['babel-loader', "eslint-loader"], //TypeError: Cannot read property 'getFormatter' of undefined
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                },
            },
            {
                test: /\.(woff|woff2|ttf)$/,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    plugins: [
        // добавим плагин для hmr
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        static: path.join(__dirname, './public'),
        compress: true,
        port: 3000,
        // сообщим dev-серверу, что в проекте используется hmr
        hot: true
    },
};