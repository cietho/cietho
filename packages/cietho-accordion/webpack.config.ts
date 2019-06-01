const path = require('path');
const isDevMode = process.env.NODE_ENV === 'development' || false;

module.exports = {
    mode: isDevMode ? 'development' : 'production',
    devtool: isDevMode ? 'inline-source-map' : 'source-map',
    devServer: {
        https: true,
        compress: true,
        hot: true,
        inline: true,
        progress: true,
        stats: {
            all: false,
        },
    },
    entry: './src/accordion.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'accordion.js',
        library: 'accordion',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
