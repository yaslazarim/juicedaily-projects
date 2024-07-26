const blogElements = document.querySelectorAll(".-blog")

blogElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.classList.add("active")
    })

    element.addEventListener("mouseout", () => {
        element.classList.remove("active")
    })
})