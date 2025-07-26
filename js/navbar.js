const iconeMobile = document.querySelector("#iconeMobile");
const closeButton = document.querySelector("#closeButton");

const mobileMenu = document.querySelector("#mobileMenu");

iconeMobile.addEventListener("click", function () {
    mobileMenu.classList.add("flex");
})

closeButton.addEventListener("click", function (){
mobileMenu.classList.remove("flex");
})