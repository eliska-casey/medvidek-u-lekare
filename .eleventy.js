module.exports = function(eleventyConfig) {

  // Zkopírování statických souborů do výstupní složky _site
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("fotky-na-web");
  eleventyConfig.addPassthroughCopy("fotky-na-web-214x285px");
  eleventyConfig.addPassthroughCopy("icons");
  eleventyConfig.addPassthroughCopy("css"); 
  eleventyConfig.addPassthroughCopy("glide.min.js");// <- důležité!
  // eleventyConfig.addPassthroughCopy("style.css"); // Nepotřebuješ, pokud styl je v css/style.css

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["njk", "html", "md", "liquid"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };

};
