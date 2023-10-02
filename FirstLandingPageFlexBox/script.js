const hamburger = document.querySelector(".hamburger-menu");
const navmenu = document.querySelector(".navbar-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll(".li").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove(".active");
    navmenu.classList.remove("active");
}))
