class Paddle{
    constructor(canvas){
        this.height = 10;
        this.width = 75;
        this.stackHeight = this.height;
        this.X = (canvas.width - this.width) / 2;
        this.leftX = this.X - this.width / 2;
        this.rightX = this.X + this.width / 2;
        this.rightPressed = false;
        this.leftPressed = false;
    }

    draw(ctx, canvas){
        ctx.beginPath();
        ctx.rect(this.leftX, canvas.height - this.height, this.width, this.height);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
    }
}

module.exports = Paddle;