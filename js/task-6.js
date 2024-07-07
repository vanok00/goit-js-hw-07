function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`
}

function createBoxes(amount) {
    const boxesDiv = document.getElementById('boxes')
    boxesDiv.innerHTML = ''

    let size = 30
    const fragment = document.createDocumentFragment()

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div')
        box.classList.add('box')
        box.style.width = `${size}px`
        box.style.height = `${size}px`
        box.style.backgroundColor = getRandomHexColor()
        fragment.appendChild(box)
        size += 10
    }
    boxesDiv.append(fragment)
}

function destroyBoxes() {
    const boxesDiv = document.getElementById('boxes')
    boxesDiv.innerHTML = ''
}

document.getElementById('btn-create').addEventListener('click', function () {
    const inputNumber = document.getElementById('input-number')
    const amount = parseInt(inputNumber.value)

    if (amount >= 1 && amount <= 100) {
        createBoxes(amount)
        inputNumber.value = ''
    } else {
        alert('Please enter a number between 1 and 100.')
    }
})

document.getElementById('btn-destroy').addEventListener('click', function () {
    destroyBoxes()
})
