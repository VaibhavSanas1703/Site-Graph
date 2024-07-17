let menu = document.querySelector(".menu i");
let cross = document.querySelector(".navlinks i");
let tl = gsap.timeline()

tl.to(".navlinks",{
   width:"100%",
   duration: 0.3
})

tl.from(".navlinks ul li",{
   y: 100,
   stagger: 0.3,
   duration: 0.8,
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