let enabled = true;

chrome.storage.sync.get([new URL(window.location.href).hostname], (result) => {
  enabled = result[new URL(window.location.href).hostname] !== false;
});

function handleVisibilityChange() {
  if (!enabled) return;
  
  const video = document.querySelector('video') || 
                document.getElementById('movie_player');
  
  if (document.visibilityState === 'hidden') {
    video?.pause?.();
  } else {
    video?.play?.().catch(() => {});
  }
}

document.addEventListener('visibilitychange', handleVisibilityChange);

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "TOGGLE_STATE") {
    enabled = message.enabled;
    if (enabled) handleVisibilityChange();
  }
});
