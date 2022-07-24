const handler = event => {
  event.preventDefault()

  chrome.storage.sync.set({ token: event.target.token.value })

  chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
    if (tab.url.indexOf("https://discord.com/") === 0 || tab.url.indexOf("https://discord.com/login") === 0) 
      chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["./script.js"]
      })
  })
}

document.querySelector("form").addEventListener("submit", handler)