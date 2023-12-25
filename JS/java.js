const progress = document.querySelector('.progress-bar');

window.addEventListener('scroll', ()=>{
    const winScroll = window.pageYOffset;
   const height = document.documentElement.scrollHeight - window.innerHeight;
   const scrolled = (winScroll/height) * 100;
   progress.style.width = `${scrolled}%`
   
})
// ..........
const fade = document.querySelector('.imag');

window.addEventListener('scroll', function(){
    fade.style.opacity = 1 - +window.pageYOffset/580
})
//.............

// const container = document.querySelector('.imag');
// console.log(container)

// window.onmousemove = function(e){
//     let x = e.clientX / 15; 
//     let y = e.clientY / 15;
    
//     container.style.backgroundPositionX = x + "px";
//     container.style.backgroundPositionY = y + "px";

// }



// .............................
document.getElementsByClassName("videoo").onmouseover = function(x) {videoplay()};
document.getElementsByClassName("videoo").onmouseout = function(x) {videostop()};

function videoplay(){
   document.getElementsByClassName("videoo").setAttribute("autoplay"); 
}
function videostop() {
    document.getElementsByClassName("videoo")
}

//.................................
const menu = document.querySelector('.menu');
const btn = document.querySelector('.menu-list');

btn.addEventListener('click', function() {
    menu.classList.toggle('active');
    menu.style.visibility = 'visible';
})