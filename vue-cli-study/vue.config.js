'use strict'
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {

  /**
   * Type: String
   * Default: '/'
   * baseUrl 在 Vue CLI 3.3 开始被弃用，请使用 publicPath
   * 部署应用包使用的基础 URL ， 用法与 webpack 本身的 output.publicPath 一致，
   * 由于 vue-cli 有可能在其他地方也有到这个值，所以请始终使用 publicPath，
   * 而不是直接修改 webpack 的 output.publicPath
   */
  publicPath: '/',

  /**
   * Type: String
   * Default: 'dist'
   * 当运行 vue-cli-service build 命令时生成打包文件的输出目录。
   * 注意：目标目录在构建之前会被清除，构建时传入 --no-clean 可关闭该行为
   * 提示：请始终使用 outputDir 而不要修改 webpack 的 output.path
   */
  outputDir: 'dist',

  /**
   * Type: String
   * Default: ''
   * 放置打包后生成的静态资源文件，此目录是相对于 outputDir 目录来设定的，
   * 也就是说此目录是 outputDir 下的一个子目录，用于放置生成的静态资源
   */
  assetsDir: 'static',

  /**
   * Type: boolean | 'error'
   * Default: true
   * 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。
   *
   * 这个值会在 @vue/cli-plugin-eslint 被安装之后生效
   * 设置为 true 时，eslint-loader 会将 lint 错误输出为编译警告。警告仅仅会被输出到命令行，不会使得编译失败
   *
   * 如果你希望让 lint 错误在开发时直接显示在浏览器，你可以使用 'error' 配置项，这会强制 eslint-loader
   * 将 lint 错误输出为编译错误，同时也意味着 lint 错误会导致编译错误
   *
   * 或者，你也可以通过设置让浏览器 overlay 同时显示警告和错误
   *
   */
  lintOnSave: process.env.NODE_ENV === 'development',

  /**
   * 生成环境是否开启源码追踪
   */
  productionSourceMap: false,

  /**
   * Type: Object
   * 开发服务器配置
   * 所有 webpack-dev-server 的选中都支持
   * 注意：
   * 1. 有些值像 host port https 可能会被命令行参数覆盖
   * 2. 有些值像 publicPath historyApiFallback 不应该被修改，
   *    因为他们需要和开发服务器的 publicPath 同步以保障正常的工作。
   *
   */
  devServer: {
    /**
     * 端口号
     */
    port: 8001,
    /**
     * 启动后是否打开默认浏览器
     */
    open: true,
    /**
     * Type Object
     * { boolean errors, boolean warnings }
     * 在浏览器配置是否显示警告和错误
     */
    overlay: {
      warnings: false,
      errors: true
    },
    /**
     * type String | Object
     * 如果你的前端应用和后端API服务器没有运行在同一个主机上，
     * 你需要在开发环境将API请求代理到API服务器。
     * 这个问题可以通过 proxy 选项来配置。
     * proxy 可以是一个指向开发环境API服务器的字符串
     * proxy: 'http://localhost:8888'
     * 这会告诉开发服务器任何未知请求（没有匹配到静态文件的请求）代理到 http://localhost:8000
     * 如果你想要更多的代理控制行为，也可以使用一个 path: options 成对的对象
     * 完整的配置可以参考：http-proxy-middleware
     */
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  /**
   * Type Object | Function
   * 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
   * 如果这个值是一个函数，则会接收被解析的配置作为参数
   */
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
};
