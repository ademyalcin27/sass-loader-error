module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/scss/_variable.scss";
          @import "~@/assets/scss/_mixin.scss";
        `,
      },
    },
  },
  productionSourceMap: false,
  devServer: {
    host: 'localhost',
  },
  chainWebpack: config => {
    config.plugins.delete('optimize-css')
  },
};
