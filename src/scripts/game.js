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

class Game{
    constructor(){
        this.time;
        this.health;
        this.level = LEVELS[1];
        this.score;
        this.high_score;
        this.canvas = document.getElementById('canvas');
        this.canvas.width = 400;
        this.canvas.height = 350;
        this.ctx = canvas.getContext("2d");
        this.paddle = new Paddle(this.canvas);
        console.log(this);
    }

    play(){
        document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
        document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
        let blocks = this.createBlocks();

        setInterval(() => this.draw(blocks), 20);
    }
    
    
    draw(blocks){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        blocks.forEach(block => block.draw(this.ctx));
        this.paddle.draw(this.ctx, this.canvas);

        blocks.forEach(block => block.drop(this.paddle, this.canvas));

        this.paddle.move(this.canvas);
    }

    createBlocks(){
        blocks = [];
        var i;
        for (i = 0; i < 4; i ++) {
            //pass in level to choose skyscraper
            blocks.push(new FallingBlock(this.canvas, this.level));
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

    allStacked() {

    }

}

module.exports = Game;