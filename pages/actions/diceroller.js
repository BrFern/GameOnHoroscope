


let images = ["../../images/diceroller/dice1.png",
"../../images/diceroller/dice2.png",
"../../images/diceroller/dice3.png", 
"../../images/diceroller/dice4.png", 
"../../images/diceroller/dice5.png",
"../../images/diceroller/dice6.png"];


let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die) {
        die.classList.add("shake");
    });

    //Setting a stop on the animation
    setTimeout(function() {
        dice.forEach(function(die) {
            die.classList.remove("shake");
        });

     

        //Randomize the dice roll
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6); 
        // console.log(dieOneValue, dieTwoValue)

        function displayOutcome() {
            let winnerDisplay = document.getElementById("roll-dice")
        if (dieOneValue > dieTwoValue) {
          winnerDisplay.innerHTML="Player one has won the dice roll!";
        } else if (dieOneValue < dieTwoValue) {
          winnerDisplay.innerHTML="Computer has won the dice roll!";
        } 
        else if (dieOneValue === dieTwoValue) 
          winnerDisplay.innerHTML="It's a tie! Re-roll!";
        }

        displayOutcome()
        // if (dieOneValue > dieTwoValue) {
        //   console.log(`Player one has won the dice roll!`);
        // } else if (dieOneValue < dieTwoValue) {
        //   console.log(`Computer has won the dice roll!`);
        // } 
        // else if (dieOneValue === dieTwoValue) 
        //   console.log(`It's a tie! Re-roll!`);
        
    document.querySelector("#die-1").setAttribute("src", images[dieOneValue])
    document.querySelector("#die-2").setAttribute("src", images[dieTwoValue])
  
    },
    1000
    );
}



