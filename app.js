const toggle = document.querySelector('.nav__toggle')
const menuNav = document.querySelector('.nav__menu')
const close = document.querySelector('.nav__close')

const allLinks = document.querySelectorAll('.nav__link')

toggle.addEventListener('click', () =>{
    menuNav.classList.add('show-nav')
})
close.addEventListener('click', () =>{
    menuNav.classList.remove('show-nav')
})

allLinks.forEach(el =>{
    el.addEventListener('click', () =>{
        menuNav.classList.remove('show-nav')
    })
})

