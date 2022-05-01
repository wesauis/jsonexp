const fs = require("fs");
const cheerio = require("cheerio");

function generateConfig(success) {
  const csp = loadCSP();
  inject("./dist/backend.js", "config", { csp });
  success();
}

function loadCSP() {
  const html = fs.readFileSync("./dist/index.html", "utf-8");
  const $ = cheerio.load(html);

  return $('meta[http-equiv="Content-Security-Policy"]').prop("content");
}

function inject(file, variable, data) {
  const source = fs.readFileSync(file, "utf-8");
  const modified = source.replace(
    `"{{ ${variable} }}"`,
    `\`${JSON.stringify(data)}\``
  );
  fs.writeFileSync(file, modified, "utf-8");
}

exports.generateConfig = generateConfig;
