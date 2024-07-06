function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`
}

function createBoxes(amount) {
    const boxesContainer = document.getElementById('boxes')
    boxesContainer.innerHTML = ''

    let size = 30
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div')
        box.classList.add('box')
        box.style.width = `${size}px`
        box.style.height = `${size}px`
        box.style.backgroundColor = getRandomHexColor()
        boxesContainer.appendChild(box)
        size += 10
    }
}

function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes')
    boxesContainer.innerHTML = ''
}

document.getElementById('create-btn').addEventListener('click', function () {
    const itemCountInput = document.getElementById('item-count')
    const count = parseInt(itemCountInput.value)

    if (i >= 1 && i <= 100) {
        createBoxes(i)
        itemCountInput.value = ''
    } else {
        alert('Please enter a number between 1 and 100.')
    }
})

document.getElementById('destroy-btn').addEventListener('click', function () {
    destroyBoxes()
})
