import "./styles/index.scss";
const Game = require('./scripts/game');

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 300;

function setTime() {
  totalSeconds -= 1;
  secondsLabel.innerHTML = totalSeconds % 60;
  minutesLabel.innerHTML = parseInt(totalSeconds / 60);
}

// create block class 
// create paddle class 
// create p+b class (new collision rules)
// play game function
//   -game state of falling objects (iterate through obj array and move them down)
// user class (health, current score)
// firebase -- high score
let game = new Game();
var start = document.getElementById("start");

start.onclick = function(){
  game.play();
  setInterval(setTime, 1000);
};

var modal = document.getElementById("myModal");
var game_info = document.getElementById("game-info");
var close = document.getElementById("close");

game_info.onclick = function() {
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

