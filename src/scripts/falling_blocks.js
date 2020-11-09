const COLORS = ["blue", "green", "red", "yellow", "purple", "orange"];
// const IMAGES = [sol_torch, sol_head, sol_chest, sol_feet];
const IMAGES = [document.getElementById('sol-torch'), document.getElementById('sol-head'), 
document.getElementById('sol-chest'), document.getElementById('sol-feet')];

// const sol_torch = document.getElementById('sol-torch');
// const sol_head = document.getElementById('sol-head');
// const sol_chest = document.getElementById('sol-chest');
// const sol_feet = document.getElementById('sol-feet');


class FallingBlock {
    constructor(canvas) {
        this.velocity = 4;
        this.dropHeight = Math.floor(Math.random() * (180) + canvas.height);
        // this.height = Math.floor(Math.random() * (11) + 10);
        // this.width = Math.floor(Math.random() * (21) + 20);
        this.height = 35;
        this.width = 35;
        this.rectX = this.randomStartX(canvas);
        this.rectY = canvas.height - this.dropHeight;
        this.stacked = false;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.image = IMAGES.pop();
        //this.image = sol_feet;

        //console.log(this);
    }

    draw(ctx) {
        // ctx.beginPath();
        // ctx.rect(this.rectX, this.rectY, this.width, this.height);
        // // ctx.fillStyle = this.color;
        // ctx.fillStyle = ctx.createPattern(sol_torch, "no-repeat");
        // ctx.fillRect(this.rectX, this.rectY, 25, 25);
        // // ctx.fill();
        // ctx.closePath();
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


