const menuBtn = document.getElementById("menu-boton");
const navLinks = document.getElementById("nav-links");
const menuBtnicon = menuBtn.querySelector("i");
menuBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnicon.setAttribute("class",isOpen ? "ri-close-line":"ri-menu-line")
});
navLinks.addEventListener("click",(e) =>{
    navLinks.classList.remove("open");
    menuBtnicon.setAttribute("class","ri-menu-line");
});