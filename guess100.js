
const min = 1;
const max = 100;
const real = Math.floor(Math.random(min)*max)+1 ;
const discription = document.getElementById("dis");

let attempt = 0;
let running  = true ; 

button1 = document.getElementById("submit") ;
 button1.onclick =  function (){
   

        let  guess =  parseInt(document.getElementById("myinput").value) ;
         
        if (guess < min || guess >max){

            document.getElementById("dis").innerHTML = " enter a number between 1 to 100" ;
        }
        else if (guess < real ){

            attempt++ ;
            document.getElementById("dis").innerHTML = " guess higher  " ;

        }

        else if (guess > real ) {
              attempt++ ;
            document.getElementById("dis").innerHTML = " guess lower " ;

        }

        else if (guess === real ){
            attempt++ ;
            document.getElementById("dis").innerHTML = ` congrats you won , number really was ${real } . you took ${attempt} attempt to complete it `  ;

        }

        else {
             
            document.getElementById("dis").innerHTML = "please enter a number "

          
        }
        } ;

button2 = document.getElementById("restart") ;
button2.onclick = function (){

    window.location.reload();


}
button3 = document.getElementById("homebtn") ;
button3.onclick = function (){
    window.location="index.html"


}


        
    


