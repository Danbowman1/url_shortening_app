let url = document.getElementById('url-input')
const btn = document.querySelector('.shorten-btn')
let links = document.querySelector('.links')

btn.addEventListener('click', getValue)

function getValue(e) {
    e.preventDefault()
    let inputValue = url.value
    
    fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
    .then(res => {
        return res.json()
    })
    .then(shortened => {
        links.innerHTML += `
    <div class="links-container">   
        <p class="link">${url.value}</p>
        <hr />
        <p class="shorten-link">${shortened.result.full_short_link}</p>
        <button class="copy-btn">Copy</button>
    </div>
    `
    console.log(shortened.result.full_short_link)
    })
    
}

