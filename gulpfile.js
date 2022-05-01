const gulp = require("gulp");
const { src, dest } = require("gulp");
const inlinesource = require("gulp-inline-source");
const replace = require("gulp-replace");
const mergeStream = require("merge-stream");
const esbuild = require("gulp-esbuild");

gulp.task("default", () => {
  return mergeStream(
    // bundle react app into a single easy-to-load file
    gulp
      .src("./build/*.html")
      .pipe(replace('.js"></script>', '.js" inline></script>'))
      .pipe(replace('rel="stylesheet">', 'rel="stylesheet" inline>'))
      .pipe(
        inlinesource({
          compress: true,
          ignore: ["png"],
        })
      )
      .pipe(dest("./dist")),
    // copy manifest to dist
    gulp.src("./extension/manifest.json").pipe(dest("./dist/")),
    gulp.src("./extension/*.{ico,png}").pipe(dest("./dist/")),
    // minify (and compile ts) to dist
    gulp
      .src("./extension/*.{js,ts}")
      .pipe(
        esbuild({
          target: "esnext",
          minify: true,
        })
      )
      .pipe(dest("./dist"))
  );
});
