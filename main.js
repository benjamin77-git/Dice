const dice = document.getElementsByClassName(".btn");
function dicegame() {
  var RandomDice1 = Math.floor(Math.random() * 6) + 1;
  var diceName = "dice-" + RandomDice1 + ".png";
  var diceLocation = "../Dice program/img/" + diceName;
  var img1 = document.querySelectorAll("img")[1];
  img1.setAttribute("src", diceLocation);

  var RandomDice2 = Math.floor(Math.random() * 6) + 1;
  var diceName2 = "dice-" + RandomDice2 + ".png";
  var diceLocation2 = "../Dice program/img/" + diceName2;
  var img2 = document.querySelectorAll("img")[2];
  img2.setAttribute("src", diceLocation2);

  if (RandomDice1 > RandomDice2) {
    document.querySelector("h1").innerHTML = "🏆PLAYER 1 WINS";
  } else if (RandomDice1 < RandomDice2) {
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS🏆";
  } else if (RandomDice1 == RandomDice2) {
    document.querySelector("h1").innerHTML = "🏆It's A DRAW!🏆";
  } else {
    document.querySelector("h1").innerHTML = "Something went wrong!";
  }
  dice.innerHTML = "PLAY AGAIN";
}
