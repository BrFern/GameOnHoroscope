// function rollDice() {
//     const img = document.getElementById("img");
//     let randomNumber = Math.floor(Math.random() * 6) +1;
//     console.log(randomNumber);
//     img.setAttribute("src", `${randomNumber}.png`);
// }

let images = ["images/diceroller/dice1.png", "images/diceroller/dice2.png",
"images/diceroller/dice3.png", "images/diceroller/dice4.png", "images/diceroller/dice5.png",
"images/diceroller/dice6.png"];
let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die) {
        die.classList.add("shake");
    });
    setTimeout(function() {
        dice.forEach(function(die) {
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6); 
        console.log(dieOneValue, dieTwoValue)
    },
    1000
    );
}

