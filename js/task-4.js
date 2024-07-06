const form = document.querySelector('.login-form')
form.addEventListener(`submit`, handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    console.log(event)
    const elements = event.currentTarget.elements

    const form = event.target
    const email = form.elements.email.value
    const password = form.elements.password.value

    if (email === '' || password === '') {
        return alert('All form fields must be filled in')
    }
    console.log(`Email: ${email.trim()}, Password: ${password.trim()}`)
    event.currentTarget.reset()
}
