gsap.registerPlugin(ScrollTrigger)

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
    scrollTrigger: '.img2', 
    duration: 3.5, 
    x: 40, 
    y: -200, 
    opacity: 1
    } 
)
