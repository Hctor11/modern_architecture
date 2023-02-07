gsap.registerPlugin(ScrollTrigger)

// h1
gsap.from('.h1',{ 
    opacity: 0 ,
    scrollTrigger: {
        trigger: '.h1',
        markers: true
    }
}
)
gsap.to('.h1',{
    duration: 2, 
    y: -20, 
    opacity: 1, 
    scrollTrigger: '.h1',
} 
)

// h2
gsap.from('.h2',{ 
    opacity: 0 ,
    scrollTrigger: {
        trigger: '.h2',
        markers: true,
        toggleActions: "restart"
    },
}
)
gsap.to('.h2',{
    duration: 1, 
    y: -20, 
    opacity: 1, 
    scrollTrigger: {
        trigger: '.h2',
        toggleActions: "restart"
    },
} 
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
    duration: 6, 
    x: 20, 
    y: -100, 
    opacity: 1, 
    scale:1.1} 
)

gsap.from('.img2',{ 
    opacity: 0 }
)
gsap.to('.img2',{
    duration: 5, 
    x: 40, 
    y: -200, 
    opacity: 1
    } 
)
