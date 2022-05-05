document.body.normalize();
const $pre = document.querySelector("body pre");

const tabWindow = window as any;

try {
  tabWindow.originalJson = JSON.parse($pre.textContent);
} catch (error) {
  console.error(error);
  tabWindow.error = error;
}

function readFile(filename) {
  return fetch(chrome.runtime.getURL(filename)).then((res) => res.text());
}

readFile("explorer/index.html").then((html) => {
  const newDoc = document.open("text/html", "replace");
  newDoc.write(html);
  newDoc.close();

  if (newDoc.readyState === 'loading') {
    newDoc.addEventListener("DOMContentLoaded", renderPage);
  } else {
    renderPage();
  }
});

function renderPage() {
  chrome.runtime.sendMessage({ type: 'RENDER_PAGE' });
}
