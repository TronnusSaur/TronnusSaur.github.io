/** Scroll **/

const header = document.querySelector('.header')

window.addEventListener('scroll', function() {
    header.classList.toggle('active', window.scrollY > 0)
})

/** Menu Responsive **/

const nav_bar = document.querySelector('.nav_bar');
const menu_btn = document.querySelector('.menu_btn');

menu_btn.addEventListener('click', () =>{
    nav_bar.classList.toggle('active')
})

/** Sonido? **/

var bg_snd = document.getElementById("bg-music");
    function setNullVolume() { 
    bg_snd.volume = 0.0;
    } 
    function setLowVolume() { 
    bg_snd.volume = 0.4;
    } 
    function setFullVolume() { 
    bg_snd.volume = 0.8;
    }