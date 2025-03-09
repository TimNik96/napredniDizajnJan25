const burgerMenu = document.querySelector(".hero-burger")
const sideMenu = document.querySelector(".side-menu")
const closeSideMenu = document.querySelector(".side-menu-controls").children[0]

AOS.init()

burgerMenu.addEventListener("click", () => {
    sideMenu.style.transform = "translateX(0%)"
})

closeSideMenu.addEventListener("click", () => {
    sideMenu.style.transform = "translateX(-100%)"
})