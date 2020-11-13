const CLOUD_IMAGE = document.getElementById('cloud');


class Cloud {
    constructor(canvas) {
        this.velocity = 2;
        this.direction = Math.random() <= 0.5; 
        this.height = 30;
        this.width = 50;
        this.rectX = this.randomStartX();
        this.rectY = this.randomStartY();
        this.image = CLOUD_IMAGE;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.rectX, this.rectY, this.height, this.width);
    }

    drift(canvas) {

        //block below canvas
        if(this.rectX > canvas.width) {
            this.rectX = this.randomStartX();
            this.rectY = this.randomStartY();
            //this.rectY = this.randomStartX(canvas);
        } else {
            //normal falling block
            if(this.direction){
                this.rectX += this.velocity;
            } else {
                this.rectX -= this.velocity;
            }
        }
    }

    randomStartX(){
        if(this.direction){
            return -Math.floor(Math.random() * 1000 + 100);
        } else {
            return Math.floor(Math.random() * 1000 + 100);
        }
    }
    randomStartY() {
        return Math.floor(Math.random() * 40);
    }
}

module.exports = Cloud;


