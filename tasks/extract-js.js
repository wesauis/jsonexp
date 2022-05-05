const fs = require("fs/promises");
const cheerio = require("cheerio");

async function extractJs(success) {
  const html = await fs.readFile("./dist/explorer/index.html", "utf-8");
  const $ = cheerio.load(html);

  const script = $("script").html();
  $("script").remove();

  Promise.all([
    fs.writeFile("./dist/explorer/script.js", script, "utf-8"),
    fs.writeFile("./dist/explorer/index.html", $.html(), "utf-8"),
  ]).then(success);
}

exports.extractJs = extractJs;
