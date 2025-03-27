let loginBtn = document.getElementById("login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.getElementById("form-close");
let menuBar = document.getElementById("menu-bar");
let navbar = document.querySelector(".navbar");

        loginBtn.onclick = () => loginForm.classList.add("active");
        formClose.onclick = () => loginForm.classList.remove("active");
        menuBar.onclick = () => navbar.classList.toggle("active");
        let menu = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-bar");

menuBtn.onclick = () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        menuBtn.classList.replace("fa-bars", "fa-times");
    } else {
        menuBtn.classList.replace("fa-times", "fa-bars");
    }
};




document.addEventListener("DOMContentLoaded", function () {
    let loginForm = document.querySelector(".login-form-container");
    let registerForm = document.querySelector(".register-form-container");

    let registerBtn = document.getElementById("register-btn"); 
    let goToRegisterLinks = document.querySelectorAll("#go-to-register, #forgot-password");
    let goToLogin = document.querySelector("#go-to-login");

    let formClose = document.getElementById("form-close");
    let registerFormClose = document.getElementById("register-form-close");

    
    if (registerBtn) {
        registerBtn.addEventListener("click", function (event) {
            event.preventDefault();
            registerForm.classList.add("active"); 
        });
    }

    goToRegisterLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            loginForm.classList.remove("active"); 
            registerForm.classList.add("active"); 
        });
    });

    goToLogin.addEventListener("click", function (event) {
        event.preventDefault();
        registerForm.classList.remove("active"); 
        loginForm.classList.add("active"); 
    });

    formClose.onclick = () => loginForm.classList.remove("active");

    registerFormClose.onclick = () => registerForm.classList.remove("active");
});





var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 800,
    slidesPerGroup: 1,
    centeredSlides: false,
});




window.addEventListener("scroll", function () { 
    if (window.scrollY >= 200) {   
        goToBtn.classList.add("active");
    } else { 
        goToBtn.classList.remove("active"); 
    }
} );




