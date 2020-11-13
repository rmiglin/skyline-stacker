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

class FallingBlock {
    constructor(canvas, level, block_num) {
        this.velocity = 4;
        this.dropHeight = Math.floor(Math.random() * (180) + canvas.height);
        this.height = 35;
        this.width = 35;
        this.rectX = this.randomStartX(canvas);
        this.rectY = canvas.height - this.dropHeight;
        this.stacked = false;
        this.level = LEVELS[level];
        this.block_num = block_num;
        this.image = this.level.pop();
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.rectX, this.rectY, this.height, this.width);
    }

    drop(paddle, canvas) {

        //block below canvas
        if(this.rectY > canvas.height) {
            this.rectX = this.randomStartX(canvas);
            this.rectY = canvas.height - this.dropHeight;
        }
        //block on paddle
        if (
            this.rectY + this.height >= canvas.height - paddle.stackHeight &&
            // (this.rectY + this.height >= canvas.height - paddle.stackHeight && 
            //     this.rectY + this.height <= canvas.height - paddle.stackHeight + 3) &&
            this.rectX + this.width / 2 >= paddle.leftX &&
            this.rectX + this.width / 2 <= paddle.rightX &&
            this.block_num === paddle.current_block_num[this.block_num - 1] + 1
        ) {
            this.rectX = paddle.X - this.width / 2;
            if(!this.stacked) {
                //console.log(`just stacked ${this.block_num}`);
                this.rectY = canvas.height - paddle.stackHeight - this.height;
                paddle.stackHeight += this.height;
                paddle.current_block_num.push(this.block_num);
                SCORE += 40;
                //console.log(paddle.current_block_num);
                this.stacked = true;
            } 
        } else {
            //normal falling block
            this.rectY += this.velocity;
        }
    }

    randomStartX(canvas) {
        return Math.floor(Math.random() * canvas.width) - this.width / 2;
    }
}

module.exports = FallingBlock;


