//From video
let player;
function Player(classType, health) {
    this.classType = classType;
    this.health = health;
}

let computer1;
function Computer(classType, health) {
    this.classType = classType;
    this.health = health;
}


class Horoscope {
    constructor (name, hitpoints) {
    this.name = name;
    this.hitpoints = hitpoints;
    }
}

const capricorn = new Player("Capricorn", 12);
const aquarius = new Player("Aquarius", 12);
const pisces = new Player("Pisces", 12);
const aries = new Player("Aries", 12);
const taurus = new Player("Taurus", 12);
const gemini= new Player("Gemini", 12);
const cancer = new Player("Cancer", 12);
const leo = new Player("Leo", 12);
const virgo = new Player("Virgo", 12);
const libra = new Player("Libra", 12);
const scorpio = new Player("Scorpio", 12);
const sagittarius = new Player("Sagittarius", 12);

const computer2 = new Computer ("Computer", 12);


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



