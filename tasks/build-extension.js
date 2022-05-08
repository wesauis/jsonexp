const { src, dest } = require("gulp");
const esbuild = require("gulp-esbuild");

function buildExtension() {
  return src("./extension/*.{js,ts}")
    .pipe(
      esbuild({
        target: "esnext",
        minify: true,
      })
    )
    .pipe(dest("./dist"));
}

exports.buildExtension = buildExtension;
