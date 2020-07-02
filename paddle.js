class Paddle{
    constructor(canvas){
        this.canvas = canvas
        this.width = 75;
        this.height = 10;
        this.reset();
    }
    reset(){
        this.x = (this.canvas.getWidth()-this.width)/2;
    }
    draw(){
        var ctx = this.canvas.getContext();
        ctx.beginPath();
        ctx.rect(this.x, this.canvas.getHeight()-this.height, this.width, this.height);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
    movePaddle(dx){
        this.x += dx;
    }
    isVisible(){
        return this.x >= 0 && this.x < this.canvas.getWidth() - this.width;
    }
}