const COLORS = ["blue", "green", "red", "yellow", "purple", "orange"]

class FallingBlock {
    constructor(canvas) {
        this.velocity = 4;
        this.dropHeight = Math.floor(Math.random() * (180) + canvas.height);
        this.height = Math.floor(Math.random() * (11) + 10);
        this.width = Math.floor(Math.random() * (21) + 20);
        this.rectX = this.randomStartX(canvas);
        this.rectY = canvas.height - this.dropHeight;
        this.stacked = false;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];

        console.log(this);
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.rectX, this.rectY, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    drop(paddle, canvas) {

        if(this.rectY > canvas.height) {
            this.rectX = this.randomStartX(canvas);
            this.rectY = canvas.height - this.dropHeight;
        }
        if (
            this.rectY + this.height >= canvas.height - paddle.stackHeight &&
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
            this.rectY += this.velocity;
        }

        console.log(this.rectX);
        console.log(paddle.leftX);
        console.log(paddle.rightX);
    }

    randomStartX(canvas) {
        return Math.floor(Math.random() * canvas.width) - this.width / 2;
    }
}

module.exports = FallingBlock;


