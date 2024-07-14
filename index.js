

       // Player name 
    var player1 = "Player 1"; 

    var player2 = "Player 2"; 
  
    // Function to change the player name 
    function editNames() { 
        player1 = prompt("Change Player1 name"); 
        player2 = prompt("Change player2 name"); 
  
        document.querySelector(".player1").innerHTML = player1; 
        document.querySelector(".player2").innerHTML = player2; 
    }
    
    // Function to roll the dice 
    function rollTheDice() { 
        setTimeout(function () {
       var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
       var randomNumber2 = Math.floor(Math.random() * 6) + 1;


        document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


        //If player 1 wins
        if (randomNumber1 > randomNumber2) {
            document.getElementById("result").innerHTML = player1 + " Wins!" + "<br>" + "You deserve some accolades.";
        }
        else if (randomNumber2 > randomNumber1) {
            document.getElementById("result").innerHTML = player2 + " Wins!" + "<br>" + "You deserve some accolades.";
        }
        else {
        document.getElementById("result").innerHTML = "Draw" + "<br>" + "A replay is required";
        }
    }, 2500); 
} 