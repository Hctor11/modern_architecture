gsap.registerPlugin(ScrollTrigger)

// h1
gsap.from('.h1',{ 
    opacity: 0 }
)
gsap.to('.h1',{
    duration: 1, 
    y: -20, 
    opacity: 1, } 
)

// p
gsap.from('.p',{ 
    opacity: 0 }
)
gsap.to('.p',{
    duration: 1.5, 
    y: -20, 
    opacity: 1, } 
)

// images -------------------------------------------------------------
gsap.from('.img1',{ 
    opacity: 0 }
)
gsap.to('.img1',{
    duration: 3, 
    x: 20, 
    y: -100, 
    opacity: 1, 
    scale:1.1} 
)

gsap.from('.img2',{ 
    opacity: 0 }
)
gsap.to('.img2',{
    duration: 3.5, 
    x: 40, 
    y: -200, 
    opacity: 1
    } 
)
