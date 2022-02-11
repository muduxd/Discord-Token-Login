var login = token => {
    setInterval(() => { document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"` }, 50)
    setTimeout(() => window.location.replace("https://discord.com/app"), 500)
}

chrome.storage.sync.get(['token'], ({ token }) => {
    login(token)
})