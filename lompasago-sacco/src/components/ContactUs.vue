<template>
    <div>
        <section class="contact-section">
                <div class="contact-container">
        
                    <div class="form-container">
                        <h1>Leave us a message.</h1>
                        <p>We would love to hear from you.</p>
        
                        <form action="" id="form">
        
                            <div class="info">
                                <label for="first-name">Your name</label> <br>
                                <input id="first-name" required type="text" > <br>  <br>
        
                                <label for="email">Your email</label> <br>
                                <input id="last-email" required type="text"> <br> <br>
        
                                <label for="phone-number">Phone Number</label> <br>
                                <input id="phone-number" type="text" required> <br> <br> <br>
        
                                <label for="message">Your message</label> <br> <br>
                                <textarea name="" id="message" placeholder="" cols="35" rows="10"></textarea> <br><br>
                                <!-- <input type="text" required id="message"> -->
                                <button type="submit" id="submit">send</button>
        
                            </div>
        
                        </form>
        
                    </div>
        
                    <div class="reach-us-container">
        
                        <div class="numbers-and-working-hours">
                                <div class="numbers">
                                    <h2>Phone Numbers</h2>
                                    <p>+254 776 098 515</p>
                                    <p>+254 733 861 315</p>
                                </div>
                                  
                                <div class="email">
                                    <h2>Email </h2>
                                    <p>  info@lompasagosacco.com</p>
            
                                </div>
           
                                <div class="whatsapp">
                                    <h2>Whatsapp</h2>
                                    <p>  +254 700 006 007</p>
                                </div>
          
                                <div class="address">
                                    <h2>Address</h2>
                                    <p>P.O BOX 17553 - 00500</p>
                                </div>

                                        
                                <div class="working-hours">
                                    <h2>working hours</h2>
                                    <p>Monday - Saturday: 8:00am - 5:30 pm</p>
                                    <p>Closed on Sunday</p>
                                </div>
     
                            

                        </div>
        
        
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


.contact-section{
    margin-top: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    // height: 100vh;
    width: 100vw;
    color: black;

    .contact-container{
        width: 80%;
        // border: 2px solid;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;



        .form-container{
            margin: 2rem;


            h1{
               // font-weight: $bold;
                font-size: 2.3rem;
                opacity: .9;
                text-align: center;

            }

            p{
                font-size: 1.6rem;
               font-weight: $medium;
               font-weight: $bold;
                padding: 1rem 0;
                opacity: .9;
                padding-bottom: 4rem;
                text-align: center;
            }
            #form{
                display: flex;
                background-color: $web-color;
                align-items: center;
                justify-content: center;
                // padding: 8rem 0;
                // border-radius: .3rem;


                .info{
                    padding: 3rem 2rem;
                    // border: 2px solid rgb(205, 7, 7);
                    width: 100%;
                    label{
                        font-size: 1.6rem;
                        opacity: .9;
                        color: white;
                    //    font-weight: $bold;
                    }
    
                    input{
                        // text-transform: uppercase;
                        padding: 1rem;
                        width: 100%;
                        margin-bottom: 2rem;
                       font-weight: $medium;
                        border: none;
                        color: white;
                        font-size: 1.4rem;
                        background-color: transparent;
                        border-bottom: 1px solid black;
                        border-bottom: 1px solid white;
                        width: 80%;
                        &:focus{
                            outline: none;
                            border: 1px solid rgb(255, 255, 255);
                        }
                    }
                    
                    //textarea
                    #message{
                        width: 100%;
                        font-size: 1.4rem;
                       font-weight: $medium;
                        color: black;
                        padding: 1rem;
                        font-family: $web-font1,$web-font2;


                    }

                    button{
                        padding: 1.5rem 4rem;
                        border: none;
                        color: white;
                       font-weight: $bold;
                        border-radius: .2rem;
                        cursor: pointer;
                        // border: 1px solid white;
                        background-color: darkblue;
    
                    }
                }

            }
        }

        .reach-us-container{
            margin: 2rem;
            // border: 1px solid red;
            align-items: center;
            display: flex;
            align-items: center;
            justify-content: center;

            .numbers-and-working-hours{
                // border: 1px solid blue;


                div{
                    margin: 1rem;

                    // border: 2px solid black;
                    padding: 1rem;

                    h2{
                        font-size: 1.7rem;
                       font-weight: $black;
                       // color: $web-color;
                        opacity: .9;
                        text-transform: capitalize;
                        // padding: 1rem 0;
                    
                        padding: .5rem 0;
                        padding-top: 3rem;
                   
                    }
    
                    p{
                       font-weight: $bold;
                        // font-weight: $medium;
                        font-size: 1.5rem;
                        opacity: .9;
                        padding: .5rem 0;
    
    
                    }
                
                }




            }

        }
    }
}


//FOR LARGE SCREENS

@media screen and (min-width:1500px) {
    

    .contact-section{
        .contact-container{
            width: 70%;


            .reach-us-container{

                .numbers-and-working-hours{
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }


            }
        }
    }
}


//FOR SMALLER SCREENS

@media screen and (max-width:1000px) {
    .contact-section{
        .contact-container{
            width: 100%;
        }
    }
}


@media screen and (max-width:900px) {
    .contact-section{
        .contact-container{
            width: 100%;
            display: flex;
            flex-direction: column-reverse;
            .form-container{
                width: 100%;

                h1,p{
                    text-align: left;
                    padding: 1rem 4rem;
                }

                #form{
                    width: 100%;
     
                    justify-content: center;


                    .info{
                        padding: 4rem;

                        input{
                            width: 60vw;
                        }

                        //textarea
                        #message{
                            width: 60vw;
                        }
                    }
                }
            }

            .reach-us-container{
              border-bottom: 1px solid $web-color;
                width: 100vw;
                justify-content: flex-start;
                justify-content: center;
                padding: 1rem 4rem ;

                .numbers-and-working-hours{
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }


            }
        }
    }
}



@media screen and (max-width:500px) {
    .contact-section{
        .contact-container{
            .reach-us-container{
                .numbers-and-working-hours{
                    grid-template-columns: 1fr;
                }
            }
        }
    }
}
</style>