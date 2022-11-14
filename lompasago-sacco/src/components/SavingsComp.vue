<template>
    <div>
        <section class="savings-section">

<div class="savings-section-container">

    <div class="savings-section-details">
        <div class="savings-section-image">
            <img src="../assets/savings.jpg" alt="">
        </div>

        <div class="savings-section-info">

            <div class="savings-section-info-container">
                <h1>We offer the following savings accounts:</h1>
                <ul>
                    <li>Junior savings account</li>
                    <li>Medical savings</li>
                    <li>Focus savings</li>
                    <li>Main savings</li>
                    <li>Holiday savings</li>
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


.savings-section{
    display: flex;
    align-items: center;
    justify-content: center;
    // height: 100vh;
    position: relative;
    top: 15vh;
    margin-bottom: 20vh;

    color: black;
    .savings-section-container{
        // border: 1px solid black;

        .savings-section-details{

            // display: flex;
            // flex-direction: column;
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin:  2rem 0;
            .savings-section-image{
                // width: 100vw;

                img{
                    width: 100%;
                    // height: 42rem;
                    height: 100%;
                    // height: auto;
                    object-fit: cover;
                }
            }

            .savings-section-info{
                // padding-left: 3rem;
                // border: 1px solid red;
                padding: 0 3rem;
                display: flex;
                // align-items: center;
                // justify-content: center;

                .savings-section-info-container{

                    h1{
  
                        font-size: 2.2rem;
                        font-weight: $bold;
                        padding-bottom: 1rem;
                    }
    
                    ul li{
    
                        list-style: none;
                        font-size: 1.6rem;
                        padding: 1rem 0;
                        color: black;
                        padding: .8rem 3rem;
                        font-weight: $bold;
                        opacity: .9;
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

@media screen and (min-width:1400px) {
    
    .savings-section{
        .savings-section-container{
            width: 70%;
            // border: 2px solid;
        }
    }
}

@media screen and (min-width:1400px) {
    
    .savings-section{
        .savings-section-container{
            width: 50%;
            // border: 2px solid;
        }
    }
}



//FOR SMALL SCREENS
@media screen and (max-width:600px) {
    .savings-section{
        .savings-section-container{
            .savings-section-details{
                grid-template-columns: 1fr;

                .savings-section-info{
                    .savings-section-info-container{
                        h1{
                            font-size: 2rem;
                        }

                        ul li{
                            font-size: 1.4rem;
                        }
                    }
                }
            }
        }
    }
}




</style>