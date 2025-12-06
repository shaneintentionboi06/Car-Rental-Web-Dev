const hamMenu = document.querySelector(".ham-menu");
const OffScreenMenu = document.querySelector(".off-screen-menu");
const Overlay = document.querySelector(".overlay")

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle("active");
    OffScreenMenu.classList.toggle("active")
    Overlay.classList.toggle("active")
})

Overlay.addEventListener('click', () => {
    hamMenu.classList.remove('active')
    Overlay.classList.remove('active')
    OffScreenMenu.classList.remove("active")
})