//Buttons Horoscope
<div class = "horoscope">
<button id ="ho-1" onClick = "location.href = '../pages/battlepage.html?s=capricorn'"> Capricorn </button>
<p> December 22nd-January 19th</p>
<img src ="../images/horoscope/Capricorn.png">
</div>
<div class = "horoscope">
<button id= "ho-2" onClick = "location.href = '../pages/battlepage.html?s=aquarius'"> Aquarius </button>
<p> January 20th-February 18th </p>
<img src="../images/horoscope/Aquarius.png">
</div>
<div class = "horoscope">
<button id = "ho-3" onClick = "location.href = '../pages/battlepage.html?s=pisces'"> Pisces </button>
<p> February 19th-March 20th </p>
<img src="../images/horoscope/Pisces.png">
</div>
<div class = "horoscope">
<button id="ho-4" onClick = "location.href = '../pages/battlepage.html?s=aries'"> Aries </button>
<p> March 21st-April 19th </p>
<img src="../images/horoscope/Aries.png">
</div>
<div class = "horoscope">
<button id= "ho-5" onClick = "location.href = '../pages/battlepage.html?s=taurus'"> Taurus </button>
<p> April 20th-May 20th </p>
<img src="../images/horoscope/Taurus.png">
</div>
<div class = "horoscope">
<button id="ho-6" onClick = "location.href = '../pages/battlepage.html?s=gemini'"> Gemini </button>
<p> May 21st-June 20th </p>
<img src="../images/horoscope/Gemini.png">
</div>
<div class = "horoscope">
<button id= "ho-7" onClick = "location.href = '../pages/battlepage.html?s=cancer'"> Cancer </button>
<p> June 21st-July 22nd </p>
<img src="../images/horoscope/Cancer.png">
</div>
<div class = "horoscope">
<button id="ho-8" onClick = "location.href = '../pages/battlepage.html?s=leo'"> Leo </button>
<p> July 23rd- August 22nd</p>
<img src="../images/horoscope/Leo.png">
</div>
<div class = "horoscope">
<button id="ho-9" onClick = "location.href = '../pages/battlepage.html?s=virgo'"> Virgo </button>
<p> August 23rd-September 22nd </p>
<img src="../images/horoscope/Virgo.png">
</div>
<div class = "horoscope">
<button id="ho-10" onClick = "location.href = '../pages/battlepage.html?s=libra'"> Libra </button>
<p> September 23rd-October 22nd </p>
<img src="../images/horoscope/Libra.png">
</div>
<div class = "horoscope">
<button id="ho-11" onClick = "location.href = '../pages/battlepage.html?s=scorpio'"> Scorpio </button>
<p> October 23rd-November 21st </p>
<img src="../images/horoscope/Scorpio.png">
</div>
<div class = "horoscope">
<button id="ho-12" onClick = "location.href = '../pages/battlepage.html?s=sagittarius'"> Sagittarius </button>
<p> November 22nd-December 21st </p>
<img src="../images/horoscope/Sagittarius.png">
</div>
</div>


//May still be useful, kept here just in case
const urlParams = new URLSearchParams (window.location.search);

//console.log(urlParams.get("gemini"))

if (urlParams.get("gemini")) {console.log("Sup")}

switch (urlParams.get("gemini")) {
    case 1: 
        user = capricorn
        break;
    case 2:
        user = aquarius
        break;
    case 3:
        user = pisces
        break
    case 4: 
        user = aries
        break;
    case 5:
         user = taurus
         break;
    case 6:
        console.log("Hello")
        user = gemini
        break;
    case 7:
        user = cancer
        break;
    case 8:
        user = leo
        break;
    case 9:
        user = virgo
        break;
    case 10:
        user = libra
        break;
    case 11:
        user = scorpio
        break;
    case 12:
        user = sagittarius
        break; 
}

//IMPORTANT CODE-JUST KEPT HERE WHILE MESSING AROUND

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



// function zodiacButtons () {
// const zodiacButtons = document.querySelectorAll('.horoscope')
// for(let i = 0; i < zodiacBtnArray.length; i++){
//     button.addEventListener('click', (event) => {

//     })

// }
// }
// button.addEventListner('click', (event) => { }) //Added 
// const zodiacButtons = document.querySelectorAll('.horoscope') //Added


// for(const button of zodiacButton){} 
// button.addEventListner('click', (event) => { })
// localStorage.setItem('playerChoice', button.id)
// localStorage.getItem('playerChoice');


// const button of zodiacButton

//<!-- <button OnClick = "location.href = '../pages/battlepage.html'"> To Battle! </button> -->

// <!-- <script>
// function compareDice (dieOneValue, dieTwoValue) {

// if (dieOneValue > dieTwoValue) {
//  document.body.innerHTML=("Player one has won the dice roll!");

 
// } else if (dieOneValue < dieTwoValue) {
// document.body.innerHTML=(`Computer has won the dice roll!`);
// } 
// else if (dieOneValue === dieTwoValue) 
// document.body.innerHTML=(`It's a tie! Re-roll!`);

// }
// compareDice(dieOneValue, dieTwoValue)
// </script> -->

// <!-- <script>
// function displayOutcome() {
// let old = console.log;
// let logger = document.getElementById('log');
// console.log = function(message) {
// if(typeofmessage === 'object') {
// logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify)
// } else {
// logger.innerHTML += message + '';
// }
// }
// }

// displayOutcome()

// </script> -->
  
  //Highlight the winner/loser
        // function highlight(text) {
        //     let inputText = document.getElementById("input text");
        //     let innerHTML = inputText.innerHTML;
        //     let index = innerHTML.indexOf(text);
        //     if (index >= 0) {
        //         innerHTML = innerHTML.substring(0, index) + "<span class = 'highlight'>" + 
        //         innerHTML.substring(index,index + text.length) + "</span>" + innerHTML.substring(index + text.length);
        //     }
        // } 

//document.body.innerHTML=("<button OnClick =" "location.href = '../pages/battlepage.html' ">" Return to battle!"  "</button>")

//This can be used to get it to another page, but wanted to try and see about getting it displayed on the same page

// <script>
//              function compareDice (dieOneValue, dieTwoValue) {
        
//         if (dieOneValue > dieTwoValue) {
//               document.body.innerHTML=("Player one has won the dice roll!");
//               document.dice-wrapper.innerHTML(compareDice(dieOneValue,dieTwoValue));
//               document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
//               document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
              
//         } else if (dieOneValue < dieTwoValue) {
//             document.body.innerHTML=(`Computer has won the dice roll!`);
//         } 
//         else if (dieOneValue === dieTwoValue) 
//             document.body.innerHTML=(`It's a tie! Re-roll!`);
        
//     }
//         </script>

//  <img src = "../images/diceroller/dice3.png" id = "die 3">
{/* <img src = "../images/diceroller/dice4.png" id = "die-4">
<img src = "../images/diceroller/dice5.png" id = "die-5">
<img src = "../images/diceroller/dice6.png" id = "die-6"> */}

// function rollDice() {
//     const img = document.getElementById("img");
//     let randomNumber = Math.floor(Math.random() * 6) +1;
//     console.log(randomNumber);
//     img.setAttribute("src", `${randomNumber}.png`);
// }

   // let test = document.querySelector("#die-1")
        // test.setAttribute("src", images[dieOneValue])
        // console.log(images[dieOneValue])
        // console.log(images[1])

        
//     <!-- <table>
//     <thead></thead>
//     <tbody>
   
//     <th colspan ="3"> Capricorn (December 22nd-January 19th) </th> 
//        <tr>  <img src= "../images/horoscope/Capricorn.png"> </tr>
//     <tr><th> Aquarius (January 20th-February 18th)</th></tr>


//     </tbody>

    
// </table>         -->