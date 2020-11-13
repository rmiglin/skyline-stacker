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
var next_level = document.getElementById("next-level");

const MINUTES_LABEL = document.getElementById("minutes");
const SECONDS_LABEL = document.getElementById("seconds");
const SCORE_LABEL = document.getElementById("score");
const CURRENT_SCORE_LABEL = document.getElementById("current-score");
const FINAL_SCORE_LABEL = document.getElementById("final-score");
//var totalSeconds = 300;



function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function setTime() {
  game.totalSeconds -= 1;
  SCORE_LABEL.innerHTML = SCORE;
  CURRENT_SCORE_LABEL.innerHTML = SCORE;
  FINAL_SCORE_LABEL.innerHTML = SCORE;
  SECONDS_LABEL.innerHTML = pad(game.totalSeconds % 60);
  MINUTES_LABEL.innerHTML = pad(parseInt(game.totalSeconds / 60));
}


start.onclick = function(){
  //this.removeClass('pulse');
  start.classList.remove('pulse');
  audio.play();
  game.play();
  if(!game.paused && !game.endGame){
    setInterval(setTime, 1000);
  }
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

