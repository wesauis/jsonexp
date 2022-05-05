const { series, parallel } = require("gulp");
const { buildExtension } = require("./tasks/build-extension");
const { bundleReactApp } = require("./tasks/bundle-react-app");
const { copyAssets } = require("./tasks/copy-assets");
const { extractJs } = require("./tasks/extract-js");

exports.default = series(
  parallel(bundleReactApp, copyAssets, buildExtension),
  extractJs
);
