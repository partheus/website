module.exports = function(eleventyConfig) {
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    excerpt_separator: "<!-- excerpt -->"
  });
  
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("icons");
    return {
      passthroughFileCopy: true
    }
  }