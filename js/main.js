const mainMenu = document.querySelector(".main-menu");
const barMenu = document.querySelector("#bar-menu");
const closeMenu = document.querySelector("#close-menu");

barMenu.addEventListener("click", ()=>{
    if (mainMenu.style.display === "block") {
        mainMenu.style.display = "none";
        closeMenu.style.display = "none";
    } else {
        mainMenu.style.display = "block";
        closeMenu.style.display = "block";
        barMenu.style.display = "none";
    }
})

closeMenu.addEventListener("click", ()=>{
    if (mainMenu.style.display === "block") {
        barMenu.style.display = "block";
        mainMenu.style.display = "none";
        closeMenu.style.display = "none";
    } else {
        mainMenu.style.display = "block";
        closeMenu.style.display = "block";
        barMenu.style.display = "none";
    }
})

