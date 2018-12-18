class baseCanvas {
    constructor(id) {
        this.id = id
    }
    init() {
        this.canvas= document.getElementById(this.id);
        this.ctx=this.canvas.getContext('2d');
    }
}

class baseLayer extends baseCanvas{
    constructor(id) {
        super(id);
        super.init();
    }
    drawGrid(width, height) {
        this.ctx.strokeStyle='#000';
        this.ctx.lineWidth=0.1;
        //this.ctx.setLineDash([1,2]);
        
        for (var x = 0.5; x < width; x += 5) {
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, height);
        }
        for (var y = 0.5; y < height; y += 5) {
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(width, y);
        }
        this.ctx.stroke();
    }
}
