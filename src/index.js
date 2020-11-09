import "./styles/index.scss";
const FallingBlock = require('./scripts/falling_blocks');
const Paddle = require('./scripts/paddle');

// create block class 
// create paddle class 
// create p+b class (new collision rules)
// play game function
//   -game state of falling objects (iterate through obj array and move them down)
// user class (health, current score)
// firebase -- high score

// canvas variables
var canvas = document.getElementById('canvas');
canvas.width = 400;
canvas.height = 350;
const ctx = canvas.getContext("2d");

// working image
var imgPath = '../dist/images/statue-of-liberty.png';

var imgObj = new Image();

imgObj.src = imgPath;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    paddle.rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    paddle.leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    paddle.rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    paddle.leftPressed = false;
  }
}

let blocks = [];
var i;
for (i = 0; i < 10; i ++) {
  blocks.push(new FallingBlock(canvas));
}
let paddle = new Paddle(canvas);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  blocks.forEach(block => block.draw(ctx));
  paddle.draw(ctx, canvas);

  blocks.forEach(block => block.drop(paddle, canvas));

  paddle.move(canvas);

}

setInterval(draw, 20);

console.log("canvas is running");

