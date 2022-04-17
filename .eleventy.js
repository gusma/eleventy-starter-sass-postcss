module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addWatchTarget("./src/images/");

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };