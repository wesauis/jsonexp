const { src, dest } = require("gulp");
const replace = require("gulp-replace");
const inlinesource = require("gulp-inline-source");
const cspHash = require("inline-csp-hash");

function bundleReactApp() {
  return (
    src("./build/*.html")
      // inline scripts and styles
      .pipe(replace('.js"></script>', '.js" inline></script>'))
      .pipe(replace('rel="stylesheet">', 'rel="stylesheet" inline>'))
      .pipe(
        inlinesource({
          compress: true,
          ignore: ["png"],
        })
      )
      // add csp
      .pipe(
        cspHash({
          what: "script",
          replace_cb: (s, hashes) =>
            s.replace(
              /script-src 'self'[^;]*/,
              "script-src 'self' " + hashes.join(" ")
            ),
        })
      )
      .pipe(
        cspHash({
          what: "style",
          replace_cb: (s, hashes) =>
            s.replace(
              /style-src 'self'[^;]*/,
              "style-src 'self' " + hashes.join(" ")
            ),
        })
      )
      .pipe(dest("./dist/explorer"))
  );
}

exports.bundleReactApp = bundleReactApp;
