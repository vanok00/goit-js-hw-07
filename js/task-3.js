const textInp = document.querySelector(`#name-input`)

const textOutp = document.querySelector(`#name-output`)

textInp.addEventListener('input', (event) => {
    event.preventDefault()
    textOutp.textContent = event.currentTarget.value.trim()
})
