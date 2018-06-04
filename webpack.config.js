const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        publicPath: 'dist/', // webpack's default output location
    },
    plugins: [
        new CompressionPlugin({
            minRatio: Number.MAX_SAFE_INTEGER // Compress everything
        }),
    ]
};
