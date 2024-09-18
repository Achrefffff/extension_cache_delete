chrome.runtime.onInstalled.addListener(() => {
  console.log("Cache Manager Extension Installed");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "clearCache") {
    chrome.browsingData.removeCache({}, () => {
      sendResponse({ success: true, message: "Cache cleared" });
    });
    return true; // Permet de répondre de manière asynchrone
  }
});
