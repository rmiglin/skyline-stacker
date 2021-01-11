# Skyline Stacker
![Artsy Screenshot](/dist/images/game_screenshot.png)
Welcome to Skyline Stacker! The object of the game is to stack as many horizontal slices of iconic NYC skyscrapers on top of one another while avoiding the subway warnings, pigeons, and rats. 


# 1. Background and Overview
My JS project is a game akin to a sandwich stacking game where a paddle at the bottom of the screen holds up a base layer and must catch other (good) falling pieces onto their growing stack while avoiding bad ones. Each level will get increasingly faster and more difficult and players will be rewarded for building skyscrapers more quickly and penalized for accidentally stacking pigeons or rats. The game is built using Javscript's Canvas API.

### How to Play

Move the paddle left and right using the corresponding arrow keys to stack skyscraper slices while avoiding hitting pigeons.

### Features

#### Canvas Rendering
Rendering of shapes is done within Canvas to draw the Paddle, Clouds, and skyscraper segments as well as update the picture based on the level the user is on.

```javascript

  draw(){
        switch(this.level) {
            case 0:
                SOL_FULL.style.display = "block";
                WTC_FULL.style.display = "none";
                ESB_FULL.style.display = "none";
                break;
            case 1:
                SOL_FULL.style.display = "none";
                WTC_FULL.style.display = "block";
                ESB_FULL.style.display = "none";
                break;
            case 2:
                SOL_FULL.style.display = "none";
                WTC_FULL.style.display = "none";
                ESB_FULL.style.display = "block";
                break;
            default:
                SOL_FULL.style.display = "none";
                WTC_FULL.style.display = "none";
                ESB_FULL.style.display = "none";
                FULL_CELEB.style.display = "block";
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if(!this.paused){
            this.blocks.forEach(block => block.draw(this.ctx));
            this.blocks.forEach(block => block.drop(this.paddle, this.canvas));
            this.clouds.forEach(cloud => cloud.draw(this.ctx));
            this.clouds.forEach(cloud => cloud.drift(this.canvas));
            this.endSeconds = this.totalSeconds;
        }

        this.paddle.draw(this.ctx, this.canvas);
        this.paddle.move(this.canvas);
        if(this.allStacked() && !this.endGame){

            SCORE += Math.trunc(100/(this.startSeconds - this.endSeconds));
            if(this.level < 2){
                console.log("all stacked...for now");
                level_modal.style.display = "block";
            } else {
                this.endGame = true;
                final_modal.style.display = "block";
                FULL_CELEB.style.display = "block";
            }
            this.paused = true;
            if(this.level < 2){
                this.level += 1;
            }
            if(this.level <= 2){
                this.startSeconds = this.totalSeconds;
            }
            this.paddle.stackHeight = this.paddle.height;
            this.paddle.current_block_num = [0];
            this.finalScore = SCORE;
            if(this.level > 2){
                console.log("you won!");
            } else {
                this.blocks = this.createBlocks();
                this.clouds = this.createClouds();
            }
        }
        
    }

    createBlocks(){
        blocks = [];
        var i;
        for (i = 1; i <= 4; i ++) {
            let block_num = i;
            blocks.push(new FallingBlock(this.canvas, this.level, block_num));
            console.log(block_num);
        }
        return blocks;
    }

    createClouds(){
        clouds = [];
        var i;
        for(i = 0; i < 10; i ++){
            clouds.push(new Cloud(this.canvas));
        }
        return clouds;
    }

```

#### Audio

The audio element is created with HTML's audio built element. I styled over it by hiding the original element and creating buttons to link to the HTML audio.

```javascript
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

```

# 2. Functionality and MVPs 
Splash page, Randomized Falling piece controlling moving paddle, build template, score + high scores + levels
  
# 3. Wireframes 
https://wireframe.cc/FgcKTC
  
# 4. Architecture and Technology 
Canvas for graphics
  
# 5. Implementation Timeline 
  Monday: basic layout of landing page containers
  Tuesday: falling skyscraper pieces functionality completed
  Wednesday: controls and score updates working
  Thursday: styling of skyscrapers and game page
  Friday: High score feature working with skyscraper fun facts 
  
# 6. (Bonus Features) 
  Fun Facts about each skyscraper
  Power-ups
  Changeable themes
