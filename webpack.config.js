const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const openBrowser = require('react-dev-utils/openBrowser');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

const setupDevtool = () => {
    return IS_DEV ? 'source-map' : false; // Делаем качественные source maps в DEV-режиме
};

const generateFileName = (type, extension) => {
    return IS_DEV ? `[${type}].${extension}` : `[${type}].[fullhash].${extension}`;
};

const clientConfig = {
    mode: NODE_ENV ? NODE_ENV : 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
    },
    entry: [path.resolve(__dirname, '../src/index.tsx')],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: `js/${generateFileName('name', 'js')}`,
        chunkFilename: IS_DEV ? 'js/[name].chunk.js' : 'js/[name].[hash:base64:5].chunk.js',
        assetModuleFilename: 'static/img/[name].[hash].[ext]',
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Ставим babel вместо ts-loader, потому что SSR пока что сыпет ошибку с ts-loader
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    },
                },
            },
            {
                test: /\.module\.s[ac]ss$/,
                use: [
                    {
                        loader: IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                exportLocalsConvention: 'camelCase',
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['postcss-preset-env'],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/,
                exclude: /\.module.(s[ac]ss)$/,
                use: [
                    {
                        loader: IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader, // Если режим dev, то работает css in js, чтобы был Hot Reload. Если prod, то собирается один css файл (это работает быстрее).
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['postcss-preset-env'],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.svg$/i,
                type: 'asset',
                resourceQuery: /url/, // *.svg?url
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
                use: ['@svgr/webpack'],
            },
            // {
            //   test: /\.(woff|woff2|eot|ttf|jpe?g|png|gif|webp)$/, // Это правило нужно для того, чтобы можно было тянуть картинки и шрифты ссылками, например (background: url('./Assets/Images/react-logo.png')).
            //   use: {
            //     loader: 'url-loader',
            //     options: {
            //       limit: 10000, // В байтах. Это ограничение на размер base64-файла (После его превышения перейдет к file-loader
            //       name: 'static/img/[name].[hash].[ext]',
            //     },
            //   },
            // },
            {
                // test: /\.(woff|woff2|eot|ttf|jpe?g|png|gif|webp)$/,
                test: /\.(jpe?g|png|gif|webp)$/,
                type: 'asset',
            },
        ],
    },
    devtool: setupDevtool(), // Здесь устанавливаем devtools.
    plugins: IS_DEV // Если DEV-режим, то не ставим MiniCss, так как нам нужен hot reload
        ? [
              new HtmlWebpackPlugin({
                  template: path.resolve(__dirname, '../public/index.html'),
              }),
              // new BundleAnalyzerPlugin(),
          ]
        : [
              new CleanWebpackPlugin(),
              new HtmlWebpackPlugin({
                  template: path.resolve(__dirname, '../public/index.html'),
              }),
              new MiniCssExtractPlugin({
                  filename: `styles/${generateFileName('name', 'css')}`,
                  chunkFilename: `styles/${generateFileName('id', 'css')}`,
              }),
          ],
    optimization: {
        minimize: IS_PROD,
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        port: 3000,
        open: true,
        hot: IS_DEV,
        historyApiFallback: true,
        onListening: (devServer) => {
            if (!devServer) throw new Error('webpack-dev-server is not defined');

            const currentAddress = devServer.server.address();

            openBrowser(`http://${currentAddress.address}:${currentAddress.port}`);
        },
    },
};

module.exports = clientConfig;
