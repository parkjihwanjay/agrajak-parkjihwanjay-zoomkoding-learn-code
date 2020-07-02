class GameInfo {
    constructor(canvas, brickCount) {
        this.score = 0;
        this.lives = 3;
        this.canvas = canvas;
        this.ctx = canvas.ctx;
        this.brickCount = brickCount;
    }

    drawScore() {
        var ctx = this.canvas.getContext();
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Score: "+this.score, 8, 20);
    }
    drawLives() {
        var ctx = this.canvas.getContext();
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Lives: "+this.lives, this.canvas.getWidth()-65, 20);
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

