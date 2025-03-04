let header = document.querySelector("header");
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');

// end change
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');


let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let phBtn = document.querySelectorAll('.ph-btn');



window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    // this for header to make sticky on scrolling
    header.classList.toggle('sticky', window.scrollY>0);
}


menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});
formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');

});