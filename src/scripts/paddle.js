class Paddle{
    constructor(canvas){
        this.height = 12;
        this.width = 80;
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

    move(canvas){

        if (this.rightPressed) {
            this.X += 7;
            if (this.rightX >= canvas.width) {
                this.X = canvas.width - this.width / 2;
            }
        } else if (this.leftPressed) {
            this.X -= 7;
            if (this.leftX <= 0) {
                this.X = this.width / 2;
            }
        }

        this.leftX = this.X - this.width / 2;
        this.rightX = this.X + this.width / 2;
    }
}

module.exports = Paddle;