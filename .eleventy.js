const now = String(Date.now())
const htmlmin = require('html-minifier')

function eleventyConfig(config) {
    // Passthroughs
    config.addPassthroughCopy('src/img')

    // Layout aliases
    config.addLayoutAlias('base', './src/_includes/layouts/base.njk')
    config.addShortcode('year', () => `${new Date().getFullYear()}`)
    config.addShortcode('version', function () {
        return now
    })

    // date filter (localized)
    config.addNunjucksFilter('date', function (date, format, locale) {
        locale = locale ? locale : 'en'
        moment.locale(locale)
        return moment(date).format(format)
    })

    // Minify HTML
    const isProduction = process.env.ELEVENTY_ENV === 'production'

    var htmlMinify = function (value, outputPath) {
        if (outputPath && outputPath.indexOf('.html') > -1) {
            return htmlmin.minify(value, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true,
            })
        }
    }

    // html min only in production
    if (isProduction) {
        config.addTransform('htmlmin', htmlMinify)
    }

    // Configuration
    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: '_includes',
            data: '_data',
            layouts: '_includes',
        },
        templateFormats: ['html', 'njk', 'md', '11ty.js'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
    }
}

module.exports = eleventyConfig
