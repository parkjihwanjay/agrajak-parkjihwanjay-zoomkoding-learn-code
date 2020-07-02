class GameInfo {
    constructor(canvas, ctx, brickCount) {
        this.score = 0;
        this.lives = 3;
        this.canvas = canvas;
        this.ctx = ctx;
        this.brickCount = brickCount;
    }

    drawScore() {
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Score: "+this.score, 8, 20);
    }
    drawLives() {
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Lives: "+this.lives, this.canvas.width-65, 20);
    }
    
    isWon() {
        return this.score == this.brickCount;
    }

    isOver() {
        return this.lives == 0;
    }
    
    draw() {
        this.drawScore();
        this.drawLives();
    }


    addScore() {
        this.score++;
        if(this.isWon()){
            alert("YOU WIN, CONGRATS!");
            document.location.reload();
        }
    }

    die() {
        this.lives--;
    }

}

exports = GameInfo;

