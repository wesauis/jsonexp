// FIXME: some type
const tabWindow = window as any;
document.body.normalize();
const $pre = document.querySelector("body pre");

try {
  tabWindow.originalJson = JSON.parse($pre.textContent);
} catch (error) {
  console.error(error);
  tabWindow.parseError = error;
}

function readFile(filename) {
  return fetch(chrome.runtime.getURL(filename)).then((res) => res.text());
}

console.debug("Loading frontend");
readFile("index.html").then((html) => {
  document.body.innerHTML = html;
});
