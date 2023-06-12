const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        mode: isProduction ? 'production' : 'development',
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProduction ? '[name].[contenthash].js' : 'bundle.js',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: 'ts-loader',
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                }, {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                }, {
                    test: /\.svg$/,
                    use: ['svg-url-loader'],
                },
            ],
        },
        optimization: isProduction ? {
            minimize: true,
            runtimeChunk: {
                name: 'runtime',
            },
            splitChunks: {
                chunks: 'all',
            },
        } : { minimize: true, },
        plugins: isProduction ? [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: './index.html',
            })
        ] : [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                filename: './index.html',
            })],
        devServer: {
            port: 3000,
        },
        performance: {
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        },
    };
};