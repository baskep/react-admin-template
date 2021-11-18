const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra')
const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),

  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1890ff',
    },
  }),

  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  })
)
