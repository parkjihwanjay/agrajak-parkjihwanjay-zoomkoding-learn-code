class Brick{
    constructor(canvas, gameInfo){
        this.canvas = canvas;
        this.gameInfo = gameInfo;
        this.x = 0;
        this.y = 0;
        this.status = 1;
        this.width = 75;
        this.height = 20;
        // this.drawBrick();
    }
    drawBrick(r, c){
        const padding = 10;
        const OffsetTop = 30;
        const OffsetLeft = 30;

        this.x = r * (this.width + padding) + OffsetLeft; 
        this.y = c * (this.height + padding) + OffsetTop;

        this.draw();
    }
    draw(){
        const ctx = this.canvas.ctx;
        const brickColor = '#0095DD';

        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.brickColor;
        ctx.fill();
        ctx.closePath();
    }
    collisionDetection(ball){
        if(this.status == 1) {
            if(ball.x > this.x && ball.x < this.x+this.width && ball.y > this.y && ball.y < this.y+this.height) {
                this.canvas.flipDy();
                this.status = 0;
                this.gameInfo.addScore();
            }
        }
    }
}