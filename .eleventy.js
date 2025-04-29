module.exports = function(eleventyConfig) {
    // Copy `css/` to `_site/css`
	eleventyConfig.addPassthroughCopy("src/styles/css");
    eleventyConfig.addPassthroughCopy("src/assets/");


    return {
        templateFormats: ["njk", "md"],
        dir: {
            input: "src",
            output: '_site'
        }
    }
}