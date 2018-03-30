const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = function override (config, env) {
  config = injectBabelPlugin(['import', {libraryName: 'antd', libraryDiretory: 'es', style: 'css'}], config)
  
  // 配置主题
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@primary-color': '#1DA57A',
    }
  })(config, env)

  // webpack alias
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    '@': resolve('./src')
  })
  
  return config
}
