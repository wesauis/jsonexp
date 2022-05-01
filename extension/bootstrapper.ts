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

console.debug("Loading frontend");
chrome.runtime.sendMessage(null, { cmd: "GET_INDEX" }, {}, console.warn);

// async function renderPage() {

// const main = chrome.runtime.getURL("index.html");
// const res = await fetch(main);
// const html = res.text();
// window.body.innerHtml = html;
// }

// store at window.originalJson
// log it as text
// parse json
// log it as json
// save erros / json
// load the react app with the data at the window object
