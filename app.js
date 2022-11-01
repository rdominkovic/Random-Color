const button = document.querySelector('#btn');
const h1 = document.querySelector('h1')


button.addEventListener('click', () => {
    document.body.style.backgroundColor = randomColor();
    h1.innerText = randomColor();
})


function randomColor() {
    const r = Math.floor(Math.random() * 266);
    const g = Math.floor(Math.random() * 266);
    const b = Math.floor(Math.random() * 266);
    if ((r * 0.299 + g * 0.587 + b * 0.114) > 150) {
        h1.style.color = "white";
    }
    else {
        h1.style.color = "black";
    }
    return newColor = `Rgb(${r},${g},${b})`
}

