// Track paused states across tabs
const tabStates = new Map();

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tabStates.has(tab.id)) {
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => playVideos()
      });
    }
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === 'complete') {
    tabStates.delete(tabId);
  }
});
