const postcssPlugin = require("eleventy-plugin-postcss");
const esbuild = require("esbuild");

module.exports = (config) => {
  config.addPassthroughCopy("public");
  config.addPassthroughCopy("scripts");
  config.addPassthroughCopy("styles");
  config.addPlugin(postcssPlugin);
  config.on("afterBuild", () =>
    esbuild.build({
      entryPoints: ["scripts/index.js"],
      outfile: "_site/scripts/index.js",
      bundle: true,
      minify: process.env.ELEVENTY_ENV === "production",
      sourcemap: process.env.ELEVENTY_ENV !== "production",
    })
  );
};
