const handler = event => {
  event.preventDefault()

  chrome.storage.sync.set({ token: event.target.token.value })

  chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {

    if (tab.url === "https://discord.com/" || tab.url === "https://discord.com/login") 
      chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['./script.js']
      })

  })

}


document.querySelector("form").addEventListener('submit', handler)