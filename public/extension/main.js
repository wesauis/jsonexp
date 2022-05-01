chrome.webRequest.onCompleted.addListener(
  onCompleted,
  { urls: ["<all_urls>"] },
  ["responseHeaders"]
);

// developer.chrome.com/docs/extensions/reference/webRequest/#event-onCompleted
function onCompleted({ frameId, type, responseHeaders, url }) {
  // ignore non main requests
  if (frameId !== 0) return;
  if (type !== "main_frame") return;

  // ignore non json requests
  const contentType = find(responseHeaders, "name", "content-type");
  if (!contentType) return;
  if (!contentType.value?.includes("application/json")) return;

  console.log(url);
}

function find(array, key, value) {
  return array.find((item) => item[key] === value);
}
