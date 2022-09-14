let token_pass = "" //line53

// Function to validate information
function validation(book_link){
        Swal.fire({
          //Text in the alert
          title: `<h3 style="justify-content: center;">Valida tu identidad digital</h3>
              <h6 style="font-size:16px;justify-content: center;">Para poder gestionar mejor la seguridad de nuestros materiales exclusivos, vamos a necesitar que valides tu identidad con el token:</h6>`,
          //Propieties
          focusConfirm: false,
          showClass: { popup: "animate__animated animate__fadeInDown" },
          hideClass: { popup: "animate__animated animate__fadeOutUp" },
          confirmButtonColor: "#E31C79",
          padding: "1.7rem",
          icon: 'warning',
          confirmButtonText: "Siguente",
          background: "linear-gradient(360deg, #00263E ,#003657 70% )",
          color: "#19c2ff",
          allowOutsideClick: false,
  
          //Create an html format
          html:
            `<br><label ><b>Token de seguridad</b></label><br><input type="password"  id="swal-input1" class="swal2-input" style="color:#b80f80;"><br>
            <br><label ><b>Vuelva a escribir el token de seguridad</b></label><br><input type="password"  id="swal-input2" class="swal2-input" style="color:#b80f80;"><br>`,
          //When you enter the values
          preConfirm: () => {
            return [
              (token_pass = document.getElementById("swal-input1").value),
              (token_pass2 = document.getElementById("swal-input2").value),

                
              Swal.fire({
                //Text in the alert
                html:
                  `<h2 style="justify-content: center;"> ¿Confirmar token? </h2>
                  `,
                //Propieties
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#E31C79",
                cancelButtonColor: "#00ccff",
                confirmButtonText: "Aceptar",
                cancelButtonText: "Salir",
                padding: "1.7rem",
                background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                color: "#19c2ff",
                allowOutsideClick: false,
  
                
                //Input decition
              }).then((result) => {
                //If the user choose 'aceptar'
                if (result.isConfirmed) {
                    if(token_pass != "alianza.pa" || token_pass != "alianza.pa" )   {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: '¡Token de seguridad invalido!',
                            padding: "1.7rem",
                            background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                            confirmButtonColor: "#E31C79",

                            color: "#19c2ff",
                            confirmButtonText: "Aceptar",

                          }).then((result) => {
                            //If the user choose 'aceptar'
                            if (result.isConfirmed) {
                                validation()
                                token_pass.reset()}})   
                    }
                    else {
 
                      let timerInterval
                      Swal.fire({
                        title: '¡Token de seguridad valido!',
                        text:'Redireccionando...',
                        padding: "1.7rem",
                        background: "linear-gradient(360deg, #00263E ,#003657 70% )",
                        icon: 'success',
                        timer: 1800,
                        color: "#19c2ff",

                        timerProgressBar: true,
                        didOpen: () => {
                          Swal.showLoading()
                          const b = Swal.getHtmlContainer().querySelector('b')
                          timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                          }, 100)
                        },
                        willClose: () => {
                          clearInterval(timerInterval)
                        }
                      }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                          return window.open(book_link);
                        }
                      })
                        
                    }
                  
                    
                }
  
              }),
            ];
          },
        });
}

//Function for click downmenu (links)
$('.list-product-nav .list-product-cat').click(function(e) {
  e.preventDefault();
  $('.list-product-nav .list-product-subnav').slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
  e.stopPropagation();

  var span = $(this).find('.glyphicon');
  span.toggleClass('glyphicon-menu-up glyphicon-menu-down');
});



/*------------------------------------------------------------- A1 - Links ------------------------------------------------------------------------------ */

/* Speaking */

/* A1 - Speaking: Geometric shapes */
const libro_a1_1 = document.getElementById('book_a1.1')
libro_a1_1.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1v6T6tDx64y-AvnOr-EygUi_7U4PLQnjc/edit#slide=id.p1","_blank")})
/* A1 - Geometric shapes - Student */
const libro_a1_2 = document.getElementById('book_a1.2')
libro_a1_2.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1DWQcPn-pdChLmGjiPFjA2Umuip2s8-B0/edit#slide=id.p1","_blank")})
/* A1 - Speaking: Dreams 'n goals in life */
const libro_a1_3 = document.getElementById('book_a1.3')
libro_a1_3.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1wfhiIxRTDGR7NtcmqVmKIHqmZyxAHCnL/edit#slide=id.p1","_blank")})
/* A1 - Dreams 'n goals in life - Student */
const libro_a1_4 = document.getElementById('book_a1.4')
libro_a1_4.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1wfhiIxRTDGR7NtcmqVmKIHqmZyxAHCnL/edit#slide=id.p1","_blank")})
/* A1 - Speaking: Feelings 'n emotions */
const libro_a1_5 = document.getElementById('book_a1.5')
libro_a1_5.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1s-56M3SIeuvwvCJAtS_D0ecJAOd2FZEO/edit#slide=id.p1","_blank")})
/* A1 - Speaking: Feelings 'n emotions */
const libro_a1_6 = document.getElementById('book_a1.6')
libro_a1_6.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1U2mDsVZ6sjPjvy-mrMhVPp8rI5Nw8-zu/edit#slide=id.p1","_blank")})
/* A1 - Speaking: Road signs */
const libro_a1_7 = document.getElementById('book_a1.7')
libro_a1_7.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1T31W3To5ux1oWxktX9BYW8XuubvzjyYK/edit#slide=id.p1","_blank")})
/* A1 - Road signs - Student */
const libro_a1_8 = document.getElementById('book_a1.8')
libro_a1_8.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1OpTuFGJAFev_1x2AjUNqkus3cKstGRJT/edit#slide=id.p1","_blank")})
/* A1 - Speaking:Animals:Day in the zoo */
const libro_a1_9 = document.getElementById('book_a1.9')
libro_a1_9.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/18FimELzm29nC0YRBKwofNuu2GDZgmubx/edit#slide=id.p1","_blank")})
/* A1 - Animals in the zoo - Student */
const libro_a1_10 = document.getElementById('book_a1.10')
libro_a1_10.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1wp_dCqQrGdKPLrLmDdNjVHxcdN9OeDLT/edit#slide=id.p1","_blank")})
/* A1 - Speaking:Colors in the paintshop */
const libro_a1_11 = document.getElementById('book_a1.11')
libro_a1_11.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1KoGuTKVCcgOBLLLP2Q3IF8wvvOdu8x0N/edit#slide=id.p1","_blank")})
/* A1 - Colors in the paintshop - Student */
const libro_a1_12 = document.getElementById('book_a1.12')
libro_a1_12.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1x0EoiPso6E3C0W3K5ZUJxaqiK9KpDLBv/edit#slide=id.p1","_blank")})
/* A1 - Speaking: Objects and housing */
const libro_a1_13 = document.getElementById('book_a1.13')
libro_a1_13.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1TmiakyFK_khpiopqj7YmZOUj_KqiLewd/edit#slide=id.p1","_blank")})
/* A1 - Objects and housing - Student */
const libro_a1_14 = document.getElementById('book_a1.14')
libro_a1_14.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1KMNgvSsqcUFf-ROY1z1ajdJowvOZUOrj/edit#slide=id.p1","_blank")})
/* A1 - Speaking: Places and city tour */
const libro_a1_15 = document.getElementById('book_a1.15')
libro_a1_15.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1uulbr673D0RTYfdtc78VhsbkilNGLiLw/edit#slide=id.p1","_blank")})
/* A1 - Places and city tour - Student */
const libro_a1_16 = document.getElementById('book_a1.16')
libro_a1_16.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1IWbkqB_uK21xc2fZsqLIEOPjgffB3gmM/edit#slide=id.p1","_blank")})
/* A1 - Speaking: Describing yourself */
const libro_a1_17 = document.getElementById('book_a1.17')
libro_a1_17.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1tq6Zm8G0X5HO8ewyG46m-4Vx_VcRS8YC/edit#slide=id.p1","_blank")})
/* A1 - Describing yourself - Student */
const libro_a1_18 = document.getElementById('book_a1.18')
libro_a1_18.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1DIt2od8VGlX3HbBzU1u5YopBpMv2M3bB/edit#slide=id.p1","_blank")})
/* A1 - Speaking: Introducing myself */
const libro_a1_19 = document.getElementById('book_a1.19')
libro_a1_19.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1OuX9Kn0KK7EUh7JFMlDv_wpyd43AaNqc/edit#slide=id.p1","_blank")})
/* A1 - Introducing myself - Student */
const libro_a1_20 = document.getElementById('book_a1.20')
libro_a1_20.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1Wc6FlYE4vHHveYpCMtjn01igy_PYcYax/edit#slide=id.p1","_blank")})
/* A1 - Speaking: Numbers and seasons */
const libro_a1_21 = document.getElementById('book_a1.21')
libro_a1_21.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1DBPYs6-0xJArrj9e-TZEs-v0SoLsj9y3/edit#slide=id.p1","_blank")})
/* A1 - Numbers and seasons - Student */
const libro_a1_22 = document.getElementById('book_a1.22')
libro_a1_22.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1mJaViIUXDTm1qCzLfgLLApnD2S8XWs3o/edit#slide=id.p1","_blank")})
/* A1 - Speaking: The Alphabet */
const libro_a1_23 = document.getElementById('book_a1.23')
libro_a1_23.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1cWD0EgxKNIvwDMs_tQUU7p3hL9OUBSZP/edit#slide=id.p1","_blank")})
/* A1 - The Alphabet - Student */
const libro_a1_24 = document.getElementById('book_a1.24')
libro_a1_24.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1T3-cgQiV0bitwK8R1yNvKCXzv8KGgotq/edit#slide=id.p1","_blank")})

/* Grammar */

/* A1 -Grammar:Adj. demonstratives */
const libro_a1_25 = document.getElementById('book_a1.25')
libro_a1_25.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1YyETwkvmESlDOEqNJJrU6DhPsrOyuhbn/edit#slide=id.p1","_blank")})
/* A1 - Adj. common demonstratives */
const libro_a1_26 = document.getElementById('book_a1.26')
libro_a1_26.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1w3IrFEMQQoegcQvhP2f0ZyDNjNqePF4A/edit#slide=id.p1","_blank")})
/* A1 - Grammar:Articles 'n p.pronouns */
const libro_a1_27 = document.getElementById('book_a1.27')
libro_a1_27.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1WLZAghN29oCFztV9v7jxJqCF4JK_vc9n/edit#slide=id.p1","_blank")})
/* A1 - Articles and personal pronouns */
const libro_a1_28 = document.getElementById('book_a1.28')
libro_a1_28.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1LRtFn0Tl5Pynjw4rGzu8_StLmJT1lt6q/edit#slide=id.p1","_blank")})
/* A1 - Grammar: Gerunds and infinitive */
const libro_a1_29 = document.getElementById('book_a1.29')
libro_a1_29.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ybqcIHIosZEcuzEQReChuloeXw8bM4wd/edit#slide=id.p1","_blank")})
/* A1 - Gerunds and infinitive - Student */
const libro_a1_30 = document.getElementById('book_a1.30')
libro_a1_30.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/12biUfheI0MTzxsziZ4OJXU062etZFqoL/edit#slide=id.p1","_blank")})
/* A1 - Grammar:How much | How many */
const libro_a1_31 = document.getElementById('book_a1.31')
libro_a1_31.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1OFRcWUiq_XAoKLsXhkYITRPf8VKdqmCS/edit#slide=id.p1","_blank")})
/* A1 - How much, how many and very */
const libro_a1_32 = document.getElementById('book_a1.32')
libro_a1_32.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1OzlFW3ylHmO_wEFOpZWrotrXKdSfI5Ma/edit#slide=id.p1","_blank")})
/* A1 - Grammar:Imperatives (+/-) */
const libro_a1_33 = document.getElementById('book_a1.33')
libro_a1_33.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/13wa3Jb9v-mw5O5_DsyU6DyCrDd_9D1E3/edit#slide=id.p1","_blank")})
/* A1 - Grammar:Imperatives (+/-) - Student */
const libro_a1_34 = document.getElementById('book_a1.34')
libro_a1_34.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1IZOjJn6gMJYmUP30pW9Wwe7d-FlHMRGT/edit#slide=id.p1","_blank")})
/* A1 - Grammar:Possessive adj. and ‘s */
const libro_a1_35 = document.getElementById('book_a1.35')
libro_a1_35.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1wHfIh6kIhQbXnBdgX5uiKCN8kADd55Qk/edit#slide=id.p1","_blank")})
/* A1 - Possessive adj. and ‘s - Student */
const libro_a1_36 = document.getElementById('book_a1.36')
libro_a1_36.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1q-S5hH3_deMuzEi1-Pb8twfC1be_XaSn/edit#slide=id.p1","_blank")})
/* A1 - Grammar: Present continuous */
const libro_a1_37 = document.getElementById('book_a1.37')
libro_a1_37.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1Lro4DexgaL9Yref9gtdLZM-M6GYxFFM7/edit#slide=id.p1","_blank")})
/* A1 - Present continuous - Student */
const libro_a1_38 = document.getElementById('book_a1.38')
libro_a1_38.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1TIgOd5-jHRKaxXEa-o4P3LctBA9SFjrf/edit#slide=id.p1","_blank")})
/* A1 - Grammar: Present simple */
const libro_a1_39 = document.getElementById('book_a1.39')
libro_a1_39.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1TCZhkzjK6oQ7mQnDbpN8p_LU5YLwVsT5/edit#slide=id.p1","_blank")})
/* A1 - Present simple - Student */
const libro_a1_40 = document.getElementById('book_a1.40')
libro_a1_40.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1kMTv0hpVAVqlYqYFNcSBfQOCuozW1fiH/edit#slide=id.p1","_blank")})
/* A1 - Grammar: Reflexive pronouns */
const libro_a1_41 = document.getElementById('book_a1.41')
libro_a1_41.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/10yGaPWszdslwAbOAFYoHw4CL9u-YeTWe/edit#slide=id.p1","_blank")})
/* A1 - Reflexive pronouns - Student */
const libro_a1_42 = document.getElementById('book_a1.42')
libro_a1_42.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1dM6m3gpExCOKAvZIihiCXi_3lpg9-QMf/edit#slide=id.p1","_blank")})
/* A1 - Grammar:Counts. 'n Uncounts. */
const libro_a1_43 = document.getElementById('book_a1.43')
libro_a1_43.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1SODE4uV-kzfA454t268YyxyF0s3Bt9bU/edit#slide=id.p1","_blank")})
/* A1 - Countables and Uncountables - Student */
const libro_a1_44 = document.getElementById('book_a1.44')
libro_a1_44.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1P_szrXSJTq8WDwswspophuFPbjB7lpcc/edit#slide=id.p1","_blank")})
/* A1 - Grammar: Verb to be */
const libro_a1_45 = document.getElementById('book_a1.45')
libro_a1_45.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1iX4dXamcc_7yc-cLZka4Sr6EgIf4LHWj/edit#slide=id.p1","_blank")})
/* A1 - Verb to be - Student */
const libro_a1_46 = document.getElementById('book_a1.46')
libro_a1_46.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ZBsQlS1ed2R_4KtYN0o3JtkzwOlzsh1b/edit#slide=id.p1","_blank")})
/* A1 - Grammar: Wh questions */
const libro_a1_47 = document.getElementById('book_a1.47')
libro_a1_47.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1YUfB_v5jGVQtXNmooroJuQ3_a3qO3ycG/edit#slide=id.p1","_blank")})
/* A1 - Wh questions - Student */
const libro_a1_48 = document.getElementById('book_a1.48')
libro_a1_48.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1aCzJOeBGYB71J8CjApmx_3OBejaKbURz/edit#slide=id.p1","_blank")})

/*------------------------------------------------------------------------------------------------------------------------------------------------------- */

/*------------------------------------------------------------- A2 - Links ------------------------------------------------------------------------------ */

/* Speaking */

/* A2 - Speaking: Buying clothes online */
const libro_a2_1 = document.getElementById('book_a2.1')
libro_a2_1.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1a4KvrK7cwX5HshD7pP4T0HaXFPCwqSnS/edit#slide=id.p1","_blank")})
/* A2 - Buying clothes online - Student */
const libro_a2_2 = document.getElementById('book_a2.2')
libro_a2_2.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1SgmJin3kS19bXPRE7QI6rt1eSVNFDKFx/edit#slide=id.p1","_blank")})
/* A2 - Speaking:Fashion week event */
const libro_a2_3 = document.getElementById('book_a2.3')
libro_a2_3.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1SK0m1YmZnRfE5xDHA0PdZLsBhCjlwTi5/edit#slide=id.p1","_blank")})
/* A2 - Fashion week event - Student */
const libro_a2_4 = document.getElementById('book_a2.4')
libro_a2_4.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1_KPZab91xUow6hJVWaFurwzZcLwii9R6/edit#slide=id.p1","_blank")})
/* A2 - Speaking: How to buy in a store */
const libro_a2_5 = document.getElementById('book_a2.5')
libro_a2_5.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1x5GceEWXPbVRZAehFZ3EuJt5jCHiAZBq/edit#slide=id.p1","_blank")})
/* A2 - How to buy in a store - Student */
const libro_a2_6 = document.getElementById('book_a2.6')
libro_a2_6.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1Cc37-ziMVl3yaDmYMZcNjGTBRcrhOvFr/edit#slide=id.p1","_blank")})
/* A2 - Speaking: My wardrobe */
const libro_a2_7 = document.getElementById('book_a2.7')
libro_a2_7.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1cJPOp-kjBt0HqPPX0B_Q8WW0bWJMyoVe/edit#slide=id.p1","_blank")})
/* A2 - My wardrobe - Student */
const libro_a2_8 = document.getElementById('book_a2.8')
libro_a2_8.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/12EGulbhhbJiqTsXtJqyIhZu8y3vwoXwd/edit#slide=id.p1","_blank")})
/* A2 - Speaking: Go to the supermarket */
const libro_a2_9 = document.getElementById('book_a2.9')
libro_a2_9.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1AdMrwOvAsWmGgVTk5JWMvQF3LC6XAGcD/edit#slide=id.p1","_blank")})
/* A2 - Go to the supermarket - Student */
const libro_a2_10 = document.getElementById('book_a2.10')
libro_a2_10.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1u0lML4W6YSIK0NgwVMFMj6WlarHJQVdN/edit#slide=id.p1","_blank")})
/* A2 - Speaking: Healthy diets */
const libro_a2_11 = document.getElementById('book_a2.11')
libro_a2_11.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1cJWGZSUE-0gyfNy76otr71YsYKntzt6z/edit#slide=id.p1","_blank")})
/* A2 - Healthy diets - Student */
const libro_a2_12 = document.getElementById('book_a2.12')
libro_a2_12.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1nM5nvzYALGM5xy7N_3sUyy0P0q9KZCwg/edit#slide=id.p1","_blank")})
/* A2 - Speaking: Orders in a restaurant */
const libro_a2_13 = document.getElementById('book_a2.13')
libro_a2_13.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1lVXbQK1nhaL2HiwvYvI7rXhYt6DZTQe1/edit#slide=id.p1","_blank")})
/* A2 - Orders in a restaurant - Student */
const libro_a2_14 = document.getElementById('book_a2.14')
libro_a2_14.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1jwhO1gRtLVcGuXbq-fWmOpzeAWVVhZvi/edit#slide=id.p1","_blank")})
/* A2 - Speaking: Understand recipes */
const libro_a2_15 = document.getElementById('book_a2.15')
libro_a2_15.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1a2oZfefsBmRnbTKfRzBctzi1qwmfFb2Z/edit#slide=id.p1","_blank")})
/* A2 - Understand recipes - Student */
const libro_a2_16 = document.getElementById('book_a2.16')
libro_a2_16.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1eMMJ83CudPY_qXps2CcjwNG_U1kNtJQ3/edit#slide=id.p1","_blank")})
/* A2 - Speaking: Family Sunday meeting */
const libro_a2_17 = document.getElementById('book_a2.17')
libro_a2_17.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1Dmdx6Ck3JuGfTAq08bjos9dtwGYEuZFJ/edit#slide=id.p1","_blank")})
/* A2 - Family Sunday meeting - Student */
const libro_a2_18 = document.getElementById('book_a2.18')
libro_a2_18.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1MjMQ0TCKwH1KW73qIG0RA19cd111Ry0n/edit#slide=id.p1","_blank")})
/* A2 - Speaking: Geetings */
const libro_a2_19 = document.getElementById('book_a2.19')
libro_a2_19.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1z2WlYtAAIwhOZVAvXpc0mCOeH4_U3XRQ/edit#slide=id.p1","_blank")})
/* A2 - Geetings - Student */
const libro_a2_20 = document.getElementById('book_a2.20')
libro_a2_20.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1j7lrtFld8UymCJ7l11E7WC8FV_Fzinio/edit#slide=id.p1","_blank")})
/* A2 - Speaking: Going for a beer */
const libro_a2_21 = document.getElementById('book_a2.21')
libro_a2_21.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ScN_gMUG52N7ST7acE5w0i4JI9liUA64/edit#slide=id.p1","_blank")})
/* A2 - Going for a beer - Student */
const libro_a2_22 = document.getElementById('book_a2.22')
libro_a2_22.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1Mv7w4Xg7GCiJdSghTk7-ygfqNaQud8Ls/edit#slide=id.p1","_blank")})
/* A2 - Speaking: Countries and cultures */
const libro_a2_23 = document.getElementById('book_a2.23')
libro_a2_23.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1PrJdF-3ASakWfuiVgkPzUni-ayyzbVPv/edit#slide=id.p1","_blank")})
/* A2 - Countries and cultures - Student */
const libro_a2_24 = document.getElementById('book_a2.24')
libro_a2_24.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1Im725rVUdMx8vknnCmOsyNph6CaCDVoL/edit#slide=id.p1","_blank")})

/* Grammar */

/* A2 - Grammar: Adv. of time and place */
const libro_a2_25 = document.getElementById('book_a2.25')
libro_a2_25.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1hIWiT5bR81UTBFXKRqDE2meibMdDk47Q/edit#slide=id.p1","_blank")})
/* A2 - Adv. of time and place - Student */
const libro_a2_26 = document.getElementById('book_a2.26')
libro_a2_26.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1wmyByaAVZZGcXdjG3fr4aCb9uXhXw3_9/edit#slide=id.p1","_blank")})
/* A2 - Grammar: Comparations */
const libro_a2_27 = document.getElementById('book_a2.27')
libro_a2_27.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1Yf_zkJTXIEUW0kIUNyF-f8BSahS1KMAB/edit#slide=id.p1","_blank")})
/* A2 - Comparations - Student */
const libro_a2_28 = document.getElementById('book_a2.28')
libro_a2_28.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/16K6UcTHz44peoRHp20J5XagHlslCHDDm/edit#slide=id.p1","_blank")})
/* A2 - Grammar: Intensifiers (Basic) */
const libro_a2_29 = document.getElementById('book_a2.29')
libro_a2_29.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/15OTi9CRbHHb5qSiEL6c4VOv6wV7iImDj/edit#slide=id.p1","_blank")})
/* A2 - Intensifiers (Basic) - Student */
const libro_a2_30 = document.getElementById('book_a2.30')
libro_a2_30.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/11AIMHeFyJNR-4bfGUwSWNj2DF36T-2E0/edit#slide=id.p1","_blank")})
/* A2 - Grammar: Using basic modals */
const libro_a2_31 = document.getElementById('book_a2.31')
libro_a2_31.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1HJhACKLMFV2wkmCLVh7EyMOLteEf0hao/edit#slide=id.p1","_blank")})
/* A2 - Using basic modals - Student */
const libro_a2_32 = document.getElementById('book_a2.32')
libro_a2_32.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1clw_60e0M4zGcjUh0IibiN_a9zF5m5xH/edit#slide=id.p1","_blank")})
/* A2 - Grammar: Other prepositions */
const libro_a2_33 = document.getElementById('book_a2.33')
libro_a2_33.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1F57y-DQkM_mjOe-LPeCeHWbneEr4EH4S/edit#slide=id.p1","_blank")})
/* A2 - Other prepositions - Student */
const libro_a2_34 = document.getElementById('book_a2.34')
libro_a2_34.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1sky0g7R7N2ruV9r_VoQ1IeYOE71HaZri/edit#slide=id.p1","_blank")})
/* A2 - Grammar:  Past continuous */
const libro_a2_35 = document.getElementById('book_a2.35')
libro_a2_35.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1sSua8CiTcLpzUZ4dscfabS_WFqF4LxPv/edit#slide=id.p1","_blank")})
/* A2 - Past continuous - Student */
const libro_a2_36 = document.getElementById('book_a2.36')
libro_a2_36.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/15nwgjMU8Iy3TDGYRzl5LoallRUpp-X4j/edit#slide=id.p1","_blank")})
/* A2 - Grammar: Past Simple */
const libro_a2_37 = document.getElementById('book_a2.37')
libro_a2_37.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/16eaDi-HOORv5HQckTmynfEarOPx5NLXP/edit#slide=id.p1","_blank")})
/* A2 - Past Simple - Student */
const libro_a2_38 = document.getElementById('book_a2.38')
libro_a2_38.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/15BV9297LreBahoegRE1bMQ4bUPjRrifs/edit#slide=id.p1","_blank")})
/* A2 - Grammar: Past Simple(To be) */
const libro_a2_39 = document.getElementById('book_a2.39')
libro_a2_39.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1vrgdoVQ0eNUXtKcx3SQfzLygKBkQnoel/edit#slide=id.p1","_blank")})
/* A2 - Past Simple(To be) - Student */
const libro_a2_40 = document.getElementById('book_a2.40')
libro_a2_40.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1x7EMqRDkOFy7w1et-yfr0d5-fxYvzs2w/edit#slide=id.p1","_blank")})
/* A2 - Grammar: Prepositions of manner */
const libro_a2_41 = document.getElementById('book_a2.41')
libro_a2_41.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1rXkjfbypoKTZb0otl3lBKt6FqXTqc30J/edit#slide=id.p1","_blank")})
/* A2 - Prepositions of manner - Student */
const libro_a2_42 = document.getElementById('book_a2.42')
libro_a2_42.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1S3jfCrno8dOvUsa_BawieI-vqJdrLuhp/edit#slide=id.p1","_blank")})
/* A2 - Grammar:  Prepositions of place */
const libro_a2_43 = document.getElementById('book_a2.43')
libro_a2_43.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1VLMiulz2CzyqBxJ9vRmQOuHEHy88dZXG/edit#slide=id.p1","_blank")})
/* A2 - Prepositions of place - Student */
const libro_a2_44 = document.getElementById('book_a2.44')
libro_a2_44.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1wjiKHZQBlw9KL8Om4uW7oAohX0QigSVt/edit#slide=id.p1","_blank")})
/* A2 - Grammar: Prepositions of time */
const libro_a2_45 = document.getElementById('book_a2.45')
libro_a2_45.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1mJzgTEMABpvsoIvl6Mk4mZ5nx2FVFl5p/edit#slide=id.p1","_blank")})
/* A2 - Prepositions of time - Student */
const libro_a2_46 = document.getElementById('book_a2.46')
libro_a2_46.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1wdE4wEvFqO93oT4O8HR2YNSSSAl8eQMn/edit#slide=id.p1","_blank")})
/* A2 - Grammar: Past continuous vs. past simple */
const libro_a2_47 = document.getElementById('book_a2.47')
libro_a2_47.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1IRfqsLW7Wcx7L38Ov3d3kJtxNwGLSbHz/edit#slide=id.p1","_blank")})
/* A2 - Past continuous vs. past simple - Student */
const libro_a2_48 = document.getElementById('book_a2.48')
libro_a2_48.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1fvAzHdSdmWF_5YBRiBHMx6XctCF70XSW/edit#slide=id.p1","_blank")})

/*------------------------------------------------------------------------------------------------------------------------------------------------------- */

/*------------------------------------------------------------- B1 - Links ------------------------------------------------------------------------------ */

/* Speaking */

/* B1 - Speaking: Appointment with the doctor */
const libro_b1_1 = document.getElementById('book_b1.1')
libro_b1_1.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/10B371IZdQMkOF1JZFd2pRp4AwZ88kGPY/edit#slide=id.p1","_blank")})
/* B1 - Appointment with the doctor - Student */
const libro_b1_2 = document.getElementById('book_b1.2')
libro_b1_2.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1o8h6AEjQxZ01zUitZxA7JCcfEQGGN5VM/edit#slide=id.p1","_blank")})
/* B1 - Speaking: Bones osteopathy */
const libro_b1_3 = document.getElementById('book_b1.3')
libro_b1_3.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1aMdY4FrkwwlL7PP8fkpsg6x3TI8K6-7x/edit#slide=id.p1","_blank")})
/* B1 - Bones osteopathy - Student */
const libro_b1_4 = document.getElementById('book_b1.4')
libro_b1_4.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1e6ZAfXptpqNPdvVJQnUN9S0pUySBMUBy/edit#slide=id.p1","_blank")})
/* B1 - Speaking: Know the Organs */
const libro_b1_5 = document.getElementById('book_b1.5')
libro_b1_5.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ydMMDSbjcpV0f8dHWx0Vey9hu9nIkRGT/edit#slide=id.p1","_blank")})
/* B1 - Know the Organs - Student */
const libro_b1_6 = document.getElementById('book_b1.6')
libro_b1_6.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1cgqQKCv__XQPRiTRB8s1CyaBFKiifYks/edit#slide=id.p1","_blank")})
/* B1 - Speaking: Myself in the mirror */
const libro_b1_7 = document.getElementById('book_b1.7')
libro_b1_7.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1jqQAw74jo23S2HTG7DfKjErmskULNW4W/edit#slide=id.p1","_blank")})
/* B1 - Myself in the mirror - Student */
const libro_b1_8 = document.getElementById('book_b1.8')
libro_b1_8.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1Eq40gqQidsHEeEK2IhaT7eV1c4bmTlQi/edit#slide=id.p1","_blank")})
/* B1 - Speaking: Choosing my career */
const libro_b1_9 = document.getElementById('book_b1.9')
libro_b1_9.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1C12HGXOk2IO9b7hzRyJXeYAoaUVdCBem/edit#slide=id.p1","_blank")})
/* B1 - Choosing my career - Student */
const libro_b1_10 = document.getElementById('book_b1.10')
libro_b1_10.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/17D3E1a5qCuTpjsW_Aq78OYYr5BTXgCbc/edit#slide=id.p1","_blank")})
/* B1 - Speaking: First day at college */
const libro_b1_11 = document.getElementById('book_b1.11')
libro_b1_11.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1MUInohBlQt-W_ZaIDBV0tCuwCX_TXKpF/edit#slide=id.p1","_blank")})
/* B1 - First day at college - Student */
const libro_b1_12 = document.getElementById('book_b1.12')
libro_b1_12.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1TcmlT8OnFmA_q5x-Es8wIEeWFmppCXzI/edit#slide=id.p1","_blank")})
/* B1 - Speaking: First day at work */
const libro_b1_13 = document.getElementById('book_b1.13')
libro_b1_13.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1urobcwvwdaaNeOB66eoJTVdEVEO63rx_/edit#slide=id.p1","_blank")})
/* B1 - First day at work - Student */
const libro_b1_14 = document.getElementById('book_b1.14')
libro_b1_14.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1btO6ENwuVzjIuhGQwrgZeSVcIh8z9DlZ/edit#slide=id.p1","_blank")})
/* B1 - Speaking: Job interview */
const libro_b1_15 = document.getElementById('book_b1.15')
libro_b1_15.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/14Dqa7hIj02d5JyhEZKp0Aw-7cb97bK6i/edit#slide=id.p1","_blank")})
/* B1 - Job interview - Student */
const libro_b1_16 = document.getElementById('book_b1.16')
libro_b1_16.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1nMs84dQki7xNt-5peG9Qvu59-7qHps9L/edit#slide=id.p1","_blank")})
/* B1 - Speaking: A day at the airport */
const libro_b1_17 = document.getElementById('book_b1.17')
libro_b1_17.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1sjl1U7DN1rh64IMw6aR4aQJhtmJCeuuN/edit#slide=id.p1","_blank")})
/* B1 - A day at the airport - Student */
const libro_b1_18 = document.getElementById('book_b1.18')
libro_b1_18.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ad5f7PDyRn_bKiNH9Q9KHlP2Q08zEq8o/edit#slide=id.p1","_blank")})
/* B1 - Speaking: Asking for directions */
const libro_b1_19 = document.getElementById('book_b1.19')
libro_b1_19.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1_MUtZyxVNgIRIGV3iFZGRFS46hqlRO7C/edit#slide=id.p1","_blank")})
/* B1 - Asking for directions - Student */
const libro_b1_20 = document.getElementById('book_b1.20')
libro_b1_20.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1RKbljNV6YhqDGGf8h5MZnLQDls1fTmCo/edit#slide=id.p1","_blank")})
/* B1 - Speaking: The hotel adventure */
const libro_b1_21 = document.getElementById('book_b1.21')
libro_b1_21.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1cAkhKOTkm8HPMmcYq0Zq8l_QCTMv8MEF/edit#slide=id.p1","_blank")})
/* B1 - The hotel adventure - Student */
const libro_b1_22 = document.getElementById('book_b1.22')
libro_b1_22.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1EImLH4KC3OV0O2DDn1Qmg8DBdTcrkXHN/edit#slide=id.p1","_blank")})
/* B1 - Speaking: Sightseeing in NYC */
const libro_b1_23 = document.getElementById('book_b1.23')
libro_b1_23.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1rPtOF9ETV32o_PTo8BGd7g8kp0WFQBKQ/edit#slide=id.p1","_blank")})
/* B1 - Sightseeing in NYC - Student */
const libro_b1_24 = document.getElementById('book_b1.24')
libro_b1_24.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1tjNESMx0XNqkxTs0MgKQFcH6316eEGXj/edit#slide=id.p1","_blank")})

/* Grammar */

/* B1 - Grammar: Adj. Date and time */
const libro_b1_25 = document.getElementById('book_b1.25')
libro_b1_25.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1-neJRUM6GdtZgazL2kMa5ueLrWsWRfJA/edit#slide=id.p1","_blank")})
/* B1 - Adj. Date and time - Student */
const libro_b1_26 = document.getElementById('book_b1.26')
libro_b1_26.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1w6r6bANQ0uACFh9erB0VZ4XzDWodOmSM/edit#slide=id.p1","_blank")})
/* B1 - Grammar: Adv. of frequency */
const libro_b1_27 = document.getElementById('book_b1.27')
libro_b1_27.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1w2fhkCo7jp0ydMOGYH6P-PRE5hrHEJeD/edit#slide=id.p1","_blank")})
/* B1 - Adv. of frequency - Student */
const libro_b1_28 = document.getElementById('book_b1.28')
libro_b1_28.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ddDbUaw-3LtEjow3V8OzaflgfWLL3SYt/edit#slide=id.p1","_blank")})
/* B1 - Grammar: Countable/Uncountables */
const libro_b1_29 = document.getElementById('book_b1.29')
libro_b1_29.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1800spHePiemdk5JnvqMFszKbFE4J6yAP/edit#slide=id.p1","_blank")})
/* B1 - Countable/Uncountables - Student */
const libro_b1_30 = document.getElementById('book_b1.30')
libro_b1_30.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1hxWqz3pkXS2ZFR0VfG5C-S32lCO89lB8/edit#slide=id.p1","_blank")})
/* B1 - Grammar: Date and time 2 */
const libro_b1_31 = document.getElementById('book_b1.31')
libro_b1_31.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ozSrpTb59miT5WXi4DgBSrpAbSHTBD-b/edit#slide=id.p1","_blank")})
/* B1 - Date and time 2 - Student */
const libro_b1_32 = document.getElementById('book_b1.32')
libro_b1_32.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/16xYW1MyZffmwxrdMx34CVNu6c7WvO56I/edit#slide=id.p1","_blank")})
/* B1 - Grammar: Adj. Date and time */
const libro_b1_33 = document.getElementById('book_b1.33')
libro_b1_33.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ciYHDYZPigLP8Q4Xqglfjhcnx_hhWr8g/edit#slide=id.p7","_blank")})
/* B1 - Grammar: Future Time */
const libro_b1_34 = document.getElementById('book_b1.34')
libro_b1_34.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/157vqCQDs0uyhwBjCgXe1k0Gyt8Qj7NJa/edit#slide=id.p1","_blank")})
/* B1 - Future Time - Student */
const libro_b1_35 = document.getElementById('book_b1.35')
libro_b1_35.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1GgZKu8ILo6xL2LME92f7h_Wt4S-mt2_0/edit#slide=id.p1","_blank")})
/* B1 -  Grammar: Imperatives */
const libro_b1_36 = document.getElementById('book_b1.36')
libro_b1_36.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/16GgZ1mgfyBVwMg8VUEe8aY9QK6TB3_7X/edit#slide=id.p1","_blank")})
/* B1 - Imperatives  - Student */
const libro_b1_37 = document.getElementById('book_b1.37')
libro_b1_37.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1Fblu0CA2AgRDGbTObkHuaS4ujj5aV17f/edit#slide=id.p1","_blank")})
/* B1 - Grammar: Review of some topics  */
const libro_b1_38 = document.getElementById('book_b1.38')
libro_b1_38.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1P1dCNvMIf8Y24O4FiRcjbP2pOQD49ctc/edit#slide=id.p1","_blank")})
/* B1 -  Review of some topics - Student */
const libro_b1_39 = document.getElementById('book_b1.39')
libro_b1_39.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1X69PXmhIzWukA8iylj9lnmiEFMEuy0LT/edit#slide=id.p1","_blank")})
/* B1 - Grammar: Date and time 2  */
const libro_b1_40 = document.getElementById('book_b1.40')
libro_b1_40.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1iKD2lRiYEiLnknPVB_-V_JmUoGjHwO9Q/edit#slide=id.p1","_blank")})
/* B1 - Date and time 2 - Student */
const libro_b1_41 = document.getElementById('book_b1.41')
libro_b1_41.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1Ht67vtlGtTDXXy0jgE2FG-bP38Zaw_4D/edit#slide=id.p1","_blank")})
/* B1 - Grammar: Review time tenses */
const libro_b1_42 = document.getElementById('book_b1.42')
libro_b1_42.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1cz8_lGxffElNHcZnnWuLw1aYvCCTQ7BZ/edit#slide=id.p1","_blank")})
/* B1 - Review time tenses - Student */
const libro_b1_43 = document.getElementById('book_b1.43')
libro_b1_43.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ApiQUXqLElOVDbi94cqiUFxtQ5g-gJ88/edit#slide=id.p1","_blank")})
/* B1 - Grammar: Correct use of than */
const libro_b1_44 = document.getElementById('book_b1.44')
libro_b1_44.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1OPDT9_CS227Iz1G7p50zSUoUqXp3M-2H/edit#slide=id.p1","_blank")})
/* B1 - Correct use of than - Student */
const libro_b1_45 = document.getElementById('book_b1.45')
libro_b1_45.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1J_e1MnRh3B7_ctHxANN-_VubZhNt4yQx/edit#slide=id.p1","_blank")})

/*------------------------------------------------------------------------------------------------------------------------------------------------------- */

/*------------------------------------------------------------- B2 - Links ------------------------------------------------------------------------------ */

/* Speaking */

/* B2 - Presentation: Into the Sports */
const libro_b2_1 = document.getElementById('book_b2.1')
libro_b2_1.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1fT8knMpE5QNQ4qbNEX7ViZwbgnZw1Hor/edit#slide=id.p1","_blank")})
/* B2 - Into the Sports - Student */
const libro_b2_2 = document.getElementById('book_b2.2')
libro_b2_2.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1d515Bl4__DJcXTfn7WFp7Gh7VCWF-Qtr/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Games childhood */
const libro_b2_3 = document.getElementById('book_b2.3')
libro_b2_3.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1dpZ0V30ttYedX04dPPb8oU6SVtYMByCO/edit#slide=id.p1","_blank")})
/* B2 - Games childhood - Student */
const libro_b2_4 = document.getElementById('book_b2.4')
libro_b2_4.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ItKpsDIiBmK52jhaDQwUI2F5CaGSf4OF/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Physical skills */
const libro_b2_5 = document.getElementById('book_b2.5')
libro_b2_5.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1-0WvSAmeuPFHPjpwfNYkFXnaGC54zcB1/edit#slide=id.p1","_blank")})
/* B2 - Physical skills - Student */
const libro_b2_6 = document.getElementById('book_b2.6')
libro_b2_6.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/15KfNbsqpB1nQ9Q-avVuJlAuvFKHzPkuM/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Worldwide olympics */
const libro_b2_7 = document.getElementById('book_b2.7')
libro_b2_7.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1XbzdBPrNM-5Ob6JdQqHOveVSrHl76-Nm/edit#slide=id.p1","_blank")})
/* B2 - Worldwide olympics - Student */
const libro_b2_8 = document.getElementById('book_b2.8')
libro_b2_8.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1rCBMZQ2mEIXBSM-f3MBNfWqEHAl_DhH3/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Merry Christmas */
const libro_b2_9 = document.getElementById('book_b2.9')
libro_b2_9.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1RNeoUIgBOrjBE2Y9saFGH-gOvBLbYCxH/edit#slide=id.p1","_blank")})
/* B2 - Merry Christmas - Student */
const libro_b2_10 = document.getElementById('book_b2.10')
libro_b2_10.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1rPhAPr9LwleEbL2RVienXVrLbWA1EfCb/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Independence’s day */
const libro_b2_11 = document.getElementById('book_b2.11')
libro_b2_11.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1Rk-AhSotv-2fEUOpfpDKbIdnlpkS8j1S/edit#slide=id.p1","_blank")})
/* B2 - Independence’s day - Student */
const libro_b2_12 = document.getElementById('book_b2.12')
libro_b2_12.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1hI6x_hL7-sqF5Xl2F21fzbt4jNOYHKE7/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Saint Patrick's Day */
const libro_b2_13 = document.getElementById('book_b2.13')
libro_b2_13.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1q3ZBeDyy98xEDvr2jFTGlsVrU1se9jve/edit#slide=id.p1","_blank")})
/* B2 - Saint Patrick's Day - Student */
const libro_b2_14 = document.getElementById('book_b2.14')
libro_b2_14.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1gL-NR9ZcNF-GfrP0jzvzSNA0FP81txt7/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Valentine's day */
const libro_b2_15 = document.getElementById('book_b2.15')
libro_b2_15.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/13AKBHnWSys7bncxaeCzSO3Z8DWCtMKY3/edit#slide=id.p1","_blank")})
/* B2 - Valentine's day - Student */
const libro_b2_16 = document.getElementById('book_b2.16')
libro_b2_16.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/10ML6THf66ApvlxXB2nLZ3NhMrUUFb7Ev/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Day in a ship */
const libro_b2_17 = document.getElementById('book_b2.17')
libro_b2_17.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ZOQxhnytuq1BtXLhMo0Da2p8zy9vgxhk/edit#slide=id.p1","_blank")})
/* B2 - Day in a ship - Student */
const libro_b2_18 = document.getElementById('book_b2.18')
libro_b2_18.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1OLHO7Xe6yKPHQHGPwk1-BJFvxVmzy2jd/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Car trip */
const libro_b2_19 = document.getElementById('book_b2.19')
libro_b2_19.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1Cg3EFIpMBpdaMLUslDDj3mGIkdnLtG8X/edit#slide=id.p1","_blank")})
/* B2 - Car trip - Student */
const libro_b2_20 = document.getElementById('book_b2.20')
libro_b2_20.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/141KzakExPJampz-KsIVbIS7qefA_5OST/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Rocket trip(Apolo 13) */
const libro_b2_21 = document.getElementById('book_b2.21')
libro_b2_21.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1oywTlkLrpvIKuN7UqpvHvVBr__GURyyT/edit#slide=id.p1","_blank")})
/* B2 - Rocket trip(Apolo 13) - Student */
const libro_b2_22 = document.getElementById('book_b2.22')
libro_b2_22.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ztwBr4MKgeEXL7jQQA8TBTaAC8L71gE-/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Public transport */
const libro_b2_23 = document.getElementById('book_b2.23')
libro_b2_23.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1wyyCIJMQ_j04OwOY_N3ppdrICzNr_7lm/edit#slide=id.p1","_blank")})
/* B2 - Public transport - Student */
const libro_b2_24 = document.getElementById('book_b2.24')
libro_b2_24.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1EZpAqNP5uBZdO5Vx3mnULDMHVXfN0U45/edit#slide=id.p1","_blank")})

/* Grammar */

/* B2 - Presentation: Adverbs (general) */
const libro_b2_25 = document.getElementById('book_b2.25')
libro_b2_25.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1R25EHuQbpcsobTBm8MPc5rw5eFIyHeAt/edit#slide=id.p1","_blank")})
/* B2 - Adverbs (general) - Student */
const libro_b2_26 = document.getElementById('book_b2.26')
libro_b2_26.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1NzuQZZMblHBApCaUpiOyQHzbDbPDMw_l/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Complex questions tag */
const libro_b2_27 = document.getElementById('book_b2.27')
libro_b2_27.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/14XtjVWWQPDLYCsLjT5Jn63p4G3tSPAdP/edit#slide=id.p1","_blank")})
/* B2 - Complex questions tag - Student */
const libro_b2_28 = document.getElementById('book_b2.28')
libro_b2_28.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1MDuVh1fr-dKM1oQoRneyfcuavNDbFhxk/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Conditionals (2nd|3rd) */
const libro_b2_29 = document.getElementById('book_b2.29')
libro_b2_29.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/18L5lshjpEz9tGWKrH-zDlZqp-5s0HQHb/edit#slide=id.p1","_blank")})
/* B2 - Conditionals (2nd|3rd) - Student */
const libro_b2_30 = document.getElementById('book_b2.30')
libro_b2_30.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1j7iNrHohHbSTHQy7RTaHFV0pJtSgy5Ck/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Intensifiers (Middle) */
const libro_b2_31 = document.getElementById('book_b2.31')
libro_b2_31.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1IDi8HgJ0lupdvLMOYw8pJEa09rFzp4tY/edit#slide=id.p1","_blank")})
/* B2 - Intensifiers (Middle) - Student */
const libro_b2_32 = document.getElementById('book_b2.32')
libro_b2_32.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1emEbhiNWBOOGzwWMUNbfhPKZneX2nJuj/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Linking words modals */
const libro_b2_33 = document.getElementById('book_b2.33')
libro_b2_33.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1l3-wa6wm9lk-qTPOAcwJpJvFxOS8nYNH/edit#slide=id.p1","_blank")})
/* B2 - Linking words modals - Student */
const libro_b2_34 = document.getElementById('book_b2.34')
libro_b2_34.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1rcElBNjjrQ-rDsP_lx6_G3isKRsmiRHl/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Modifiers (comparison) */
const libro_b2_35 = document.getElementById('book_b2.35')
libro_b2_35.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1rvGLJX4HfqUq6vm6o54LnuuNyKHYaWro/edit#slide=id.p1","_blank")})
/* B2 - Modifiers (comparison) - Student */
const libro_b2_36 = document.getElementById('book_b2.36')
libro_b2_36.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1Bzy9juhxhEyFsPt-DkGe8He3mMiSEDtr/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Past Cont.(overview)  */
const libro_b2_37 = document.getElementById('book_b2.37')
libro_b2_37.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1fZv1hzhefDykKnV8Z7hx9aJbd8ftrlhh/edit#slide=id.p1","_blank")})
/* B2 - Past Cont.(overview)  - Student */
const libro_b2_38 = document.getElementById('book_b2.38')
libro_b2_38.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1FSMzJEvA6K4n3BZJTbVIrrf657o-AyxK/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Past perfect */
const libro_b2_39 = document.getElementById('book_b2.39')
libro_b2_39.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1RdFEMPFYkKTN5qZQEpIsc_RfiK1m1kqb/edit#slide=id.p1","_blank")})
/* B2 - Past perfect - Student */
const libro_b2_40 = document.getElementById('book_b2.40')
libro_b2_40.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1HIb77oSYJZdVrOUBArxpp7PHO-2oKdDQ/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Past perfect continuous */
const libro_b2_41 = document.getElementById('book_b2.41')
libro_b2_41.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1WuwtLwKe4kiCCz92ReWSxNMKUMXBFArx/edit#slide=id.p1","_blank")})
/* B2 - Past perfect continuous - Student */
const libro_b2_42 = document.getElementById('book_b2.42')
libro_b2_42.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/151z_qJ1JHYGSibcLhVE6rwaOry2dZ2mx/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Past simple (overview) */
const libro_b2_43 = document.getElementById('book_b2.43')
libro_b2_43.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1GgUu43JR5IAYVE3ET23x6b7hWt3sQDAq/edit#slide=id.p1","_blank")})
/* B2 - Past simple (overview) - Student */
const libro_b2_44 = document.getElementById('book_b2.44')
libro_b2_44.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/12ZUMG04t8hNirRgcZ0BMGQZtA0YH_2sj/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Phrasal verbs */
const libro_b2_45 = document.getElementById('book_b2.45')
libro_b2_45.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1GWduPykNTuB9vJd1Nz5EFwIfCBLb9Zrx/edit#slide=id.p1","_blank")})
/* B2 - Phrasal verbs - Student */
const libro_b2_46 = document.getElementById('book_b2.46')
libro_b2_46.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/10n6V-UIhSYpQZVNqa0PfMQadMzb4OnK6/edit#slide=id.p1","_blank")})
/* B2 - Presentation: Cond. and modals */
const libro_b2_47 = document.getElementById('book_b2.47')
libro_b2_47.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1PFkGKQI41cbh-XBg5w_jeifUtiL_HIDd/edit#slide=id.p1","_blank")})
/* B2 - Cond. and modals - Student */
const libro_b2_48 = document.getElementById('book_b2.48')
libro_b2_48.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1NsekqtCz8s3ludvj4_ceotDGO9BlqYMH/edit#slide=id.p1","_blank")})

/*------------------------------------------------------------------------------------------------------------------------------------------------------- */

/*------------------------------------------------------------- C1 - Links ------------------------------------------------------------------------------ */

/* Speaking */

/* C1 - Presentation: Kings & politicians */
const libro_c1_1 = document.getElementById('book_c1.1')
libro_c1_1.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1Sjtj455mk6os6jRGhm9G-ShdTVvBYrqj/edit#slide=id.p1","_blank")})
/* C1 - Kings & politicians - Student */
const libro_c1_2 = document.getElementById('book_c1.2')
libro_c1_2.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ntaCogvz_sNuFVfSjyd7b3colFkcWUlp/edit#slide=id.p1","_blank")})
/* C1 - Presentation: Political institutions */
const libro_c1_3 = document.getElementById('book_c1.3')
libro_c1_3.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1OGMzqYxW-faFLc0uz2weNS3V79BkO6kN/edit#slide=id.p1","_blank")})
/* C1 - Political institutions - Student */
const libro_c1_4 = document.getElementById('book_c1.4')
libro_c1_4.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1FLPTQkBqA2F6hFvxFkTSPLB_150ifsXd/edit#slide=id.p1","_blank")})
/* C1 - Presentation: Political orders */
const libro_c1_5 = document.getElementById('book_c1.5')
libro_c1_5.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1N3tu19p_8qKK6LvK3rTkQXr6RmBgibix/edit#slide=id.p1","_blank")})
/* C1 - Political orders - Student */
const libro_c1_6 = document.getElementById('book_c1.6')
libro_c1_6.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/13ba_g0X9bSYKQ3a-gWyFCo2b59VkdRNi/edit#slide=id.p1","_blank")})
/* C1 - Presentation: Votes and candidates */
const libro_c1_7 = document.getElementById('book_c1.7')
libro_c1_7.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1BYRHEs4ewXEBFKETCE21do8hlRQUUXEI/edit#slide=id.p1","_blank")})
/* C1 - Votes and candidates - Student */
const libro_c1_8 = document.getElementById('book_c1.8')
libro_c1_8.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/14gHEaI7-R_eAaqSUJuOyHZR6Ya-j2LZ1/edit#slide=id.p1","_blank")})
/* C1 - Presentation: 21st century creations */
const libro_c1_9 = document.getElementById('book_c1.9')
libro_c1_9.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1vsUel6apGrJQSn2fv5g0LQNTQXbKDbtE/edit#slide=id.p1","_blank")})
/* C1 - 21st century creations - Student */
const libro_c1_10 = document.getElementById('book_c1.10')
libro_c1_10.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1uAwlL_45o1vWWb2zqj4625vcKbs9lKMD/edit#slide=id.p1","_blank")})
/* C1 - Presentation: Artificial intelligence */
const libro_c1_11 = document.getElementById('book_c1.11')
libro_c1_11.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ATEaqUPcUCydZm6Uhq6H1JjO_mMRmpq9/edit#slide=id.p1","_blank")})
/* C1 - Artificial intelligence - Student */
const libro_c1_12 = document.getElementById('book_c1.12')
libro_c1_12.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1YNUYcAZKYQvXuSs3fI00vjQB3M4OtKBh/edit#slide=id.p1","_blank")})
/* C1 - Presentation:Social Media trends */
const libro_c1_13 = document.getElementById('book_c1.13')
libro_c1_13.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1-LeIm32tl80FaYoR2ZQmarhJUyvyFjut/edit#slide=id.p1","_blank")})
/* C1 - Social Media trends - Student */
const libro_c1_14 = document.getElementById('book_c1.14')
libro_c1_14.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1GpNdxpw1hjaNMsF8z8X4-jdj1KsFskfs/edit#slide=id.p1","_blank")})
/* C1 - Presentation: The news, TV, etc. */
const libro_c1_15 = document.getElementById('book_c1.15')
libro_c1_15.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1iUF_z4_KQYrAGipXavrElLyWyKzmpPgK/edit#slide=id.p1","_blank")})
/* C1 - The news, TV, etc. - Student */
const libro_c1_16 = document.getElementById('book_c1.16')
libro_c1_16.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1huBoYBKP1z1Lb0vjda2BwdGp9ey-7UGa/edit#slide=id.p1","_blank")})
/* C1 - Presentation: Kings & politicians */
const libro_c1_17 = document.getElementById('book_c1.17')
libro_c1_17.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1sFe8JLhqun0_noAmiSNcSAoTGiQPvIiW/edit#slide=id.p1","_blank")})
/* C1 - Creation Stories - Student */
const libro_c1_18 = document.getElementById('book_c1.18')
libro_c1_18.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1huZLExS5L-NvjJxjETM6VcyX8lKqGbPo/edit#slide=id.p1","_blank")})
/* C1 - Presentation: Plants're intelligent */
const libro_c1_19 = document.getElementById('book_c1.19')
libro_c1_19.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1TYKyjupiLfGbKpiVc-2uNKyOCZ8AbHiH/edit#slide=id.p1","_blank")})
/* C1 - Plants're intelligent - Student */
const libro_c1_20 = document.getElementById('book_c1.20')
libro_c1_4.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1a_nf9Bd7lvhEYbZnUxXf6IjfpNsQTfDB/edit#slide=id.p1","_blank")})
/* C1 - Presentation: Storms and weather */
const libro_c1_21 = document.getElementById('book_c1.21')
libro_c1_21.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1PEXtSesyFLEStED8t6i1xxM4QAARqG8M/edit#slide=id.p1","_blank")})
/* C1 - Storms and weather - Student */
const libro_c1_22 = document.getElementById('book_c1.22')
libro_c1_22.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1OvYE6zjCCvLFeQAYwEd321UA_Bf54NxY/edit#slide=id.p1","_blank")})
/* C1 - Presentation: Weather conversation */
const libro_c1_23 = document.getElementById('book_c1.23')
libro_c1_23.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1pllN5RlxwXHpXT7QGB_2XaAXz4hgNcsu/edit#slide=id.p1","_blank")})
/* C1 - Weather conversation - Student */
const libro_c1_24 = document.getElementById('book_c1.24')
libro_c1_24.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/15XpFjEAEERzSjt4RuhsPvHcK5VsX7ACK/edit#slide=id.p1","_blank")})

/* Grammar */

/* C1 - Presentation: Adjetives and Adverbs */
const libro_c1_25 = document.getElementById('book_c1.25')
libro_c1_25.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1nZJBhefVpRP47C420UQT2aBWCbJqgkci/edit#slide=id.p1","_blank")})
/* C1 - Adjetives and Adverbs - Student */
const libro_c1_26 = document.getElementById('book_c1.26')
libro_c1_26.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/12Sns3MnCs-0mEfG-dvATKu8MCGspHati/edit#slide=id.p1","_blank")})
/* C1 - Presentation: Future continuous */
const libro_c1_27 = document.getElementById('book_c1.27')
libro_c1_27.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1Z2iWjXyTA4G16qFOh7nmLjMtTOGmpKih/edit#slide=id.p1","_blank")})
/* C1 - Future continuous - Student */
const libro_c1_28 = document.getElementById('book_c1.28')
libro_c1_28.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1wQfKQrL2wVzus5K3Z1XPe11GIKUQqYqL/edit#slide=id.p1","_blank")})
/* C1 - Presentation: Future perfect */
const libro_c1_29 = document.getElementById('book_c1.29')
libro_c1_29.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/183etsaq63I7eYkFHhlrfFZx2M1secwXe/edit#slide=id.p1","_blank")})
/* C1 - Future perfect - Student */
const libro_c1_30 = document.getElementById('book_c1.30')
libro_c1_30.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1o1sy851Cj8zwjR5NqRABi1hRFHvNVHVy/edit#slide=id.p1","_blank")})
/* C1 - Presentation: Future perfect cont. */
const libro_c1_31 = document.getElementById('book_c1.31')
libro_c1_31.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1VQA-kqpxPUBAgTAyooIiqRYdPSmTMxxO/edit#slide=id.p1","_blank")})
/* C1 - Future perfect cont. - Student */
const libro_c1_32 = document.getElementById('book_c1.32')
libro_c1_32.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1M2CV5S52xtEjm74JJTnFk0JwvX63CdFz/edit#slide=id.p1","_blank")})
/* C1 - Presentation: Mixes conditionals */
const libro_c1_34 = document.getElementById('book_c1.34')
libro_c1_34.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1A2RoH7xvl8r0ePDrHh_X13usdSKd3wHI/edit#slide=id.p1","_blank")})
/* C1 - Mixes conditionals - Student */
const libro_c1_35 = document.getElementById('book_c1.35')
libro_c1_35.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ZFmI4GYsHOLxczYW9EtlISbnceyZGwUu/edit#slide=id.p1","_blank")})
/* C1 - Presentation: Narrative tenses */
const libro_c1_36 = document.getElementById('book_c1.36')
libro_c1_36.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1mo5DYebQ7uK46l2g1KztIctvfcL-FSTw/edit#slide=id.p1","_blank")})
/* C1 - Narrative tenses - Student */
const libro_c1_37 = document.getElementById('book_c1.37')
libro_c1_37.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/17Ohjd_RjGLwbmItk5PBb1VdXJLKofdcM/edit#slide=id.p1","_blank")})
/* C1 - Presentation: Passive voice */
const libro_c1_38 = document.getElementById('book_c1.38')
libro_c1_38.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1QuYrjZZ-eOG4xbMsZxVLuj0gACkxGFmd/edit#slide=id.p1","_blank")})
/* C1 - Passive voice - Student */
const libro_c1_39 = document.getElementById('book_c1.39')
libro_c1_39.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1l_QQhvL0bX6smQrqCR4_14pl0EMdluoc/edit#slide=id.p1","_blank")})
/* C1 - Presentation: Relative clauses */
const libro_c1_40 = document.getElementById('book_c1.40')
libro_c1_40.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1Jrbi4pue8obDtwJHvOv0Oam-rXxT6kQb/edit#slide=id.p1","_blank")})
/* C1 - Relative clauses - Student */
const libro_c1_41 = document.getElementById('book_c1.41')
libro_c1_41.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/12eSVSU3X9ClgB8FuTeNFFTHyFH5yZcEL/edit#slide=id.p1","_blank")})
/* C1 - Presentation: Reported speech */
const libro_c1_42 = document.getElementById('book_c1.42')
libro_c1_42.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1cbpsEuhkyhhKzUW9jKHCArAv3I5nqS7i/edit#slide=id.p1","_blank")})
/* C1 - Reported speech - Student */
const libro_c1_43 = document.getElementById('book_c1.43')
libro_c1_43.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1oHMZoHhUmojBiuy527C_SQIB_jUrs6bx/edit#slide=id.p1","_blank")})
/* C1 - Presentation: Use of ‘wish’ */
const libro_c1_44 = document.getElementById('book_c1.44')
libro_c1_44.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1dZjXSMZxuCw6Zu9oSTESpUmyBYil5xCi/edit#slide=id.p1","_blank")})
/* C1 - Use of ‘wish’ - Student */
const libro_c1_45 = document.getElementById('book_c1.45')
libro_c1_45.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1dUQuHHC4as1YivKjT2Mq3BvknT1AGTK8/edit#slide=id.p1","_blank")})
/* C1 - Presentation: Used to (be|get) */
const libro_c1_46 = document.getElementById('book_c1.46')
libro_c1_46.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1Dm0nY_54Y4X6I60_Q8YTdMIgvoXe6cvm/edit#slide=id.p1","_blank")})
/* C1 - Used to (be|get) - Student */
const libro_c1_47 = document.getElementById('book_c1.47')
libro_c1_47.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1KQc2WEfMUpeXih1la-hjNSOSbcQMIo2m/edit#slide=id.p1","_blank")})

/* C1 - Alianza: Final exam-Intermediate level */
const libro_c1_33 = document.getElementById('book_c1.33')
libro_c1_33.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1gXS6AUfh9auqOdvhyK38DanH7Q8-nNAT/edit#slide=id.p1","_blank")})

/*------------------------------------------------------------------------------------------------------------------------------------------------------- */

/*------------------------------------------------------------- C2 - Links ------------------------------------------------------------------------------ */

/* Speaking */

/* C2 - Presentation: Conspiracy theories */
const libro_c2_1 = document.getElementById('book_c2.1')
libro_c2_1.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1AxcTtv0Bu-OTxwqFx_6bI83Ofs8IINUM/edit#slide=id.p1","_blank")})
/* C2 - Conspiracy theories - Student */
const libro_c2_2 = document.getElementById('book_c2.2')
libro_c2_2.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1cxid_6qmp95R41mMTKQ4c_lptPXLkWig/edit#slide=id.p1","_blank")})
/* C2 - Presentation: Health and food */
const libro_c2_3 = document.getElementById('book_c2.3')
libro_c2_3.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1YFIx9t6bt0kGWW_sW8ShT8PX-lrVSTsH/edit#slide=id.p1","_blank")})
/* C2 - Health and food - Student */
const libro_c2_4 = document.getElementById('book_c2.4')
libro_c2_4.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ZNkStsMHcwQwIoMgtH-sn6QYWALNFaYg/edit#slide=id.p1","_blank")})
/* C2 - Presentation: Health & politics */
const libro_c2_5 = document.getElementById('book_c2.5')
libro_c2_5.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1pwLpsC0voGE5zf43zY-br30octnk6tHb/edit#slide=id.p1","_blank")})
/* C2 - Health & politics - Student */
const libro_c2_6 = document.getElementById('book_c2.6')
libro_c2_6.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1FXEWLSYgBuyO5X_Ofjd0iRN8b2Qj7v2v/edit#slide=id.p1","_blank")})
/* C2 - Presentation: Viruses & treatments */
const libro_c2_7 = document.getElementById('book_c2.7')
libro_c2_7.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/19AJ_gl7ePAspoCI4PArrKKFTIl33Q3B0/edit#slide=id.p1","_blank")})
/* C2 - Viruses & treatments - Student */
const libro_c2_8 = document.getElementById('book_c2.8')
libro_c2_8.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1eHA0Puv-WZ9TFvnOQQ0ifhuz6JTTkrLe/edit#slide=id.p1","_blank")})
/* C2 - Presentation: Children’s right */
const libro_c2_9 = document.getElementById('book_c2.9')
libro_c2_9.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ucABTpk5R-9wiRa05YQp09i5ZTUC531V/edit#slide=id.p1","_blank")})
/* C2 - Children’s right - Student */
const libro_c2_10 = document.getElementById('book_c2.10')
libro_c2_10.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1MW127yUI3pMTPTkZDA45gVMjDtjZ-rVl/edit#slide=id.p1","_blank")})
/* C2 - Presentation: Feminism background */
const libro_c2_11 = document.getElementById('book_c2.11')
libro_c2_11.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ZBMPu8p_-K6B6nYhYqIxizXL6lU0ddl9/edit#slide=id.p1","_blank")})
/* C2 - Feminism background - Student */
const libro_c2_12 = document.getElementById('book_c2.12')
libro_c2_12.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1D4Hgnac1PPz0EkuYIe--ltv-u3XdPyov/edit#slide=id.p1","_blank")})
/* C2 - Presentation: Slavery abolition */
const libro_c2_13 = document.getElementById('book_c2.13')
libro_c2_13.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1T53jC-N-a1Pwsk_dkVSGSfaxrCN-bRt7/edit#slide=id.p1","_blank")})
/* C2 - Slavery abolition - Student */
const libro_c2_14 = document.getElementById('book_c2.14')
libro_c2_14.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1JUKGNOi3UPliiopRS8Z5TI0XzTW5RGH8/edit#slide=id.p1","_blank")})
/* C2 - Presentation: Human rights */
const libro_c2_15 = document.getElementById('book_c2.15')
libro_c2_15.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1K1qnDlDR2Yu4ditBZMRWnNKknoC9wbo4/edit#slide=id.p1","_blank")})
/* C2 - Human rights - Student */
const libro_c2_16 = document.getElementById('book_c2.16')
libro_c2_16.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1YkfwaboIjZHpWhOZi560Iqp-NJw6jRaf/edit#slide=id.p1","_blank")})
/* C2 - Presentation: A lazy generation */
const libro_c2_17 = document.getElementById('book_c2.17')
libro_c2_17.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1SvlEzulmoMmDVvXxucytLQzWdcYBRC_m/edit#slide=id.p1","_blank")})
/* C2 - A lazy generation - Student */
const libro_c2_18 = document.getElementById('book_c2.18')
libro_c2_18.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1WJ6e6-wa__g8MIohIYAftm0YaIRG_dn7/edit#slide=id.p1","_blank")})
/* C2 - Presentation: Different drugs */
const libro_c2_19 = document.getElementById('book_c2.19')
libro_c2_19.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ofOXlqYdKql9eNm2JeNZcSgq3FRrbd00/edit#slide=id.p1","_blank")})
/* C2 - Different drugs - Student */
const libro_c2_20 = document.getElementById('book_c2.20')
libro_c2_20.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1J6N5ugHirqEgoyquNN9lYQBWSrzymvrH/edit#slide=id.p1","_blank")})
/* C2 - Presentation: Insecurity & poverty */
const libro_c2_21 = document.getElementById('book_c2.21')
libro_c2_21.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1fdijN--Ea347EaCbdZHmbAv3mgPlsmsc/edit#slide=id.p1","_blank")})
/* C2 - Insecurity & poverty - Student */
const libro_c2_22 = document.getElementById('book_c2.22')
libro_c2_22.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1bN-XoBbVkZIAETP64AXk55SFpz4ayNMn/edit#slide=id.p1","_blank")})
/* C2 - Presentation: Human wars */
const libro_c2_23 = document.getElementById('book_c2.23')
libro_c2_23.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1i6lqoAxJdK8Ao8x8u8MRdlyXGnmaINmt/edit#slide=id.p1","_blank")})
/* C2 - Human wars - Student */
const libro_c2_24 = document.getElementById('book_c2.24')
libro_c2_24.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1vAyHr1_gBVB6tgEY-HAngDUV6ISwA3L6/edit#slide=id.p1","_blank")})

/* Grammar */

/* C1 - Presentation: Cleft sentences */
const libro_c2_25 = document.getElementById('book_c2.25')
libro_c2_25.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1OYJ3A8bcenZCaWHG7yO9q0EByS759Tlg/edit#slide=id.p1","_blank")})
/* C1 - Cleft sentences - Student */
const libro_c2_26 = document.getElementById('book_c2.26')
libro_c2_26.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1fbAjK5QYVuuIQQaA7hm3p_G8-mwA4mLN/edit#slide=id.p1","_blank")})
/* C1 - Presentation: Inversion with adv. */
const libro_c2_27 = document.getElementById('book_c2.27')
libro_c2_27.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1JxIP61Y37_ezqNSVjVVm9VfH49EOwdtD/edit#slide=id.p1","_blank")})
/* C1 - Inversion with adv. - Student */
const libro_c2_28 = document.getElementById('book_c2.28')
libro_c2_28.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1PggCOlRq3G1Xb9OAE7JiIhjg2gIJSbc8/edit#slide=id.p1","_blank")})
/* C2 - Presentation:Adverbs & adverbials ph. */
const libro_c2_29 = document.getElementById('book_c2.29')
libro_c2_29.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/19ikseD0W7_H5sQt15wD1-UmX8AnIyxFp/edit#slide=id.p1","_blank")})
/* C2 - Adverbs & adverbials ph. - Student */
const libro_c2_30 = document.getElementById('book_c2.30')
libro_c2_30.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1qH3_L4k0sFJKqxqbzEAjazcl4XRw-ntn/edit#slide=id.p1","_blank")})
/* C2 - Presentation: Complex adjetives */
const libro_c2_31 = document.getElementById('book_c2.31')
libro_c2_31.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1YRBijcT5XyoPClhbwvs8ZwyJff0otJzr/edit#slide=id.p1","_blank")})
/* C2 - Complex adjetives - Student */
const libro_c2_32 = document.getElementById('book_c2.32')
libro_c2_32.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ExE4XleDIfYDTsqeZy6XwcM6U4SXr_CX/edit#slide=id.p1","_blank")})
/* C2 - Presentation: Ellipsis & substitution */
const libro_c2_33 = document.getElementById('book_c2.33')
libro_c2_33.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1vBbvtsqIvWpp-cd-7t8RJkSORDM7w-KP/edit#slide=id.p1","_blank")})
/* C2 - Ellipsis & substitution - Student */
const libro_c2_34 = document.getElementById('book_c2.34')
libro_c2_34.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1SVtuBq-qyyEpxVuqYqWBDVCiV4p3ABO4/edit#slide=id.p1","_blank")})
/* C2 - Presentation: Inversions */
const libro_c2_35 = document.getElementById('book_c2.35')
libro_c2_35.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/19s9GWVgLwMA0-v-yd-b767_8DM7tg-vM/edit#slide=id.p1","_blank")})
/* C2 - Inversions - Student */
const libro_c2_36 = document.getElementById('book_c2.36')
libro_c2_36.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1InSQwKZM8NNATxiddWtw9gyvoJ2fOIDa/edit#slide=id.p1","_blank")})
/* C2 - Presentation: Mixed conditionals */
const libro_c2_37 = document.getElementById('book_c2.37')
libro_c2_37.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ErVDjolkQz84LnvmxXaXW2W8Zdy1gCt8/edit#slide=id.p1","_blank")})
/* C2 - Mixed conditionals - Student */
const libro_c2_38 = document.getElementById('book_c2.38')
libro_c2_38.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1PjjupLcdKgkXbXLj6BRahOuDpFsLmqv7/edit#slide=id.p1","_blank")})
/* C2 - Presentation: Mixed tenses */
const libro_c2_39 = document.getElementById('book_c2.39')
libro_c2_39.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1YVWq0MRabMmhQ4oEubxGwGXfz4urKhKs/edit#slide=id.p1","_blank")})
/* C2 - Mixed tenses - Student */
const libro_c2_40 = document.getElementById('book_c2.40')
libro_c2_40.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1RkaUWZqU7N_eNQc3WFP4HqSBQVVCbiDs/edit#slide=id.p1","_blank")})
/* C2 - Presentation: Modals in the past */
const libro_c2_41 = document.getElementById('book_c2.41')
libro_c2_41.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1LUVBhu0bqigYd382ENNCvyusIABNvjjS/edit#slide=id.p1","_blank")})
/* C2 - Modals in the past - Student */
const libro_c2_42 = document.getElementById('book_c2.42')
libro_c2_42.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/14dxinDVj48EnU0p1SirMkzpFIKp2jnEB/edit#slide=id.p1","_blank")})
/* C2 - Presentation: Multi Word verbs */
const libro_c2_43 = document.getElementById('book_c2.43')
libro_c2_43.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1UGksOlcToDVZtFVgjrNl1vmyCaPzMxkh/edit#slide=id.p1","_blank")})
/* C2 - Multi Word verbs - Student */
const libro_c2_44 = document.getElementById('book_c2.44')
libro_c2_44.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/18MjkjpO2pNsLi7rSgjZwYjkqmvJbeg8g/edit#slide=id.p1","_blank")})
/* C2 - Presentation: Phrasal V.(together or not) */
const libro_c2_45 = document.getElementById('book_c2.45')
libro_c2_45.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1ucABTpk5R-9wiRa05YQp09i5ZTUC531V/edit#slide=id.p1","_blank")})
/* C2 - Phrasal V.(together or not) - Student */
const libro_c2_46 = document.getElementById('book_c2.46')
libro_c2_46.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1jMQ6sK9VKerA35--j-jP_tliTw6eED54/edit#slide=id.p1","_blank")})

/* C2 - Alianza: Final exam-Advanced level */
const libro_c2_47 = document.getElementById('book_c2.47')
libro_c2_47.addEventListener('click', () => {validation("https://docs.google.com/presentation/d/1lTapkSoyUGzmM-Eludj-_B_xe0VGNioG/edit#slide=id.p1","_blank")})

/*------------------------------------------------------------------------------------------------------------------------------------------------------- */

