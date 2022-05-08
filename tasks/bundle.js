const { dest } = require("gulp");
const gulp = require("gulp");
const zip = require("gulp-zip");
const packageJson = require("../package.json");

async function bundle() {
  return gulp
    .src("dist/**/*")
    .pipe(zip(`${packageJson.name}-${packageJson.version}.zip`))
    .pipe(dest("./dist"));
}

exports.bundle = bundle;
