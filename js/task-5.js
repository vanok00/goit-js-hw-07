function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`
}
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector(`.change-color`)
    const spanColor = document.querySelector(`.span.color`)

    button.addEventListener(`click`, function () {
        const newColor = getRandomHexColor()
        document.body.style.backgroundColor = newColor
        const span = document.querySelector('.color')
        span.textContent = newColor
    })
})
