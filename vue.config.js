const path = require('path');

module.exports = {
    lintOnSave: false,
    pluginOptions: {
        'style-resources-loader': {
            'preProcessor': 'scss',
            'patterns': [
                path.resolve(__dirname, './src/assets/styles/variable.scss')
            ]
        }
    },
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
};
