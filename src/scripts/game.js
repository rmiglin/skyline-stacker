const FallingBlock = require('./falling_blocks');
const Paddle = require('./paddle');

const SOL_IMAGES = [document.getElementById('sol-torch'), 
                document.getElementById('sol-head'), 
                document.getElementById('sol-chest'), 
                document.getElementById('sol-feet')];

const WTC_IMAGES = [document.getElementById('wtc-top'), 
                document.getElementById('wtc-top-middle'), 
                document.getElementById('wtc-bottom-middle'), 
                document.getElementById('wtc-bottom')];

const ESB_IMAGES = [document.getElementById('esb-top'), 
                document.getElementById('esb-top-middle'), 
                document.getElementById('esb-bottom-middle'), 
                document.getElementById('esb-bottom')];

const LEVELS = [SOL_IMAGES, WTC_IMAGES, ESB_IMAGES];
const IMAGES = [SOL_FULL, WTC_FULL, ESB_FULL];

const SOL_FULL = document.getElementById("sol-full");
const WTC_FULL = document.getElementById("wtc-full");
const ESB_FULL = document.getElementById("esb-full");
const LEFT_CELEB = document.getElementById("left-celeb");
const MIDDLE_CELEB = document.getElementById("middle-celeb");
const RIGHT_CELEB = document.getElementById("right-celeb");
const FULL_CELEB = document.getElementById("full-celeb");

var level_modal = document.getElementById("level-modal");
var final_modal = document.getElementById("final-modal");
var next_level = document.getElementById("next-level");

class Game{
    constructor(){
        this.time;
        this.health;
        this.level = 0;
        this.score;
        this.high_score;
        this.canvas = document.getElementById('canvas');
        this.canvas.width = 400;
        this.canvas.height = 350;
        this.ctx = canvas.getContext("2d");
        this.paddle = new Paddle(this.canvas);
        this.blocks = [];
        this.paused = false;
        console.log(this);
    }

    play(){
        this.blocks = this.createBlocks();
        document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
        document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
        setInterval(() => this.draw(), 20);
    }
    
    
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
                // LEFT_CELEB.style.display = "block";
                // MIDDLE_CELEB.style.display = "block";
                // RIGHT_CELEB.style.display = "block";
                FULL_CELEB.style.display = "block";


        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if(!this.paused){
        this.blocks.forEach(block => block.draw(this.ctx));
        this.blocks.forEach(block => block.drop(this.paddle, this.canvas));
        }
        
        this.paddle.draw(this.ctx, this.canvas);
        this.paddle.move(this.canvas);
        if(this.allStacked()){
            if(this.level < 2){
                console.log("all stacked...for now");
                level_modal.style.display = "block";
            } else {
                final_modal.style.display = "block";
            }
            this.paused = true;
  
            this.level += 1;
            this.paddle.stackHeight = this.paddle.height;
            if(this.level > 2){
                //final score modal
                //new high score if high score
                console.log("you won!");
            } else {
                //create modal for current score
                //next level modal
                this.blocks = this.createBlocks();
            }
        }
        
        
    }

    createBlocks(){
        blocks = [];
        var i;
        for (i = 0; i < 4; i ++) {
            //pass in level to choose skyscraper
            let block_num = i;
            blocks.push(new FallingBlock(this.canvas, this.level, block_num));
        }
        return blocks;
    }


    keyDownHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.paddle.rightPressed = true;
        } else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.paddle.leftPressed = true;
        }
    }

    keyUpHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.paddle.rightPressed = false;
        } else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.paddle.leftPressed = false;
        }
    }

    allStacked() {
        if(this.blocks.length === 0){
            return false;
        } else {
            return this.blocks.every(block => block.stacked);
        }
    }

}

module.exports = Game;