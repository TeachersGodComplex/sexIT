const easingsPlugin = require("postcss-easings");
const rfsPlugin = require("rfs");
const presetEnvPlugin = require("postcss-preset-env");
const importPlugin = require("postcss-import");

module.exports = {
  plugins: [presetEnvPlugin, importPlugin(), easingsPlugin, rfsPlugin],
};
