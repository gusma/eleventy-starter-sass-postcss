# Eleventy Startern + Webpack + PostCSS + Bootstrap 5 (Sass)

This Eleventy starter contains a pre-packed version of Bootstrap 5, through PostCSS + Webpack.
It's also prepared to handle PurgeCSS though it's due for some optimization before complete usage.

### Features 

- Includes capabilities for blogging. 
- Can be fully used through github pages and github actions without any need for external hosting (even compatible for custom domains)
- Uses webpack and postcss to handle native Bootstrap SaSS that can also take customised variables.
- Packs a 100-score on Google Lighthouse that can still be improved!

### Keys

-   Don't forget to edit `src/_data/meta.js` and adjust the values to your details.

-   Edit `index.md` to change the home page, and then create content within `src/pages` using any templating format you prefer to add content.

### To-dos:

- Include minimisation of html and JS;
- Add JS and CSS linting into pipelines and pre-commit hooks;
- Complete installation cycles through PNPM, fix issues with caching;
- Implement hook usage for images and usage of new formats and compression.
- Add better start template.

## Docker capabilities

This starter comes fully dockerized and ready to be served. To be able to use these images, please run the following commands:

### To build docker image

`docker build . -t <name of your new image>`

### To run docker image

`docker run -it -p 8080:8080 --rm --name <name of your new container> <name of the image you previously built>`
