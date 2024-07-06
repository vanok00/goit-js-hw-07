const categoriesLi = document.querySelector(`#categories`)

const categoriesIt = categoriesLi.querySelectorAll(`li.item`)

console.log(`Number of categories: ${categoriesIt.length}`)

categoriesIt.forEach((item) => {
    const categoriesTitle = item.querySelector(`h2`).textContent

    const categoriesItems = item.querySelectorAll(`ul > li`).length

    console.log(`Category: ${categoriesTitle}\nElements: ${categoriesItems}`)
})
