class Bird{
    constructor(canvas){
        this.height = 30;
        this.width = 30;
        this.X = (canvas.width - this.width) / 2;
        this.leftX = this.X - this.width / 2;
        this.rightX = this.X + this.width / 2;
    }

    draw(ctx, canvas){
        ctx.beginPath();
        ctx.rect(this.leftX, this.height, this.width, this.height);
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

module.exports = Bird;