const fs = require("fs");
const cheerio = require("cheerio");

function extractJs(success) {
  const html = fs.readFileSync("./dist/explorer/index.html", "utf-8");
  const $ = cheerio.load(html);

  const script = $('script').html();
  $('script').remove();

  fs.writeFileSync('./dist/explorer/script.js', script, 'utf-8');
  fs.writeFileSync('./dist/explorer/index.html', $.html(), 'utf-8');

  success();
}

exports.extractJs = extractJs;
