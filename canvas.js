class Canvas {
    constructor(id){
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d");
        this.rightPressed = this.leftPressed = false;
        this.reset();
    }
    reset(){
        this.dx = 2;
        this.dy = 2;
    }
    getWidth(){
        return this.canvas.width;
    }
    getHeight(){
        return this.canvas.height;
    }
    getContext(){
        return this.ctx;
    }
    getOffsetLeft(){
        return this.canvas.leftOffset;
    }
    clearCanvas(){
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    flipDy(){
        this.dy *= -1;
    }
    flipDx(){
        this.dx *= -1;
    }
}