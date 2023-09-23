let colorArray = []


fetch('https://www.thecolorapi.com/scheme')
    .then(res => res.json())
    .then(data => console.log(data))