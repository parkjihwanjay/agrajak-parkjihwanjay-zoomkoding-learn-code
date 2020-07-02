class Ball{
    constructor(canvas, x, y){
        this.canvas = canvas;
        this.reset();
        this.radius = 10;
    }
    reset(){
        this.x = this.canvas.getWidth()/2
        this.y = this.canvas.getHeight()-30
    }
    draw(){
        var ctx = this.canvas.getContext();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
    move(){
        this.x += this.canvas.dx;
        this.y += this.canvas.dy;
    }
}