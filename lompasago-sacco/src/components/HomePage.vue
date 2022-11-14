<template>
    <div>
        <section class="main-section">
            <div class="hero-image">
                <img id="hero-image" src="../assets/hero.jpg" alt="">
            </div>
            <div class="hero-section-container">
                <div class="hero-section">
                    <div class="hero-text">
                        <h1 class="hero-header">your financial independence, <br>our priority</h1>
                        <p class="hero-paragraph">Promoting the economic interests of members by encouraging <br> thrift through the mobilization of deposits, savings and investments </p>
                        <button class="become-member">become a member</button>
    
                    </div>
                </div>
            </div>
        </section>

        <section class="products-section">
            <h1>our products</h1>
    
            <div class="products-parent">
                <div class="products-container">
    
                    <div class="container">
                        <div id="savings-div" class="savings">
                            <img class="products-image" src="../assets/savings.jpg" alt="">
                            <h2 class="products-titles" >savings products</h2>
                            <p class="products-paragraph">Start your saving journey with us.Save  your  money and earn competitive interests on your savings balance</p>
                            <router-link class="read-more-products" to="/savings">read more</router-link>
                        </div>
                        
                        <div id="loan-savings" class="loans">
                            <img class="products-image" src="../assets/loan.jpg" alt="">
                            <h2 class="products-titles" >loan products</h2>
                            <p class="products-paragraph">From mobile to development loans, we give you flexible financial  boosts to help you reach your full potential</p>
                            <router-link class="read-more-products" to="/loans">read more</router-link>

                        </div>
                    </div>
    
                </div>
            </div>
    
        </section>

        <section class="join-us-section">
            <div class="join-us-container">
                <div class="why-join-us">
                    <h2>join us today</h2>
    
                    <p class="join-us-paragraph"> High dividend interest rate @ 11.9%. </p>
                    <p class="join-us-paragraph">Borrow as much as 4 times your savings amount.</p>
                    <p class="join-us-paragraph">Low interest rates on loans @ less than 1%.</p>
                    <p class="join-us-paragraph"> Great interest rates on savings. </p>
                    <p class="join-us-paragraph">Access to quick mobile loans of up to 100,000/-.</p>
                    <p class="join-us-paragraph">Our members are from all over the country.</p>
                 
                </div>
    
    
    
                <div class="join-us-image">
                    <img id="join-us-img" src="../assets/joinUs.jpg" alt="">
                </div>
    
            </div>
        </section>
    
        <section class="achievement-section">
            <div class="achievement-container">
                <div class="achievement-div" id="total-savings">
                    <section>
                        <span class="iconify" data-icon="fluent:savings-16-filled"></span>
    
                        <p>505,005,961/= Total savings</p>
                    </section>
    
                </div>
    
                <div class="achievement-div" id="monthly-contributions">
                    <section>
                        <span class="iconify" data-icon="fa6-solid:money-bill-trend-up"></span>
                        <p>9.6 million monthly contibutions</p>
                    </section>
    
                </div>
    
                <div class="achievement-div" id="average-contributions">
    
                    <section>
                        <span class="iconify" data-icon="ri:funds-fill"></span>
    
                        <p>30,000,000 average monthly collections</p>
                    </section>
    
                </div>
    
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        
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


//HERO SECTION
.main-section{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
    margin-top: 15vh;
    width: 100vw;
    position: relative;
    // border: 2px solid red;            
    // padding-bottom: 3rem;


    //THE HERO BACKGROUND IMAGE 
    .hero-image{
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: -1;

        &::after{
            position: absolute;
            content: '';
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            background-color: black;
            opacity: .5 ;
        }



        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
            position: relative;

        }

    }
    .hero-section-container{
        width: 65%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 2rem;
        // border: 2px solid rgb(255, 255, 255);  
        .hero-section{

            .hero-text{
                h1{
                    font-size:5rem;
                    font-weight: $black;
                    text-transform: capitalize;
                    color: white;
                    text-shadow: 2px 2px black;
                    // border: 1px solid;
              }

              p{
                font-weight: $medium;
                font-size:2rem;
                font-weight: $bold;
                padding: 2.2rem 0;
                padding-left: .2rem;
                color: white;
                // text-shadow: 1px 2px black;
                // border: 1px solid;
                opacity: .9;


              }

              button{
                color: white;
                font-weight: $bold;
                // letter-spacing:.1rem;
                font-size: 1.3rem;
                padding: 1.4rem 2rem;
                border-radius: .2rem;
                border: none;
                background-color: $web-color;
                background-color: blue;
                opacity: .8;
                text-transform: uppercase;
                // text-shadow: 1px 1px black;
                margin-top: .5rem;



              }
            }


        }
    }
}

//THE PRODUCTS SECTION

.products-section{
    // border: 2px solid red;

    background-color: $bg-color;
    margin-top: 5rem;
    padding: 1rem 0;
  
    h1{
        text-align: center;
        font-size: 2.5rem;
        color: black;
        opacity: .9;
        font-weight: $black;
        text-transform: capitalize;
        position: relative;
        color: $web-color;

        &::after{
            content: '';
            position: absolute;
            height: .3rem;
            border-radius: .4rem;            background-color: $web-color;
            display: block;
            left: 48%;
            right: 48%;
            bottom: -12%;

        }
    }

    .products-parent{
        display: flex;
        align-items: center;
        justify-content: center;

        .products-container{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            // border: 2px solid;
            margin-top: 4rem;


            .container{
                // border: 2px solid blue;

                width: 60%;
                display: flex;
                justify-content: space-around;

                .loans, .savings{
                    
                    // border: 1px solid;
                    margin-top: 2rem;
                    width: 30rem;
                    padding: 1rem;
                    position: relative;

                    .products-titles{
                        color: black;
                        font-weight: $black;
                        text-transform: capitalize;
                        font-size: 2rem;
                        padding-top: 2rem;
                    }
        
                    .products-paragraph{
                        font-size: 1.5rem;
                        font-weight: $bold;
                        color: black;
                        padding: 2rem 0;
                        padding-bottom: 4rem;
                    }
        
                    .products-image{
                        // position: absolute;
                        
                        width: 15rem;
                        height: 25rem;
                        // height: 100%;
                        width: 100%;
                        object-fit: cover;
        
                    }
        
                    //THE a tag. links
                    .read-more-products{
                        position: absolute;
                        bottom: 0;
                        left: .5rem;
                        font-size: 1.5rem;
                        color: $web-color;
                        text-decoration: none;
                        font-weight: $black;
                        &::after{
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            height: .1rem;
                            display: block;
                            background-color: $web-color;
                        }   
        
                    }

                }
    

            }
        }
    }
}

//JOIN US SECTION

.join-us-section{
    margin-top: 16rem;
    background-color: $web-color;
    display: flex;
    align-items: center;
    justify-content: center;

    .join-us-container{
        width: 90%;
        // border: 2px solid red;
        padding: 7rem 0;
        display: flex;
        align-items: center;
        // justify-content: space-between;
        justify-content: space-around;
        .why-join-us{
            // border: 2px solid red;
            padding: 2rem;
            h2{
                font-weight: $black;
                color: white;
                font-size: 2.5rem;
                text-shadow: 1px 2px black;
                text-transform: capitalize;
                opacity: .9;
                padding: 2rem 0;

            }

            p{
                font-size: 1.5rem;
                color: white;
                font-weight: $bold;
                padding: 1rem 0;
                opacity: .8;
            }

        }

        .join-us-image{

            img{

                height: 44rem;
                width: 50rem;
 
                object-fit: cover;
                margin-bottom: -15rem;
            }

 

        }
    }
}

//ACHIEVEMENT SECTION

.achievement-section{
    margin-top: 10rem;
    // border: 1px solid;
    display: flex;
    align-items: center;
    padding: 10rem 0;
    justify-content: center;


    .achievement-container{
        width: 85%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        // border: 2px solid red;

        div{
            // border: 1px solid black;
            padding: 4rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 22rem;
            width: 22rem;
            border: 1px solid $web-color;
            margin: 1rem;

            .iconify{
                color: $web-color;
                font-size: 4rem;

            }

            p{
                padding: 3rem 0;
                color: black;
                font-size: 1.5rem;
                font-weight: $bold;
            }
        }



    }
}




//M. QUERIES FOR LARGE SCREENS
@media screen and (min-width:1500px) {

    //THE MAIN SECTION 
    .main-section{
        .hero-section-container{
            width: 50%;
            // background-color: black;
        }
    }

    //THE JOIN US SECTION
    .join-us-section{

        .join-us-container{
            width: 70%;
        }
    }

    //ACHIEVEMENT SECTION
    .achievement-section{
        .achievement-container{
            width: 70%;
        }
    }
    
}
@media screen and (min-width:1830px) {

    //THE MAIN SECTION 
    .main-section{
        .hero-section-container{
            width: 45%;
        }
    }


    //THE JOIN US SECTION
    .join-us-section{

        .join-us-container{
            width: 60%;
        }
    }

        //ACHIEVEMENT SECTION
        .achievement-section{
            .achievement-container{
                width: 60%;
            }
        }
    
}

//FOR SMALL SCREENS

@media screen and (max-width:1000px) {
        //MAIN SECTION
        .main-section{
            .hero-section-container{
                .hero-section{
                    .hero-text{
    
                        h1{
                            font-size: 4.8rem;
    
                        }

    
    
                    }
                }
            }
        }



    //PRODUCTS SECTION
    .products-section{
        .products-parent{
            .products-container{
                // border: 2px solid red;
                .container{
                    width: 100%;
                }

            }
        }
    }

    //JOIN US
    .join-us-section{
        .join-us-container{
            width: 100%;
            .join-us-image{

                img{
                    width: 40rem;

                }
            }
        }
    }

    .achievement-section{
        .achievement-container{
            width: 95%;
        }
    }
}

@media screen and (max-width:800px) {

    //MAIN SECTION
    .main-section{
        .hero-section-container{

            .hero-section{
                .hero-text{

                    h1{
                        font-size: 4.5rem;

                    }
                    p{
                        font-size: 1.8rem;
                    }


                }
            }
        }
    }

        //JOIN US
        .join-us-section{
            .join-us-container{
                flex-wrap: wrap;
                flex-direction: column-reverse;
                .why-join-us{
                    padding:2.5rem;
    
    
                }
    
    
                .join-us-image{
    
                    img{
        
                       height: 100%;
                       width: 100%;
                       margin-bottom: unset;
                    }
        
         
        
                }
    
            }
     
     
        }

            //ACHIEVEMENT

    .achievement-section{
        .achievement-container{
            width: 90%;
            flex-wrap: wrap;
    
            div{
                // padding: 12rem;
                padding: 8rem;
                .iconify{
                    color: $web-color;
                    font-size: 3.5rem;
    
                }
    
                p{
                    font-size: 1.6rem;
                }
            }
    
            .total-savings{
                height: 18rem;
                width: 18rem;
            }
    
            .monthly-contributions{
                height: 20rem;
                width: 20rem;
    
            }
    
            .average-contributions{
                height: 22rem;
                width: 22rem;
            }
    
        }
    }


    //FOOTER
    .page-footer{
        .footer-container{

            div{
                // background-color: red;
                padding: 5rem;
            }
        }
    }
}


@media screen and (max-width:700px) {
    
    //MAIN SECTION
    .main-section{
        .hero-section-container{
            
            .hero-section{
                .hero-text{

                    h1{
                        font-size: 3.8rem;

                    }

                    p{

                        font-size: 1.6rem;
                    }

                    button{
                        font-size: 1.2rem;

                    }
                }
            }
        }
    }

    //PRODUCTS SECTION
    .products-section{
        .products-parent{
            .products-container{
                // background-color: red;
                .container{
                    // flex-wrap: wrap;
                    // display: block;
                    // display: none;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;

                    .savings{
                        margin-bottom: 8rem;
                    }
                }
            }
        }
    }






}

@media screen and (max-width:590px) {

    //MAIN SECTION
    .main-section{
        .hero-section-container{

            .hero-section{
                .hero-text{

                    h1{
                        font-size: 3.2rem;

                    }
                    p{

                        font-size: 1.5rem;
                    }

                    button{
                        font-size: 1.2rem;
                    }


                }
            }
        }
    }

    //ACHIEVEMENT



}


@media screen and (max-width:512px) {

    //MAIN SECTION
    .main-section{
        .hero-section-container{

            .hero-section{
                .hero-text{

                    h1{
                        font-size: 3rem;
                        br{content:' ';}
                        br:after{content:' ';}
                    }
                    p{
                        br{content:' ';}
                        br:after{content:' ';}
                        font-size: 1.4rem;
                    }

                    button{
                        font-size: 1.2rem;
                    }


                }
            }
        }
    }

}

@media screen and (max-width:350px) {
    .products-section{
        .products-parent{
            .products-container{
                .container{
                    .loans,.savings{
                        width: 12rem;
                        width: auto;


                    }
                }
            }
        }
    }


}

@media screen and (max-width:300px) {
    
    .achievement-section{
        .achievement-container{
            width: 95%;
            div{
                border-radius: .4rem;
                padding: 2rem;
                height: auto;
            }
        }
    }
}
</style>