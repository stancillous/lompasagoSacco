


let missionVisionValuesTl = gsap.timeline({
    scrollTrigger:{
        trigger:'.mission-vision-values',
        // markers:true,
        start:'top bottom',
        toggleActions:'play none none reverse',

    }
})

missionVisionValuesTl.from('.mission-vision-values',{y:50,duration:1, opacity:0})