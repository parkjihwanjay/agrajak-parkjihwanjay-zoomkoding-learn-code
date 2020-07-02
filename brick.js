class Brick{
    constructor(canvas, gameInfo){
        this.canvas = canvas;
        this.gameInfo = gameInfo;
        this.x = 0;
        this.y = 0;
        this.status = 1;
        this.width = 75;
        this.height = 20;
        this.drawBrick();
    }
    drawBrick(){
        const padding = 10;
        const OffsetTop = 30;
        const OffsetLeft = 30;

        this.x = this.width + this.padding + OffsetLeft; 
        this.y = this.width + this.padding + OffsetTop;

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
    collisionDetection(){
        const ball_x = this.canvas.width/2;
        const ball_y = this.canvas.height-30;  

        if(this.status == 1) {
            if(ball_x > this.x && ball_x < this.x+this.width && ball_y > this.y && ball_y < this.y+this.height) {
                this.canvas.flipDy();
                // dy = -dy;
                this.status = 0;
                this.gameInfo.addScore();

                // score++;
                // if(score == brickRowCount*brickColumnCount) {
                //     alert("YOU WIN, CONGRATS!");
                //     document.location.reload();
                // }

            }
        }
    }
}