const handler = event => {
  event.preventDefault()

  chrome.storage.sync.set({ token: event.target.token.value })

  chrome.tabs.executeScript({
    file: "./script.js"
  });
}


document.querySelector("form").addEventListener('submit', handler);