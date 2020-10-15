import "./styles/index.scss";


// create block class 
// create paddle class 
// create p+b class (new collision rules)
// play game function
//   -game state of falling objects (iterate through obj array and move them down)
// user class (health, current score)
// firebase -- high score


// canvas variables
var canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

// ball variables
var x = Math.floor(Math.random() * canvas.width) + 1;
var y = canvas.height - 200;
const ball_radius = 10;
var dy = 4;

// paddle variables
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var paddleLeftX = paddleX - paddleWidth/2;
var paddleRightX = paddleX + paddleWidth/2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleLeftX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    if (y > canvas.height){
        x = Math.floor(Math.random() * canvas.width) + 1;
        y = canvas.height - 200;
    }

    if (y + ball_radius === canvas.height - paddleHeight && (x >= paddleLeftX && x <= paddleRightX)){
        x = paddleX;
    } else {   
        y += dy;
    }

    if (rightPressed) {
        paddleX += 7;
        if (paddleRightX >= canvas.width) {
            paddleX = canvas.width - paddleWidth/2;
        }
    } else if (leftPressed) {
        paddleX -= 7;
        if (paddleLeftX <= 0) {
            paddleX = paddleWidth/2;
        }
    }
    paddleLeftX = paddleX - paddleWidth / 2;
    paddleRightX = paddleX + paddleWidth / 2;
    // console.log(`x is: ${x}`);
    // console.log(`y is: ${y}`);
    // console.log(`paddleX is ${paddleX}`);
    // console.log(`paddleLeftX is ${paddleLeftX}`);
    // console.log(`paddleRightX is ${paddleRightX}`);
    
}

setInterval(draw, 30);

console.log("canvas is running");

