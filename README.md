# Eleventy Starter

### Keys

- Don't forget to edit `src/_data/meta.js` and adjust the values to your details.

- Edit `index.md` to change the home page, and then create content within `src/pages` using any templating format you prefer to add content.

## Docker capabilities

This starter comes fully dockerized and ready to be served. To be able to use these images, please run the following commands:

### To build docker image

`docker build . -t <name of your new image>`

### To run docker image

`docker run -it -p 8080:8080 --rm --name <name of your new container> <name of the image you previously built>`
