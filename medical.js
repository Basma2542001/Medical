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

// تبديل الأيقونة 
menuBtn.onclick = () => {
    menu.classList.toggle("active");

    // تغيير الأيقونة 
    if (menu.classList.contains("active")) {
        menuBtn.classList.replace("fa-bars", "fa-times");
    } else {
        menuBtn.classList.replace("fa-times", "fa-bars");
    }
};




document.addEventListener("DOMContentLoaded", function () {
    let registerBtn = document.getElementById("register-btn");
    let registerForm = document.querySelector(".register-form-container");
    let registerFormClose = document.getElementById("register-form-close");

    // فتح فورم التسجيل عند الضغط على الأيقونة
    registerBtn.onclick = () => {
        registerForm.classList.add("active");
    };

    // إغلاق فورم التسجيل عند الضغط على زر الإغلاق
    registerFormClose.onclick = () => {
        registerForm.classList.remove("active");
    };

    
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




