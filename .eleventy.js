module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");
    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["njk","html","md"], 
        dir: {
            input: "src",
            output: "_site",
            include: "includes"
        }
    }
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('post', 'includes/post.njk');
  };