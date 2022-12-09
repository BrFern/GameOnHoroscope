let GameManager = {
  setGameStart: function (classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType) {
//Not sure if need this one or not
    switch (classType) {
        case "Capricorn":
            player = new Player (classType, 12);
            break;
        case "Aquarius":
            player = new Player (classType, 12);
            break;
        case "Pisces":
            player = new Player (classType, 12);
            break;
        case "Aries":
            player = new Player (classType, 12);
            break;
        case "Taurus":
            player = new Player (classType, 12);
            break;
        case "Gemini":
            player = new Player (classType, 12);
            break;
        case "Cancer":
            player = new Player (classType, 12);
            break;
        case "Leo":
            player = new Player (classType, 12);
            break;
        case "Virgo":
            player = new Player (classType, 12);
            break;
        case "Libra":
            player = new Player (classType, 12);
            break;
        case "Scorpio":
            player = new Player (classType, 12);
            break;
        case "Sagittarius":
            player = new Player (classType, 12);
            break;
    }
    let getInterface = document.querySelector(".horoscope");
    getInterface.innerHTML = '<img src="images/horoscope"' + classType.toLowerCase() + '.png"><div><h3>'+ classType +'</h3><p> Health: ' + player.health +'</p></div>';
  },

  setPreFight: function() {

  }


}

