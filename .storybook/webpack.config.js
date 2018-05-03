const path = require('path')
const merge = require('webpack-merge')

const packagesPath = path.resolve(__dirname, '../', 'packages')
const nodeModules = path.resolve(__dirname, '../', 'node_modules')

module.exports = storybookBaseConfig => {
  /* eslint-disable no-param-reassign */
  const config = merge(storybookBaseConfig, {
    devtool: 'eval',
    target: 'web',
    name: 'bee-pollen',
    resolve: { modules: [packagesPath] },
    module: {
      rules: [{
        test: /\.scss$/,
        include: [nodeModules, packagesPath],
        use: [{
          loader: require.resolve('style-loader'),
          options: { sourceMap: true }
        }, {
          loader: require.resolve('css-loader'),
          options: { sourceMap: true }
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
