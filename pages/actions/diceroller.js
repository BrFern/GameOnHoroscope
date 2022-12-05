// function rollDice() {
//     const img = document.getElementById("img");
//     let randomNumber = Math.floor(Math.random() * 6) +1;
//     console.log(randomNumber);
//     img.setAttribute("src", `${randomNumber}.png`);
// }

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
        console.log(dieOneValue, dieTwoValue)
        let test = document.querySelector("#die-1")
        test.setAttribute("src", images[dieOneValue])
        console.log(images[dieOneValue])
        // console.log(images[1])
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue])
    },
    1000
    );
}

