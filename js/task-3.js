const textInp = document.querySelector(`#name-input`)

const textOutp = document.querySelector(`#name-output`)

textInp.addEventListener('input', function () {
    const trimmedCont = textInp.value.trim()

    if (trimmedCont === '') {
        textOutp.textContent = 'Anonymous'
    } else {
        textOutp.textContent = trimmedCont
    }
})
