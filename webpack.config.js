const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        publicPath: 'dist/',
    },
    plugins: [
        new CompressionPlugin({ minRatio: Number.MAX_SAFE_INTEGER }),
    ]
};
