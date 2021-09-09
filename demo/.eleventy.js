const localImages = require("../"); // For local development

// const localImages = require("eleventy-plugin-local-images");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(localImages, {
    distPath: "_site",
    assetPath: "/assets/img",
  });
};
