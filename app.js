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



// const a = document.querySelectorAll('#dd')
const aID = document.querySelectorAll('#dd')
const skillHeader= document.querySelectorAll('.skills_header')

skillHeader.forEach(el =>{
    el.addEventListener('click', () =>{
        for(i = 0; i  < aID.length; i++){
            const itemClass = aID[i].className
            // console.log(itemClass)

            if(itemClass ==='skills__content skills__open'){
                aID[i].className = 'skills__content skills__close'
            }else{
                aID[i].className = 'skills__content skills__open'
            }    
        }      
     })
})



const Tabs = document.querySelectorAll('[data-target]'),
     tabsContent = document.querySelectorAll('[data-content]')


     Tabs.forEach(el =>{
        el.addEventListener('click', ()=>{
             const tar = document.querySelector(el.dataset.target) 
            
         tabsContent.forEach(items =>{
             items.classList.remove('qualification__active')
         } )
         tar.classList.add('qualification__active')

         el.classList.remove('qualification__active')
         
        })
     })



