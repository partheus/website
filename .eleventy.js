const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    excerpt_separator: "<!-- excerpt -->"
  });
  
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("icons");
    eleventyConfig.addPassthroughCopy("img");
    return {
      passthroughFileCopy: true
    }
  }