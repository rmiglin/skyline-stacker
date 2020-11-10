import "./styles/index.scss";
const Game = require('./scripts/game');

// create block class 
// create paddle class 
// create p+b class (new collision rules)
// play game function
//   -game state of falling objects (iterate through obj array and move them down)
// user class (health, current score)
// firebase -- high score
let game = new Game();
var start = document.getElementById("start");

start.onclick = function(){game.play()};

var modal = document.getElementById("myModal");
var button = document.getElementById("game-info");
var close = document.getElementById("close");

button.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}



console.log("canvas is running");

