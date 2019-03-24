const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html',
    })],
    module: {
        rules: [
            {
                test: /\scss$/,
                use:[
                    "style-loader", // 3. Injects styles into DOM
                    "css-loader", // 2. Turns css into js
                    "sass-loader" // 1. Turns sass into css
                    ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};