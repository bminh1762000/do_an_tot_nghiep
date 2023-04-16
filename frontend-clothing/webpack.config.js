/**
 * Main file of webpack config.
 * Please do not modified unless you know what to do
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// global variables
const rootPath = path.resolve(__dirname);
const distPath = rootPath + '/src';

const entries = {
    'sass/style.react': './src/index.scss',
};

const mainConfig = function () {
    return {
        mode: 'development',
        stats: 'errors-only',
        performance: {
            hints: false,
        },
        entry: entries,
        output: {
            // main output path in assets folder
            path: distPath,
            // output path based on the entries' filename
            filename: '[name].js',
        },
        resolve: { extensions: ['.scss'] },
        plugins: [
            // create css file
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
            ],
        },
    };
};

module.exports = function () {
    return [mainConfig()];
};
