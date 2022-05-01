const { parallel, src, dest } = require("gulp");

function copyManifest() {
  return src("./extension/manifest.json").pipe(dest("./dist/"));
}
function copyIcons() {
  return src("./extension/*.{ico,png}").pipe(dest("./dist/"));
}

exports.copyAssets = parallel(copyManifest, copyIcons);
