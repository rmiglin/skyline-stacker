


class FallingBlock {
    constructor(canvas, level) {
        this.velocity = 4;
        this.dropHeight = Math.floor(Math.random() * (180) + canvas.height);
        this.height = 35;
        this.width = 35;
        this.rectX = this.randomStartX(canvas);
        this.rectY = canvas.height - this.dropHeight;
        this.stacked = false;
        //this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        //this.level = LEVELS[Math.floor(Math.random() * LEVELS.length)];
        this.level = level;
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
            this.rectX + this.width / 2 <= paddle.rightX
        ) {
            this.rectX = paddle.X - this.width / 2;
            if(!this.stacked) {
                this.rectY = canvas.height - paddle.stackHeight - this.height;
                paddle.stackHeight += this.height;
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


