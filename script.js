// nav js

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn,onclick =function (){
    dropDownMenu.classList.toggle('open')
    const isopen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isopen
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}

// nav js ends

// popup form js
const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');
const toggleLogin = document.querySelector('.toggle-login');
const close = document.querySelector('.close');

signUpLink.addEventListener('click',() =>{
    wrapper.classList.toggle('show-sign');
    wrapper.classList.add('show-bg');
});

signInLink.addEventListener('click',() =>{
    wrapper.classList.toggle('show-sign');
    wrapper.classList.add('show-bg');
});

toggleLogin.addEventListener('click',() =>{
    toggleLogin.classList.toggle('active');
    wrapper.classList.toggle('active');
});

close.addEventListener('click',() =>{
    toggleLogin.classList.toggle('active');
    wrapper.classList.toggle('active');
    wrapper.classList.remove('show-bg');
});

// popup form js


// Scroll reveal 

ScrollReveal({
    reset: true,
    distance:'80px',
    duration:1500,
    delay:150, 
});


ScrollReveal().reveal('.heading, .headingabout , #hero' ,  { origin:'top' });

ScrollReveal().reveal('.about-content, .container', { origin:'bottom' });

ScrollReveal().reveal('.about-image', { origin:'left' });

ScrollReveal().reveal('',{origin:'right'});

// scroll reveal ends 