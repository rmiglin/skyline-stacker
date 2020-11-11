import "./styles/index.scss";
const Game = require('./scripts/game');

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 300;

function setTime() {
  totalSeconds -= 1;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
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
var next_level = document.getElementById("next-level");

start.onclick = function(){
  //this.removeClass('pulse');
  start.classList.remove('pulse');
  audio.play();
  game.play();
  setInterval(setTime, 1000);
};

next_level.onclick = function(){
  console.log("clicked");
  game.paused = false;
  level_modal.style.display = "none"
}  

var info_modal = document.getElementById("info-modal");
var game_info = document.getElementById("game-info");
var close = document.getElementById("close");

game_info.onclick = function() {
  info_modal.style.display = "block";
}

close.onclick = function() {
  info_modal.style.display = "none";
}

window.onclick = function(e) {
  if (e.target == info_modal) {
    info_modal.style.display = "none";
  }
  if (e.target == level_modal) {
    level_modal.style.display = "none";
  }
}

var level_modal = document.getElementById("level-modal");
var next_level = document.getElementById("next-level");

var audio = document.getElementById("audio-player");
var audio_play = document.getElementById("audio-play");
var audio_pause = document.getElementById("audio-pause");
var audio_lower = document.getElementById("audio-lower");
var audio_increase = document.getElementById("audio-increase");

audio_play.onclick = function(){
  playAudio();
}

audio_pause.onclick = function(){
  pauseAudio();
}

audio_lower.onclick = function(){
  lowerAudio();
}

audio_increase.onclick = function(){
  increaseAudio();
}

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function lowerAudio() {
  if(audio.volume >= 0){
    audio.volume -= 0.1;
  }
}

function increaseAudio() {
  if(audio.volume < 1){
    audio.volume += 0.1;
  }
}



console.log("canvas is running");

