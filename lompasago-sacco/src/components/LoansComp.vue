<template>
    <div>
        <section class="loans-section">
        <div class="loans-container">
          <h1>loans offered</h1>
          <div class="loan-information">

            <div class="loan-div">
              <p class="loan-p">School Fees Loans</p>
              <div class="hide-loan-info show-loan-info">
                <p class="loan-info">
                  This loan help our members to give the best education to their
                  children. The repayment period is 11 months.
                </p>
              </div>
            </div>

            <div class="loan-div">
              <p class="loan-p">Development Loans</p>
              <div class="hide-loan-info">
                <p class="loan-info">
                  We ensure your development plans don’t get distracted due to
                  lack of funds. Repayment period is 48 months.
                </p>
              </div>
            </div>

            <div class="loan-div">
              <p class="loan-p">Emergency Loans</p>
              <div class="hide-loan-info">
                <p class="loan-info">
                  Don’t Panic. We are here to assist. This facility enables our
                  members to handle any unexpected emergencies. the repayment
                  period is 12 months.
                </p>
              </div>
            </div>

            <div class="loan-div">
              <p class="loan-p">Salary Advance Loans</p>
              <div class="hide-loan-info">
                <p class="loan-info">
                  Get a salary advance processed in the shortest time possible
                  for unforeseen financial needs. Repayment period: 2 months.
                </p>
              </div>
            </div>

            <div class="loan-div">
              <p class="loan-p">School Fees Loans</p>
              <div class="hide-loan-info">
                <p class="loan-info">
                  This loan help our members to give the best education to their
                  children. The repayment period is 11 months.
                </p>
              </div>
            </div>

            <div class="loan-div">
              <p class="loan-p">Welfare Loans</p>
              <div class="hide-loan-info">
                <p class="loan-info">
                  This is meant for welfare proposes. The repayment period is 12
                  months.
                </p>
              </div>
            </div>

            <div class="loan-div">
              <p class="loan-p">Jiokoe Loans</p>
              <div class="hide-loan-info">
                <p class="loan-info">
                  The repayment period for this loan is 7 months.
                </p>
              </div>
            </div>
            <div class="loan-div">
              <p class="loan-p">Holiday Loans</p>
              <div class="hide-loan-info">
                <p class="loan-info">
                  Organizing a special trip or a holiday of a lifetime? We help
                  you cover the cost! The repayment period is 5 Months.
                </p>
              </div>
            </div>
            <div class="loan-div">
              <p class="loan-p">Jipange Loans</p>
              <div class="hide-loan-info">
                <p class="loan-info">
                  This loan as the name jipange suggest is meant to help members
                  build themselves. The repayment period is 18 months.
                </p>
              </div>
            </div>
            <div class="loan-div">
              <p class="loan-p">Refinancing/ Special Dev Loan</p>
              <div class="hide-loan-info">
                <p class="loan-info">
                  Refinancing a loan allows our members to replace their current
                  debt obligation or for special development purposes. The
                  repayment period is 60 months.
                </p>
              </div>
            </div>
            <div class="loan-div">
              <p class="loan-p">Instant Moblie Loans</p>
              <div class="hide-loan-info">
                <p class="loan-info">
                  This is instant mobile loan whose repayment period is 1 month.
                </p>
              </div>
            </div>
            <div class="loan-div">
              <p class="loan-p">Land Case Loans</p>
              <div class="hide-loan-info">
                <p class="loan-info">
                  This is meant for welfare proposes. The repayment period is 12
                  months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
    export default {

      mounted(){
        this.showLoanInfo()
      },

      methods:{
        showLoanInfo(){
          let loanDivs = document.querySelectorAll('.loan-div')


          //selecting the div that contains all divs with questions and answers
          let loanDivsContainer = document.querySelector('.loan-information')
          
          //div containing the answers that are hidden
          // let hideLoanInfo = document.querySelectorAll('.hide-loan-info')
          
          loanDivs.forEach(showDiv)
          
          function showDiv(item){
              item.addEventListener('click',()=>{

                  loanDivsContainer.querySelector('.show-loan-info').classList.remove('show-loan-info')
                  item.querySelector('.hide-loan-info').classList.add('show-loan-info')
                  // gsap.from(item,{opacity:0,duration:2})
              })
          }
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

.loans-section{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15vh;
  margin-bottom: 10rem;
  color: black;
  
  .loans-container{
      width: 70rem;
      margin: 0 2rem;

      h1{
        font-size: 2rem;
        font-weight: $bold;
        text-align: center;
        text-transform: capitalize;
        margin: 4rem 0;
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
        .loan-information{
          
          .loan-div{
            border: 1px solid rgba(128, 128, 128, 0.489);
            cursor: pointer;
            margin: 1rem 0;
            padding: 1rem ;
                .loan-p{
                    font-size: 1.4rem;
                    font-weight: bold;
                }

                .hide-loan-info{
                    display: none;
                }
                .show-loan-info{
                    display: block;
                }

                .loan-info{
                    font-size: 1.4rem;
                    font-weight: $medium;
                    padding-top: 1rem;
                }
            }
        }
    }
}


//FOR LARGE SCREENS

@media screen  and (min-width:1500px) {
    .loans-section{
        .loans-container{
            width: 80%;
        }
    }
}
@media screen  and (min-width:1830px) {
    .loans-section{
        .loans-container{
            width: 75%;
        }
    }
}


@media screen and (max-width:1000px) {
    .loans-section{
        .loans-container{
            width: 100%;
        }
    }
}


@media screen and (max-width:900px) {
    .loans-section{
        .loans-container{
            width: 100%;
            grid-template-columns: 1fr 1fr;
        }
    }
}

@media screen and (max-width:600px) {
    .loans-section{
        .loans-container{
            width: 100%;
            grid-template-columns: 1fr;

            .loans-parent{
                margin: 1rem;
            }
        }
    }
}
</style>