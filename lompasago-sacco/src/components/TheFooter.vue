<template>
    <div>
        <footer class="page-footer">
            <div class="footer-container">
                <div class="reach-us">
                    <h1>reach us</h1>
                    <p> <i class="fa-solid fa-location-pin"></i> Theevan Hse, 3rd Floor, Jogoo Rd</p>
                    <p> <i class="fa-solid fa-envelope-open-text"></i> P.O BOX 17553 - 00500</p>
                    <p><i class="fa-solid fa-square-phone"></i>+254 776 098 515</p>
                    <p><i class="fa-solid fa-message"></i>+254 733 861 315</p>
                    <p> <i class="fa-solid fa-envelope"></i> info@lompasagosacco.com</p>
                    <router-link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>

                    </router-link>
                    <router-link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </router-link>
                    <router-link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><title>Twitter</title><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </router-link>
      

                </div>
        
                <div class="quick-links">
                    <h1>quick links</h1>
                    <a href="">Our members</a> <br> <br>
                    <a href="">Our team</a> <br> <br>
                    <a href="">Career</a> <br> <br>
                    <a href="">Loan Applicaton form</a> <br> <br>
                    <a href="">News and updates</a> <br> <br>
                    <a href="">Downloads</a> <br> <br>
                    <a href="">FAQs</a> <br> <br>
                    <a href="">Vacancies</a> <br> <br>
                </div>
                <div class="talk-to-us">
                    <h1>make an inquiry</h1>
                    <form id="form" action="">
                        <input id="first-name" type="text" placeholder="first name"> <br>
                        <input id="email" type="email" placeholder="email">  <br>
                        <textarea name="" id="" cols="30" rows="6" placeholder="please enter your message here"></textarea> <br>
                        <button class="make-inquiry">send</button>
                    </form>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name:'FooterComp',


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


.page-footer{
    background-color: $web-color;
    // border: 2px solid red;
    .footer-container{
        padding: 8rem 0;
        background-color: $web-color;
        display: flex;
        // align-items: flex-start;
        width: 100%;
        // justify-content: space-evenly;
        flex-wrap: wrap;
        // align-items: center;
        justify-content: space-evenly;
        // border: 2px solid rgb(255, 255, 255);


        div{
            padding: 5rem;
            // background-color: red;
            // border: 2px solid rgb(0, 0, 0);
            // background-color: blueviolet;
        }

        h1{
            font-size: 2.2rem;
            font-weight: $bold;
            text-transform: capitalize;
            color: white;
            text-shadow: 1px 1px black;
            opacity: 0.9;
            padding: 2rem 0;
        }

        //DIV FOR REACHING US
        .reach-us{

            p{
                color: white;
                font-size: 1.5rem;
                font-weight: $bold;
                padding: 1.2rem 0;
                opacity: 0.9;

                i{
                    font-size: 1.8rem;
                    padding-right: 2rem; 
                    opacity: .8;
                }
            }

            a{
                color: white;
                svg{
                    width: 4rem;
                    
                    padding-right: 2rem;
                    margin-top: 2rem;
                }
 
            }
        }

        //DIV WITH THE QUICK LINKS
        .quick-links{
            // background-color: blue;
            a{
                color: white;
                font-weight: $bold;
                font-size: 1.5rem;
                text-decoration: none;
                opacity: 0.9;
            }
        }

        //DIV WITH THE INPUTS
        .talk-to-us{

            h1{
                font-size: 2rem;
            }

            textarea,input{
                background-color: whitesmoke;
                font-family: $web-font1,$web-font2;
                font-size: 1.4rem;
                font-weight: $medium;
                width: 100%;
                border: none;
                padding: 1.4rem 1.5rem;
                margin-bottom: 1.5rem;
                color: black;
            }

            button{
                background-color: rgb(11, 11, 185);
                color: white;
                font-weight: $bold;
                text-transform: uppercase;
                font-size: 1.4rem;
                padding: 1.4rem 1.5rem;
                border: none;
                width: 19rem;
                cursor: pointer;
            }
        }
    }
}

@media screen and (max-width:630px) {
.page-footer{
    .footer-container{
        width: 100%;

        display: grid;
        grid-template-columns: 1fr;


    }
}
}

</style>