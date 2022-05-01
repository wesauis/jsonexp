const { src, dest } = require("gulp");
const template = require("gulp-template");
const rename = require("gulp-rename");

function generateConfig() {
  return src("./extension/config.tjs")
    .pipe(
      template({
        config: JSON.stringify({
          timeStamp: new Date(),
        }),
      })
    )
    .pipe(rename("config.js"))
    .pipe(dest("./dist"));
}

exports.generateConfig = generateConfig;
