<template>
    <div>
        <section class="membership-section">
                <div class="membership-container">
                    <div class="form-container">
                        <h1>ready to join us?</h1>
                        <p> Kindly fill in the form below.</p>
                        <form action="" id="form">
        
                            <div class="info">
                                <label for="first-name">First name</label> <br>
                                <input data-cursor="-inverse" autocomplete="off" id="first-name" required type="text" > <br>  <br>
        
                                <label for="last-name">Last name</label> <br>
                                <input autocomplete="off" id="last-name" required type="text"> <br> <br>
        
                                <label for="phone-number">Phone Number</label> <br>
                                <input autocomplete="off" id="phone-number" type="text" required> <br> <br> <br>
        
                                <select name="" id="employment">
        
                                    <option value="">Employment type</option>
                                    <option value="">Permanent</option>
                                    <option value="">Contract</option>
                                    <option value="">Casual</option>
                                </select>  <br> <br> <br> <br>
        
        
                                <button type="submit" id="submit">submit </button>
        
                            </div>
        
                        </form>
                    </div>
        
                    <div class="requirements-container">
                        <div class="requirements">
                            <h1>requirements for new members joining the society</h1>
                            <ul>
                                <li>Letter signed by all the individuals wishing to join the society.</li>
                                <li>Employer signed check-o system.</li>
                                <li>Membership application form.</li>
                                <li>Passport size photo.</li>
                                <li>Copy of National I.D Card.</li>
                            </ul>
        
                            <h2>registration fee</h2>
                            <p>The new members joining the society pay the entrance fee amounting to Kshs 550/= which is deducted through the check-o­ in the first month of their membership.</p>
        
                            <h2>sinking fund</h2>
                            <p>To safeguard the loans and cater for funeral expenses in event of death, each member contributes Kshs 2,400 per year payable in monthly instalments.</p>
        
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


.membership-section{
    position: relative;
    top: 20vh;
    width: 100%;
    // margin: 2rem 0;
    // border: 3px solid red;
    margin-bottom: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    // border: 2px solid blue;
    color: black;
    .membership-container{
        width: 90%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        // border: 2px solid red;
        // display: flex;
        // flex-direction: column-reverse;
        // flex-wrap: wrap;
        // align-items: center;
        // justify-content: center;

        .form-container{
            padding: 3rem 0;
            // border: 1px solid blue;
            padding:  1rem;
            // border-right: 1px solid $web-color;


            h1{
                color: $web-color;
                font-weight: $black;
                font-size: 2.2rem;
                text-transform: capitalize;
                text-align: center;
            }

            p{
                font-weight: $bold;
                font-size: 1.6rem;
                opacity: .9;
                color: black;
                padding: 2rem 0;
                text-align: center;
            }
            #form{
                background-color: rgb(98, 98, 245);
                // background-color: $web-color;
                display: flex;
                background-color: $web-color;
                align-items: center;
                justify-content: center;
                padding: 2rem 0;
                width: 100%;
                
                border-radius: .3rem;
                // border: 2px solid rgb(152, 15, 15);


                .info{
                    // border: 2px solid white;
                    padding: 1rem 3rem;
                    width: 100%;
                    label{
                        font-size: 1.6rem;
                        opacity: .9;
                        color: white;
                        font-weight: $bold;
                    }
    
                    input{
                        text-transform: uppercase;
                        padding: 1rem;
                        font-weight: $bold;
                        border: none;
                        color: black;
                        width: 100%;
                        font-size: 1.5rem;
                        background-color: transparent;
                        // border-bottom: 1px solid black;
                        border-bottom: 1px solid white;

                        &:focus{
                            outline: none;
                            border: 1px solid rgb(255, 255, 255);
                        }
                    }
    
                    select{
                        background-color: white;
                        color: black;
                        font-weight: $bold;
                        padding:1rem;
                        opacity: .9;
                        border-radius: .2rem;
                    }
                    
                    option{
                        font-weight: $bold;
                        opacity: .3;
                    }
                    button{
                        background-color: $web-color;
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

        .requirements-container{
            // border: 4px solid green;
            .requirements{
                padding: 3rem;
                h1{
                    font-weight: $black;
                    text-transform: capitalize;

                    font-size: 2rem;
                    color: blue;
                    color: $web-color;
                }

                p{
                    padding: 1rem 0;
                    opacity: .9;
                    font-weight: $bold;
                    font-size: 1.6rem;
                    color: black;
                }

                h2{
                    padding-top: 2rem;
                    font-weight: $black;
                    text-transform: capitalize;
                    font-size: 2rem;
                    // color: black;
                    // color: blue;
                    color: $web-color;
                }

                ul li{
                        
                    list-style: none;
                    font-size: 1.6rem;
                    padding: 1rem 0;
                    color: black;
                    padding: .8rem 3rem;
                    font-weight: $bold;
                    opacity: .9;
  

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


//FOR LARGE SCREENS

@media screen  and (min-width:1300px) {
    .membership-section{
        .membership-container{
            width: 70%;
        }
    }
}
@media screen  and (min-width:1530px) {
    .membership-section{
        .membership-container{
            width: 60%;
        }
    }
}



//FOR SMALLER SCREENS


@media screen and (max-width:900px) {
    
    .membership-section{

        .membership-container{
            // border: 2px solid red;
        width: 80%;
        display: flex;
        flex-direction: column-reverse;
        flex-wrap: wrap;


            .form-container{
                border: unset;
                padding-top: 5rem;
                // padding: 9rem;
                border-top: 1px solid grey;


            }
        }
    }
}
@media screen and (max-width:500px) {
    
    .membership-section{

        .membership-container{
            // border: 2px solid red;
        width: 95%;

        .requirements-container{
            .requirements{

                p{
                    font-size: 1.4rem;

                }

                ul li{
                    font-size: 1.4rem;
                }
            }
        }


        }
    }
}

</style>