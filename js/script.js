const menuBtn=document.getElementById("menu-btn");
const navbar=document.getElementById("navbar");

menuBtn.addEventListener("click",() =>{

    navbar.classList.toggle("show");

    const isOpen= navbar.classlist.contains("show");
    menuBtn.setAttribute("aria-expanded",isOpen);

     menuBtn.innerHTML = isOpen
        ? '<i class="fa-solid fa-x"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});