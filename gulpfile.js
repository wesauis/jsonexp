const { series, parallel } = require("gulp");
const { buildExtension } = require("./tasks/build-extension");
const { bundle } = require("./tasks/bundle");
const { bundleReactApp } = require("./tasks/bundle-react-app");
const { clean } = require("./tasks/clean");
const { copyAssets } = require("./tasks/copy-assets");
const { extractJs } = require("./tasks/extract-js");

exports.clean = clean;

exports.bundle = bundle;

exports.dist = series(
  parallel(bundleReactApp, copyAssets, buildExtension),
  extractJs
);
