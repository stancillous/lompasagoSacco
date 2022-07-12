

gsap.registerPlugin(ScrollTrigger)



window.addEventListener('load',showAnimations)


function showAnimations(){

    //TIMELINE TO ANIMATE THE PAGE CONTENT DIV AND THE HERO SECITON
    let heroTl = gsap.timeline({
        defaults:{
            ease:'Power0.easeNone',

        }
    })

        heroTl.from('#hero-image',{scale:1.8,duration:1},'+=.1')
        .from('.hero-paragraph, .hero-header, .become-member',{duration:1,opacity:0},'+=.1')



        // let pageContentTl = gsap.timeline({
        //     defaults:{
        //         ease:'Power0.easeNone',
    
        //     }
        // })
        //                     //page content is the div containing all the page elements on each page
        // pageContentTl.to('.page-content',{opacity:1,duration:1})
        //             //the links items on the page header section
        //             .from('.menu-links-item',{y:-11,opacity:0,stagger:.1},'-=.1')
        //             //the join us button on the header
        //             .fromTo('.join-us',{clipPath:'inset(0% 0% 100% 0%)', opacity:0},{opacity:1, clipPath:'inset(0% 0% 0% 0%)',duration:.8},'<')
        //         //the logo image
        //             .from('#logo-image',{opacity:0},'<')


        //TIMELINE TO ANIMATE THE PRODUCT SECTION
    let productsTl = gsap.timeline({
        scrollTrigger:{
            trigger:'.products-section',
            // markers:'true',
            start:'top bottom',
            toggleActions:'play none none reverse',
            ease:'none',


        }
    })

    productsTl.from('.products-image',{y:133,duration:.5})
    

    //TIMELINE FOR THE JOIN US SECTION
    let joinUsTl = gsap.timeline({
        scrollTrigger:{
            trigger:'.join-us-section',
            // markers:true,
            scrub:1,
            start:'top bottom',
            ease:'none',


        }
    })

    joinUsTl.to('#join-us-img',{y:-103})


    //THE DIVS WITH THE CLASS OF ACHIEVEMENT
    const achievementDiv = document.querySelectorAll('.achievement-div')
    achievementDiv.forEach((item)=>{

        let achievementDivTl = gsap.timeline({paused:true})
        achievementDivTl.to(item,{y:-11})

        item.addEventListener('mouseenter',()=>{
            achievementDivTl.play()
            item.style.border = '4px solid blue'
        })

        item.addEventListener('mouseleave',()=>{
            achievementDivTl.reverse()
            item.style.border = '1px solid blue'


        })
        


    })



}







