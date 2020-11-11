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

var level_modal = document.getElementById("level-modal");
var final_modal = document.getElementById("final-modal");
var next_level = document.getElementById("next-level");

class Game{
    constructor(){
        this.time;
        this.health;
        this.level = 0;
        // this.level = LEVELS[1];
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
        //let blocks = this.createBlocks();
        //this.blocks = this.createBlocks();
        setInterval(() => this.draw(), 20);
    }
    
    
    draw(){
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
            //this.paused = true;
            //this.paused = true;
            // next_level.onclick = function(){
            //     console.log(this);
            //     this.paused = false;
            //     level_modal.style.display = "none";
            // }
            //this.pauseGame();
            // if (!this.paused){
  
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
            // }
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
            //console.log(this.paddle);
            this.paddle.rightPressed = true;
        } else if (e.key == "Left" || e.key == "ArrowLeft") {
            //console.log(this.paddle);
            this.paddle.leftPressed = true;
        }
    }

    keyUpHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            //console.log(this.paddle);
            this.paddle.rightPressed = false;
        } else if (e.key == "Left" || e.key == "ArrowLeft") {
            //console.log(this.paddle);
            this.paddle.leftPressed = false;
        }
    }

    master() {
        this.blocks = this.createBlocks();
        this.allStacked();
        while (!this.allStacked()){
            this.play();
        }
        // console.log("done");
    }

    allStacked() {
        //console.log(this.blocks);
        if(this.blocks.length === 0){
            return false;
        } else {
            // console.log(this.blocks.every(block => block.stacked))
            return this.blocks.every(block => block.stacked);
        }
    }

    // pauseGame() {
    //     if (!this.paused) {
    //         this = clearTimeout(this);
    //         this.paused = true;
    //     } else if (this.paused) {
    //         this = setTimeout(() => this.draw, 1000 / 30);
    //         this.paused = false;
    //     }
    // }

}

module.exports = Game;