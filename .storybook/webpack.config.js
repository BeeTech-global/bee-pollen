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
    devtool: 'cheap-eval-source-map',
    target: 'web',
    name: 'bee-pollen',
    resolve: { modules: [packagesPath] },
    module: {
      rules: [{
        test: /\.scss$/,
        include: [
          nodeModules,
          packagesPath,
          path.resolve(__dirname, '.')
        ],
        use: [{
          loader: require.resolve('style-loader'),
        }, {
          loader: require.resolve('css-loader'),
          options: { sourceMap: true }
        }, {
          loader: require.resolve('postcss-loader'),
          options: {
            sourceMap: true,
            plugins: () => [
              fontMagician({ display: 'block' }),
              flexBugsFixes(),
              autoprefixer({
                browsers: ['last 3 versions', 'ie >= 11', '> 5%']
              }),
              mqPacker()
            ]
          }
        }, {
          loader: require.resolve('sass-loader'),
          options: { sourceMap: true }
        }]
      }]
    }
  })

  return config
  /* eslint-enable */
}
