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
  injectInterceptor(frameId, tabId);
}

function find(array, key, value) {
  return array.find((item) => item[key] === value);
}

function injectInterceptor(frameId, tabId) {
  chrome.scripting.executeScript(
    {
      target: { frameIds: [frameId], tabId },
      files: ["bootstrapper.js"],
    },
    () => console.log("Injected bootstrapper")
  );
}

async function readFile(filename) {
  return await fetch(chrome.runtime.getURL(filename)).then((res) => res.text());
}

chrome.runtime.onMessage.addListener(async ({ cmd }, sender, sendResponse) => {
  if (cmd !== "GET_INDEX") return;

  const html = await readFile("index.html");
  sendResponse({ html });
});
