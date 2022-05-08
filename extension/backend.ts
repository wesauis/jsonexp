chrome.action.onClicked.addListener(function (tab) {
  injectInterceptor(tab.id);
});

chrome.webRequest.onCompleted.addListener(
  onCompleted,
  { urls: ["<all_urls>"] },
  ["responseHeaders"]
);

// https://developer.chrome.com/docs/extensions/reference/webRequest/#event-onCompleted
function onCompleted({
  frameId,
  type,
  responseHeaders,
  method,
  url,
  tabId,
}: chrome.webRequest.WebResponseCacheDetails) {
  // ignore non main requests
  if (frameId !== 0) return;
  if (type !== "main_frame") return;

  // ignore non json requests
  const contentType = find(responseHeaders, "name", "content-type");
  if (!contentType) return;
  if (!contentType.value?.includes("application/json")) return;

  console.info(`Intercepting ${method} "${url}"`);
  injectInterceptor(tabId);
}

function find(array, key, value) {
  return array.find((item) => item[key] === value);
}

function injectInterceptor(tabId) {
  chrome.scripting.executeScript({
    target: { tabId },
    files: ["bootstrapper.js"],
  });
}

const VOID = undefined;
chrome.runtime.onMessage.addListener(({ type }, sender, sendResponse) => {
  if (type === 'RENDER_PAGE') {
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      files: ["explorer/script.js"],
    });
  }

  sendResponse(VOID);
});
