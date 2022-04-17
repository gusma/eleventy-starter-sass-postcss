module.exports = {
    plugins: [
        require('postcss-nested'),
        require('autoprefixer'),
        require('postcss-import'),
        require('cssnano')({
            preset: 'default',
        }),
    ],
}
