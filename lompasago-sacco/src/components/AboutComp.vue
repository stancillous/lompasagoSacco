<template>
    <div>
        <section class="about-section">
            <div class="about-container">
                <h1>about us</h1>
                <div class="about-text-and-image">
                    <div class="about-us-info">
                        <div class="image">
                            <img src="../assets/about1.jpg" alt="">
                        </div>
                        <div class="text">
                            <p>Lompasago Sacco Society was registered on 20th June, 1980 by the Commissioner of Co-operative Development, under Co-operative Society’s Act Cap 490 section 7 of the Laws of Kenya. </p>
                            <p>The Society's main aim is to promote the economic interests of members by encouraging thrift through the mobilization of deposits, savings and investments. Since inception, the society has undergone a series of transformation which include introduction of various products and services.</p>
                        </div>
                    </div>
                </div>
                <div class="mission-vision-values">
                    <div class="mission-vision-values-container">
                        <div class="mission-vision-container">
                            <h2> <img src="../assets/mission.png" alt=""> our mission</h2>
                            <p>To improve the socio- economic status of members, customers and community at large through savings mobilization, affordable credit provision, investment and education.</p>
        
                            <h2> <img src="../assets/vision.png" alt=""> our vision</h2>
                            <p>To be the leading Sacco in the country in off­ering quality financial services to our members and customers</p>
        
        
                            <h2> <img src="../assets/members.png" alt=""> membership</h2>
                            <p>Our membership is drawn from various employers across Nairobi and from Company Branches outside Nairobi. Membership now stands at 3800 members drawn from 170 companies.</p>
        
                        </div>
        
                        <div class="values-container">
                            <h2 > <img src="../assets/values.png" alt=""> our values</h2>
        
                            <p>To realize our vision and mission, the Sacco recognizes the need to nurture and be guided by certain core values in its business. Lompasago commits itself to:</p>
                            <ul>
                                <li>Enhancing equality, equity and solidarity within the co-operative movement.</li>
                                <li>Encouraging practices that are environmental friendly/Social responsibility.</li>
                                <li>Encourage creativity, innovativeness and embrace new ideas</li>
                                <li>Operating on a high level of accountability and transparency.</li>
                                <li>Promoting the concept of self-help and self-responsibility.</li>
                                <li>Co-operation and Teamwork.</li>
                            </ul>
        
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



.about-section{

margin-top: 15vh;
display: flex;
padding-top: 5rem;
align-items: center;
justify-content: center;
color: black;

.about-container{
    // border: 2px solid red;
    width:90%;

    h1{
        font-size: 2rem;
        text-transform: capitalize;
        font-weight: $bold;
        text-align: center;
        position: relative;
        color: $web-color;

        
    &::after{
        content: '';
        position: absolute;
        height: .3rem;
        border-radius: .4rem;
        background-color: $web-color;
        display: block;
        left: 48%;
        right: 48%;
        bottom: -1rem;

    }
    }

    .about-text-and-image{
        // border: 1px solid green;
        margin-top: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        .about-us-info{
            // border: 1px solid blue;
            width: 90%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            // display: flex;
            // justify-content: space-between;
            // justify-content: space-evenly;
            align-items: center;
            // justify-content: space-around;
            .image{
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    height: 30rem;
                    width: 44rem;
                    object-fit: cover;
                }
            }


            .text{
                // border: 2px solid red  ;
                padding: 2rem;

                p{
                    font-weight: $bold;
                    font-size: 1.6rem;
                    opacity: .9;
                    padding: 2rem 1rem;

                }

            }


        }
    }

    .mission-vision-values{
        // border: 2px solid red;
        margin-top: 10rem;
        display: flex;
        align-items: center;
        justify-content: center;


        .mission-vision-values-container{
            width: 95%;
            // border: 1px solid b;
            display: flex;
            // align-items: center;
            flex-direction: row-reverse;


            .mission-vision-container{
                // border: 2px solid;
                padding: 2rem;
                border-right: 1px solid $web-color;

                h2{
                    color: $web-color;
                    font-weight: $black;
                    font-size: 2.5rem;
                    text-transform: capitalize;
                    padding: 1rem 0;

                    img{
                        margin-right: .5rem;
                        width: 3rem;
                        margin-bottom: -.5rem;
                    }

                }

                p{
                    opacity: .9;
                    font-weight: $bold;
                    font-size: 1.6rem;
                    padding-bottom: 4rem;
                }
            }

            .values-container{
                padding: 2rem;
                border-left: 1px solid $web-color;
                border-right: 1px solid $web-color;
                // border: 2px solid red;

                h2{
                    color: $web-color;
                    font-weight: $black;
                    font-size: 2.5rem;
                    text-transform: capitalize;

                    img{
                        margin-bottom: -.5rem;
                        width: 3rem;
                        margin-right: .5rem;
                    } 
                }

                p{
                    font-weight: $bold;
                    font-size: 1.6rem;
                    opacity: .9;
                    padding: 2rem 0;
                }

                ul li{
                    font-weight: $bold;
                    font-size: 1.5rem;
                    opacity: .9;
                    padding: 1rem 0;
                    list-style: none;

                    &::before{
                        content: "\2023";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
                        color: $web-color; /* Change the color */
                        font-weight: bold; /* If you want it to be bold */
                        display: inline-block; /* Needed to add space between the bullet and the text */
                        width: 1rem; /* Also needed for space (tweak if needed) */
                        margin-left: -1em; /* Also needed for space (tweak if needed) */
                    }
                
                }
            }
        }

    }
}
}



//FOR LARGE SCREENS

@media screen  and (min-width:1500px) {
.about-section{
    .about-container{
        width: 75%;
    }
}
}
@media screen  and (min-width:1830px) {
.about-section{
    .about-container{
        width: 55%;
    }
}
}

//FOR SMALLER SCREENS
@media screen and (max-width:1000px) {

.about-section{
    .about-container{

        h1{
            font-size: 2.8rem;
        }
        .about-text-and-image{

            .about-us-info{
                width: 100%;
                display: flex;
                align-items: center;
                flex-wrap: wrap;

                .text{
                    padding: 2rem;

                    p{
                        font-size: 1.5rem;
                    }
                }

                .image{
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
        .mission-vision-values{
            .mission-vision-values-container{
                .mission-vision-container{
                    h2{
                        font-size: 2.4rem;
                    }

                    p{
                        font-size: 1.5rem;
                    }
                }

                .values-container{

                    h2{
                        font-size: 2.2rem;
                    }

                    P{
                        font-size: 1.4rem;
                    }
                }
            }
        }

    }
}

}

@media screen and (max-width:800px) {

.about-section{
    .about-container{

        h1{
            font-size: 2.8rem;
        }
        .about-text-and-image{
            border-bottom: 1px solid $web-color;

            .about-us-info{
                width: 100%;

                .text{
                    // border: 2px solid blue;

                    padding: 2rem;

                    p{
                        font-size: 1.5rem;
                    }
                }

            }
        }
        .mission-vision-values{
            // border: 1px solid red;
            margin: unset;

            .mission-vision-values-container{
                display: flex;
                flex-wrap: wrap;

                .mission-vision-container{
                    border: unset;
                    h2{
                        font-size: 2.4rem;
                    }

                    p{
                        font-size: 1.5rem;
                    }
                }

                .values-container{

                    h2{
                        font-size: 2.2rem;
                    }

                    P{
                        font-size: 1.4rem;
                    }
                }
            }
        }

    }
}

}


@media screen and (max-width:700px) {

.about-section{
    .about-container{
        h1{
            font-size: 2.4rem;
        }

        .about-text-and-image{

            .about-us-info{
                width: 100%;

                .text{
                    padding: 2rem;

                    p{
                        font-size: 1.4rem;
                    }
                }


            }
        }

        .mission-vision-values{
            .mission-vision-values-container{
                .mission-vision-container{
                    h2{
                        font-size: 2.2rem;
                    }

                    p{
                        font-size: 1.4rem;
                    }
                }

                .values-container{

                    h2{
                        font-size: 2.2rem;
                    }

                    P{
                        font-size: 1.4rem;
                    }
                }
            }
        }
    }
}

}


@media screen and (max-width:600px) {

.about-section{
    .about-container{
        // border: 2px solid;
        width: 100%;
        .about-text-and-image{

            .about-us-info{


                .text{
                    padding:2rem;
                    border-bottom: 1px solid $web-color;
                }


            }
        }

        .mission-vision-values{
            // margin-top: 5rem;
            .mission-vision-values-container{

                .mission-vision-container{
                    padding: 2rem;


                    h2{
                        font-size: 2.2rem;
                    }

                    p{
                        font-size: 1.4rem;
                    }
                }

                .values-container{
                    padding: 2rem;
                    border: unset;
                    border-top: 1px solid $web-color;
                    h2{
                        font-size: 2.2rem;
                    }

                    P{
                        font-size: 1.4rem;
                    }
                }
            }
        }
    }
}

}
</style>