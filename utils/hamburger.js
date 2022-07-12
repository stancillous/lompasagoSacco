gsap.registerPlugin(ScrollTrigger)

MouseFollower.registerGSAP(gsap);

//INITIALIZING THE MOUSE FOLLOWER

const cursor = new MouseFollower({
    el: null,
    container: document.body,
    className: 'mf-cursor',
    innerClassName: 'mf-cursor-inner',
    textClassName: 'mf-cursor-text',
    mediaClassName: 'mf-cursor-media',
    mediaBoxClassName: 'mf-cursor-media-box',
    iconSvgClassName: 'mf-svgsprite',
    iconSvgNamePrefix: '-',
    iconSvgSrc: '',
    dataAttr: 'cursor',
    hiddenState: '-hidden',
    textState: '-text',
    iconState: '-icon',
    activeState: '-active',
    mediaState: '-media',
    stateDetection: {
        '-pointer': 'a,button',
        '-hidden': 'iframe'
    },
    visible: true,
    visibleOnState: false,
    speed: 0.55,
    ease: 'expo.out',
    overwrite: true,
    skewing: 0,
    skewingText: 2,
    skewingIcon: 2,
    skewingMedia: 2,
    skewingDelta: 0.001,
    skewingDeltaMax: 0.15,
    stickDelta: 0.15,
    showTimeout: 20,
    hideOnLeave: true,
    hideTimeout: 300,
    hideMediaTimeout: 300
});


window.addEventListener('load',showAnimations)

function showAnimations(){
    //selecting the hamburget button on each page
    const hamburgerBtn = document.querySelector('.hamburger-button')

    //timeline to animate the links items when the button is clicked
    let menuLinksItemTl = gsap.timeline({paused:true})
    menuLinksItemTl.from('.menu-links-item',{x:-22,stagger:.1})


    
    //EVENT LISTENER ON THE HAMBURGER BUTTON
    hamburgerBtn.addEventListener('click',()=>{
        //animating the hamburger button
        hamburgerBtn.classList.toggle('hamburgerClicked')
        //showing the links
        document.querySelector('.menu-links').classList.toggle('active')
        
        //disable scrolling when the button is clicked
        document.body.classList.toggle('hideOverflow')


        //animating the links item when the button is clicked
        if(hamburgerBtn.classList.contains('hamburgerClicked')){
            menuLinksItemTl.play()
        }
    
        else{
            menuLinksItemTl.reverse()
        }
       

    
    
    
    
    })
    


    //TIMELINE FOR ANIMATING THE TOP SECTION
    let pageContentTl = gsap.timeline({
        defaults:{
            ease:'Power0.easeNone',

        }
    })
                        //page content is the div containing all the page elements on each page
    pageContentTl.to('.page-content',{opacity:1,duration:1})
                    //the links items on the page header section
                    .from('.menu-links-item',{y:-11,opacity:0,stagger:.1},'-=.1')
                    //the join us button on the header
                    .fromTo('.join-us',{clipPath:'inset(0% 0% 100% 0%)', opacity:0},{opacity:1, clipPath:'inset(0% 0% 0% 0%)',duration:.8},'<')
                //the logo image
                    .from('#logo-image',{opacity:0},'<')




    //TIMELINE FOR ANIMATING THE FOOTER SECTION
    let pageFooterTl = gsap.timeline({
        scrollTrigger:{
            trigger:'.page-footer',
            start:'top 70%',
            // markers:true,
            toggleActions:'play none none reverse',
            ease:'none',
        }
    })

    pageFooterTl.from('.page-footer',{opacity:0,duration:1})

}



const headerLinks = document.querySelectorAll('.menu-links-item')



const ul = document.querySelector('.list-container')

console.log(headerLinks);


headerLinks.forEach((item)=>{
    item.addEventListener('click',()=>{
        ul.querySelector('.active-link').classList.remove('active-link')

        item.classList.add('active-link')
    })
})