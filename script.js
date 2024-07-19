let menu = document.querySelector(".menu i");
let cross = document.querySelector(".navlinks i");
let tl = gsap.timeline()

tl.to(".navlinks",{
   width:"100%",
   duration: 0.1
})

tl.from(".navlinks ul li",{
   y: 100,
   stagger: 0.3,
   duration: 0.5,
   opacity:0
})

tl.from(".navlinks i",{
   opacity: 0
})

tl.pause()

menu.addEventListener("click",() => {
   
   tl.play()
   
})

cross.addEventListener("click",() => {
   tl.reverse()
})


gsap.from(".home-left h4",{
   opacity:0,
   duration: 3,
})

gsap.from(".home-left h1",{
   opacity:0,
   duration: 2,
})
gsap.from(".home-left p",{
   opacity:0,
   duration: 2,
})
gsap.from(".home-left a",{
   opacity:0,
   duration: 2,
})

gsap.from(".home-right img",{
   opacity:0,
   duration: 2,
})

let loaderCo = document.getElementById("loader-container");

// window.addEventListener("load",() => {
//    setTimeout(() => {
//       loaderCo.classList.toggle("toggle-loader")
//    },1000)
// })