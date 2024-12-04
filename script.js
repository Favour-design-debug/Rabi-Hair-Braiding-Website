const closebutton=document.querySelector('.close-nav')
const openbutton=document.querySelector('.open-nav')
const nav =document.querySelector ('.nav-bar')

closebutton.addEventListener ("click", () => {
    nav.classList.remove ('open-navigation')
});

openbutton.addEventListener ("click", () => {
    nav.classList.add ('open-navigation')
});