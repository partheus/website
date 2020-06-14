const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->"
  });

  eleventyConfig.addCollection('posts', collection => {
    return [collection.getFilteredByGlob('./writing/posts/*.md')]
      .reverse();
  });
  
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("icons");
    return {
      passthroughFileCopy: true
    }
  }