$ (document).ready(function(){
    var Random=Math.floor(Math.random()*120) + 19;
    
    $('#randomNumber').text(Random);
    //add randomNumber to html

    var num1=Math.floor(Math.random()*11+1)
    var num2=Math.floor(Math.random()*11+1)
    var num3=Math.floor(Math.random()*11+1)
    var num4=Math.floor(Math.random()*11+1)
    //Random numbers for each card
    //Random number is between 1-12

    var userTotal=0;
    var lost= 0;
    var win= 0;
    
    function rewrite(){
        $("#Wins").text(win);
        $("#numberLosses").text(lost);
    }
    
   
    if(userTotal === Random) {
        alert("You won!");
      
    } else if (userTotal > Random) {
        alert("You Lost!");
       
    }

    console.log (Random);

    function reset(){
        Random=Math.floor(Math.random()*120+19); 
        $("#randomNumber").text(Random);
        num1 = Math.floor (Math.random()*11+1);
        num2 = Math.floor (Math.random()*11+1);
        num3 = Math.floor (Math.random()*11+1);
        num4 = Math.floor (Math.random()*11+1);
        userTotal= 0;
        $("#finalTotal").text(userTotal);
    }
    
    console.log (num1);
    console.log (num2);
    console.log (num3);
    console.log (num4);
    


    $("#num1").on ("click", function (){
        userTotal = userTotal + num1;
        console.log(userTotal);
        $("#finalTotal").text(userTotal);
        
    })

    $("#num2").on ("click", function (){
        userTotal = userTotal + num2;

        $("#finalTotal").text(userTotal);
        
        if(userTotal == Random) {
            yay();
        }
    })

    $("#num3").on ("click", function (){
        userTotal = userTotal + num3;

        $("#finalTotal").text(userTotal);
        
        if(userTotal == Random) {
            yay();
        }
    })
    
    
    $("#num4").on ("click", function (){
        userTotal = userTotal + num4;

        $("#finalTotal").text(userTotal);
        
        if(userTotal == Random) {
            yay();
        }

        
    })

   
    
    console.log("New userTotal=" + userTotal);
    


//Game with 4 crystals (aka cards) and a random result
//Every card needs to have a random number between 1-10
//A new random number should be generated each time and tell the user if they won or lost
//When clicking the card it should add up the previous result
//If the number is greater than the random number, the player lost
//If the number is equal to the random number, the player wins
// An alert should pop up for the win or loss 
});