const path = require('path')
const merge = require('webpack-merge')
const fontMagician = require('postcss-font-magician')
const flexBugsFixes = require('postcss-flexbugs-fixes')
const autoprefixer = require('autoprefixer')
const mqPacker = require('css-mqpacker')

const packagesPath = path.resolve(__dirname, '../', 'packages')
const nodeModules = path.resolve(__dirname, '../', 'node_modules')

module.exports = storybookBaseConfig => {
  /* eslint-disable no-param-reassign */

  const config = merge(storybookBaseConfig, {
    devtool: 'cheap-module-eval-source-map',
    target: 'web',
    name: 'bee-pollen',
    resolveLoader: {
      modules: [nodeModules, path.resolve(__dirname, '.', 'loaders')]
    },
    resolve: {
      modules: [packagesPath, nodeModules]
    },
    module: {
      rules: [{
        test: /\.scss$/,
        include: [
          nodeModules,
          packagesPath,
          path.resolve(__dirname, '.')
        ],
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[hash].css'
          }
        }, {
          loader: 'add-source-map-loader'
        }, {
          loader: require.resolve('postcss-loader'),
          options: {
            sourceMap: true,
            plugins: () => [
              flexBugsFixes(),
              autoprefixer({
                browsers: ['last 3 versions', 'ie >= 11', '> 5%']
              }),
              mqPacker()
            ]
          }
        }, {
          loader: require.resolve('sass-loader'),
          options: {
            sourceMap: true
          }
        }]
      }]
    }
  })

  return config
  /* eslint-enable */
}
