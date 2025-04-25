module.exports = function(eleventyConfig) {
    return {
        templateFormats: ["njk", "md"],
        dir: {
            input: "src",
            output: '_site'
        }
    }
}