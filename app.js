let home = document.getElementById("home-btn");
let menu = document.getElementById("menu-btn");
let about = document.getElementById("about-btn");
let menuSec = document.querySelector(".menu-section");
let abouSec = document.querySelector(".about-section");
home.classList.add("current")

home.addEventListener("click",()=>{
    home.classList.add("current")
    menu.classList.remove("current")
    about.classList.remove("current")
})
menu.addEventListener("click",()=>{
    home.classList.remove("current")
    menu.classList.add("current")
    about.classList.remove("current") 
    menuSec.scrollIntoView( { behavior:"smooth" } );
})
about.addEventListener("click",()=>{
    home.classList.remove("current")
    menu.classList.remove("current")
    about.classList.add("current")  
    abouSec.scrollIntoView( { behavior:"smooth"});
})