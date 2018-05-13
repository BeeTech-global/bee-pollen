// const webpack = require('webpack')
const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const flexBugsFixes = require('postcss-flexbugs-fixes')
const autoprefixer = require('autoprefixer')
const cssNano = require('cssnano')
const mqPacker = require('css-mqpacker')
const pkg = require('../package.json')

const packagesPath = path.resolve(__dirname, '../', 'packages')
const nodeModules = path.resolve(__dirname, '../', 'node_modules')

const baseConfig = {
  bail: true,
  devtool: false,
  target: 'web',
  entry: {
    'bee-pollen': path.resolve(__dirname, '../', 'packages', 'plant', 'plant.scss'),
    'remessa-theme': path.resolve(__dirname, '../', 'packages', 'remessa-theme', 'remessa-theme.scss')
  },
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: '[name].js',
    publicPath: './'
  },
  resolve: {
    modules: [packagesPath, nodeModules],
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    strictExportPresence: true,
    rules: [{
      test: /\.scss$/,
      include: [
        nodeModules,
        packagesPath
      ],
      use: ExtractTextPlugin.extract({
        use: [
          'css-loader', {
            loader: require.resolve('postcss-loader'),
            options: {
              plugins: () => [
                cssNano({
                  discardComments: { removeAll: true }
                }),
                autoprefixer({
                  browsers: ['last 2 versions', 'ie >= 11', '> 5%']
                }),
                flexBugsFixes(),
                mqPacker()
              ]
            }
          }, {
            loader: require.resolve('sass-loader')
          }
        ]
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.BannerPlugin({
      banner: `[name] v${pkg.version}`
    })
  ]
}

module.exports = baseConfig
