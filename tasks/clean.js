const fs = require("fs/promises");

function clean(success) {
  fs.rm("./dist", { recursive: true, force: true }).then(success);
}

exports.clean = clean;
