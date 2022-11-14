<template>
    <div>
        <div id="div" class="hamburger-button">
            <span></span>
            <span></span>
            <span></span>
        </div>
    
    
        <header class="page-header">
            <nav class="nav-bar">
                <div class="logo">
                    <router-link to="/"><img id="logo-image" src="../assets/logo.png" alt=""></router-link>
                    
                </div>
    
                <div class="menu-links">
                    <ul>
                        <li class="menu-links-item active-link">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="menu-links-item">
                            <router-link to="/about">About</router-link>
                        </li>
                        <li class="menu-links-item">
                            <router-link to="/loans">Loans</router-link>
                        </li>
                        <li class="menu-links-item">
                            <router-link to="/savings">Savings</router-link>
                        </li>
                        <li class="menu-links-item">
                            <router-link to="/contact">Contact Us</router-link>
                        </li>
                        <button class="join-us"> <router-link to="/membership">Join Us</router-link> </button>
    
                    </ul>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
    export default {
        name:'HeaderComp',

        mounted(){
            this.showMenuButton()
        },

        methods:{
            showMenuButton(){
                let hamburgerBtn = document.querySelector('.hamburger-button')
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
                        // menuLinksItemTl.play()
                    }
                
                    else{
                        // menuLinksItemTl.reverse()
                    }
                

                
                
                
                
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
$web-color:#293df1;
$web-font1:"Satoshi", sans-serif;
$web-font2:"General Sans", sans-serif;
$bg-color:#d5fbfb;


//font weights 
$light:300;
$regular:400;
$medium:500;
$bold:700;
$black:900;

//HAMBURGER BUTTON
.hamburger-button {
    z-index: 888;
    position: fixed;
    top: 4%;
    right: 8%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 0.2rem;
    display: none;

    span{
        background-color: black;
        height: 0.2rem;
        width: 3rem;
        padding: 0.1rem;
        opacity: 0.7;
        margin: 0.3rem 0;
        border-radius: 0.8rem;
        transition: all 0.1s ease-in;

        &:nth-child(2){
            width: 2.4rem;
            margin-left: .6rem;
        }
        &:nth-child(3){
            width: 3rem;
        }
    }
  }


//HEADER
.page-header {

    // border: 1px solid $web-color;
    border-bottom: 1px solid rgb(34, 34, 196);
    height: 15vh;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    width: 100vw;
    z-index: 232;
    background-color: $bg-color;


    .nav-bar {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        justify-content: space-evenly;

        //logo
        .logo img {
            width: 8rem;
          }


        .menu-links{
            ul li {
                list-style-type: none;
                display: inline-block;
                color: black;

                a {
                    color: black;
                    // color: red;
                    font-size: 1.3rem;
                    margin: 0 0.8rem;
                    font-weight: $black;
                    text-transform: uppercase;
                    text-decoration: none;
                    opacity: 0.8;
                  }
  
            }
            //the button on the header
            .join-us {
                background-color: transparent;
                border: 1px solid $web-color;
                font-weight: $black;
                padding: 1rem 2rem;
                text-transform: uppercase;
                font-size: 1.3rem;
                margin-left: 5rem;
                // cursor: pointer;
                border-radius: 0.3rem;
                color: $web-color;

                a {
                    color: $web-color;
                    text-decoration: none;
                    padding: 1rem 0;
                  }
              }

              .activeNavLink{
                color: $web-color;
                text-decoration-color: $web-color;
              }

        }
      }
}

//TOGGLE THIS CLASS WHEN THE HAMBURGER BUTTON IS CILCKED

.hamburger-button.hamburgerClicked{

span{

    &:nth-child(1){
            transform: translateY(0.8rem) rotate(45deg);
    }
    &:nth-child(2){
        opacity: 0;
    }
    &:nth-child(3){
        transform: translateY(-1rem) rotate(-45deg);

    }
}
}

//TOGGLE THIS CLASS WHEN THE HAMBURGER BUTTON IS CILCKED
//TO SHOW THE LINKS

.page-header .nav-bar .menu-links.active {
    clip-path: circle(70.7% at 50% 50%);
}

//TOGGLE THIS CLASS TO THE BODY WHEN THE HAMBURGER BUTTON IS CILCKED
body.hideOverflow {
    overflow: hidden;
}

.page-header .nav-bar .menu-links ul li.active-link a{
}





@media screen and (max-width: 799px) {
    .hamburger-button {
      display: flex;
    }
  
    .page-header .nav-bar {
      justify-content: flex-start;
    }
    .page-header .nav-bar .menu-links {
      position: absolute;
      top: 0;
      left: 0;
      background-color: $bg-color;
      height: 100vh;
      width: 100vw;
      z-index: 432;
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-clip-path: circle(1.5% at 100% 0);
              clip-path: circle(1.5% at 100% 0);
      transition: all 0.3s ease-in;
    }
    .page-header .nav-bar .menu-links ul {
    //   border: 1px solid #293DF1;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 60%;
      align-items: center;
      justify-content: space-evenly;
    }
    .page-header .nav-bar .menu-links .join-us {
      margin-left: unset;
    }
  }

</style>