const colorPicker = document.getElementById('color-picker')
const colorScheme = document.getElementById('drop-down-menu')
const getSchemeButton = document.getElementById('get-color-scheme')

getSchemeButton.addEventListener("click", function() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.substring(1)}&mode=${colorScheme.value}`)
        .then(res => res.json())
        .then(data => {
            for(let i = 0; i < 5; i++) {
                document.getElementById(`column${i}`).style.background = data.colors[i].hex.value
                document.getElementById(`column${i}`).style.cursor = 'pointer'
                document.getElementById(`row${i}`).textContent = data.colors[i].hex.value
                document.getElementById(`row${i}`).style.cursor = 'pointer'
                document.getElementById(`column${i}`).addEventListener("click", function() {
                    navigator.clipboard.writeText(data.colors[i].hex.value)
            })
            
            document.getElementById(`row${i}`).addEventListener("click", function() {
                navigator.clipboard.writeText(data.colors[i].hex.value)
            })
        }
    })
})