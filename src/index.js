import "./styles/index.scss";


// create block class 
// create paddle class 
// create p+b class (new collision rules)
// play game function
//   -game state of falling objects (iterate through obj array and move them down)
// user class (health, current score)
// firebase -- high score

// 1. change ball to rectangle
// 2. once rectangle hits paddle, link it up
// 3. send down new other height rectangle
// 4. get it to stick 

// canvas variables
var canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
var dy = 4;

// working image
var imgPath = '../dist/images/statue-of-liberty.png';

var imgObj = new Image();

imgObj.src = imgPath;

var x = 0;
var y = 0;

//imgObj.onload = function() {
//     ctx.drawImage(imgObj, x, y);
//}

// rectangle variables
// Rect 1
var width1 = 40;
var height1 = 20;
var rectX1 = Math.floor(Math.random() * canvas.width) + width1/2;
var rectY1 = canvas.height - 200;
var rect1Stacked = false;

// rectangle variables
// Rect 2
var width2 = 30;
var height2 = 10;
var rectX2 = Math.floor(Math.random() * canvas.width) + width2/2;
var rectY2 = canvas.height - 200;
var rect2Stacked = false;

// rectangle variables
// Rect 3
var width3 = 50;
var height3 = 15;
var rectX3 = Math.floor(Math.random() * canvas.width) + width3/2;
var rectY3 = canvas.height - 200;
var rect3Stacked = false;


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

// stack variables:
var stackHeight = paddleHeight;

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleLeftX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

function drawRect1() {
    ctx.beginPath();
    ctx.rect(rectX1, rectY1, width1, height1);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

function drawRect2() {
    ctx.beginPath();
    ctx.rect(rectX2, rectY2, width2, height2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function drawRect3() {
    ctx.beginPath();
    ctx.rect(rectX3, rectY3, width3, height3);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}



function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRect1();
  drawRect2();
  drawRect3();
  drawPaddle();
  // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  //ctx.drawImage(imgObj, 50, 300, 200, 100, x, y, 50, 25);
  //ctx.drawImage(imgObj, 50, 300, 200, 100, x, y, 50, 25);

  //Rectangle 1 movement
  if (rectY1 > canvas.height) {
    rectX1 = Math.floor(Math.random() * canvas.width) + width1 / 2;
    rectY1 = canvas.height - 200;
  }

  if (
    rectY1 + height1 >= canvas.height - stackHeight &&
    //rectY1 + height1 <= (canvas.height - stackHeight + 5) &&
    rectX1 + width1 / 2 >= paddleLeftX &&
    rectX1 + width1 / 2 <= paddleRightX
  ) {
    rectX1 = paddleX - width1 / 2;
    if (!rect1Stacked) {
      rectY1 = canvas.height - stackHeight - height1;
      stackHeight += height1;
      rect1Stacked = true;
    }
  } else {
    rectY1 += dy;
  }

  //Rectangle 2 movement
  if (rectY2 > canvas.height) {
    rectX2 = Math.floor(Math.random() * canvas.width) + width2 / 2;
    rectY2 = canvas.height - 200;
  }

  if (
    rectY2 + height2 >= canvas.height - stackHeight &&
    //rectY2 + height2 <= canvas.height - stackHeight + 5 &&
    rectX2 + width2 / 2 >= paddleLeftX &&
    rectX2 + width2 / 2 <= paddleRightX
  ) {
    rectX2 = paddleX - width2 / 2;
    if (!rect2Stacked) {
      rectY2 = canvas.height - stackHeight - height2;
      stackHeight += height2;
      rect2Stacked = true;
    }
  } else {
    rectY2 += dy;
  }

  //Rectangle 3 movement
  if (rectY3 > canvas.height) {
    rectX3 = Math.floor(Math.random() * canvas.width) + width3 / 2;
    rectY3 = canvas.height - 200;
  }

  if (
    rectY3 + height3 >= canvas.height - stackHeight &&
    //rectY3 + height3 <= canvas.height - stackHeight + 5 &&
    rectX3 + width3 / 2 >= paddleLeftX &&
    rectX3 + width3 / 2 <= paddleRightX
  ) {
    rectX3 = paddleX - width3 / 2;
    if (!rect3Stacked) {
      rectY3 = canvas.height - stackHeight - height3;
      stackHeight += height3;
      rect3Stacked = true;
    }
  } else {
    rectY3 += dy;
  }

  //takes in keyboard inputs
  if (rightPressed) {
    paddleX += 7;
    if (paddleRightX >= canvas.width) {
      paddleX = canvas.width - paddleWidth / 2;
    }
  } else if (leftPressed) {
    paddleX -= 7;
    if (paddleLeftX <= 0) {
      paddleX = paddleWidth / 2;
    }
  }
  paddleLeftX = paddleX - paddleWidth / 2;
  paddleRightX = paddleX + paddleWidth / 2;
}

setInterval(draw, 30);

console.log("canvas is running");

