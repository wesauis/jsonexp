const { series, parallel } = require("gulp");
const { buildExtension } = require("./tasks/build-extension");
const { bundleReactApp } = require("./tasks/bundle-react-app");
const { copyAssets } = require("./tasks/copy-assets");
const { generateConfig } = require("./tasks/generate-config");

exports.default = series(
  parallel(bundleReactApp, copyAssets, buildExtension),
  generateConfig
);
