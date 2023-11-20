// Navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    hamburger.classList.toggle("toggle");
});


// setTimeout(() => {
//     let container = document.querySelector(".container-load")
//     document.querySelector("body").classList.remove("active-load")
//     container.style.display = "none"
// },2000)