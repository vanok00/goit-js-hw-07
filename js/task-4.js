const form = document.querySelector('.login-form')
form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()

    const elements = event.currentTarget.elements
    let formData = {}

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i]

        if (element.type !== 'submit') {
            formData[element.name] = element.value.trim()
        }
    }

    let allFieldsFilled = true
    for (let key in formData) {
        if (formData.hasOwnProperty(key) && formData[key] === '') {
            allFieldsFilled = false
            break
        }
    }

    if (!allFieldsFilled) {
        alert('All form fields must be filled in')
        return
    }

    console.log(formData)
    event.currentTarget.reset()
}
