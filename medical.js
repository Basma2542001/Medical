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

// تبديل الأيقونة وفتح/إغلاق القائمة
menuBtn.onclick = () => {
    menu.classList.toggle("active");

    // تغيير الأيقونة بين (☰) و (✖)
    if (menu.classList.contains("active")) {
        menuBtn.classList.replace("fa-bars", "fa-times");
    } else {
        menuBtn.classList.replace("fa-times", "fa-bars");
    }
};
























document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".custom-swiper", {
        slidesPerView: 3,  
        spaceBetween: 30,  
        loop: true,   // يجعل السلايدر بلا نهاية
        loopAdditionalSlides: 3,  // يضمن إعادة التكرار بسلاسة
        autoplay: {
            delay: 2000,  // تقليل التأخير لجعل الحركة سلسة
            disableOnInteraction: false,  
        },
        speed: 800, // يجعل الحركة أسرع وأنعم
        breakpoints: {
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 }
        }
    });
});