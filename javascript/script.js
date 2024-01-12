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
    distance:'150px',
    duration:1500,
    delay:150, 
});


ScrollReveal().reveal('.heading, .headingabout , #hero' ,  { origin:'top' });

ScrollReveal().reveal('.about-content, .container', { origin:'bottom' });

ScrollReveal().reveal('.about-image', { origin:'left' });

ScrollReveal().reveal('',{origin:'right'});

ScrollReveal().reveal(".blog-container", {delay:200, easing:"ease-out", interval:200, scale:1.2})

// scroll reveal ends 

// contact form js
const inputs = document.querySelectorAll(".input");
             
function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}
 
function blurFunc(){
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
    
}
 
inputs.forEach(input =>{
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", focusFunc);
})

// contact form js ends

// slider 
var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
// slider ends