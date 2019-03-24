const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html',
    })],
    rules: [
        {
            test: /\.scss$/,
            use:[
                "style-loader", // 3. Injects styles into DOM
                "css-loader", // 2. Turns css into js
                "sass-loader" // 1. Turns sass into css
                ]
        }
    ]
};