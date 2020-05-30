module.exports = function(eleventyConfig) {

    eleventyConfig.addCollection('posts',collection => {
        return collection.getFilteredByGlob('/src/writing/posts/*.md')
    });

    eleventyConfig.addPassthroughCopy("assets");
    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["njk","html","md"], 
        dir: {
            input: "src",
            output: "_site",
            include: "_includes"
        }
    }
}
