const url = document.getElementById('url-input')
const submitBtn = document.getElementById('shorten-btn')
const links = document.getElementById('links')


submitBtn.addEventListener('click', getValue)


function getValue(e) {
    e.preventDefault()
    const inputValue = url.value
    
    const errorText = document.querySelector('#error-text')

    if(!inputValue) {
        url.classList.add('error')
        errorText.style.display = 'block'
    } else {
        input.classList.remove('error')
        errorText.style.display = 'none'
    }
    
    fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
    .then(res => {
        return res.json()
    })
    .then(data => {
        let div = document.createElement('div')
        let originalIp = document.createElement('p')
        let hr = document.createElement('hr')
        let shortenedIp = document.createElement('p')
        let copyBtn = document.createElement('button')

        div.classList.add('links-container')
        originalIp.classList.add('link')
        shortenedIp.classList.add('shorten-link')
        copyBtn.classList.add('copy-btn')

        originalIp.textContent = data.result.original_link
        shortenedIp.textContent = data.result.full_short_link
        copyBtn.textContent = "Copy"

        links.insertAdjacentElement('afterbegin', div)
        div.appendChild(originalIp)
        div.appendChild(hr)
        div.appendChild(shortenedIp)
        div.appendChild(copyBtn)

    
    function copyLink() {
        let copied = shortenedIp.textContent
        console.log(shortenedIp)

        navigator.clipboard.writeText(copied).then(() => {
            copyBtn.textContent = "Copied!"
            copyBtn.style.background = 'hsl(257, 27%, 26%)'
        })
    }

    copyBtn.addEventListener('click', copyLink)
    
    })
    
}








