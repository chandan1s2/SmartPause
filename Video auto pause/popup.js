document.addEventListener('DOMContentLoaded', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const hostname = new URL(tab.url).hostname;
  const toggle = document.getElementById('toggle');
  const label = document.getElementById('toggleLabel');

  // Load stored state
  chrome.storage.sync.get([hostname], (result) => {
    const isEnabled = result[hostname] !== false;
    toggle.checked = isEnabled;
    label.textContent = isEnabled ? "Enabled" : "Disabled";
  });

  // Save state on toggle
  toggle.addEventListener('change', () => {
    const isEnabled = toggle.checked;
    label.textContent = isEnabled ? "Enabled" : "Disabled";
    chrome.storage.sync.set({ [hostname]: isEnabled }, () => {
      chrome.tabs.sendMessage(tab.id, { 
        type: "TOGGLE_STATE", 
        enabled: isEnabled 
      });
    });
  });
});
