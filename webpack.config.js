const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const openBrowser = require('react-dev-utils/openBrowser');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
      '@': path.resolve(__dirname, 'src'),
    },
  },
  entry: [path.resolve(__dirname, 'src/index.tsx')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `js/${generateFileName('name', 'js')}`,
    chunkFilename: IS_DEV ? '[name].bundle.js' : '[name].[hash:base64:5].chunk.js',
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
            options: {
              additionalData: `
              @import "src/assets/styles/_mixins.scss";
              `,
            },
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
            options: {
              additionalData: `
              @import "src/assets/styles/_mixins.scss";
              `,
            },
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
      {
        test: /\.(jpe?g|png|gif|webp)$/,
        type: 'asset',
      },
    ],
  },
  devtool: setupDevtool(), // Здесь устанавливаем devtools.
  plugins: IS_DEV // Если DEV-режим, то не ставим MiniCss, так как нам нужен hot reload
    ? [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'public/index.html'),
        }),
        // new BundleAnalyzerPlugin(),
      ]
    : [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'public/index.html'),
        }),
        new MiniCssExtractPlugin({
          filename: `styles/${generateFileName('name', 'css')}`,
          chunkFilename: `styles/${generateFileName('id', 'css')}`,
        }),
      ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
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
