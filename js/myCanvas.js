const mWidth=800;
const mHeight=600;

$(function() {
    $('#base-layer').attr({
        width: mWidth,
        height: mHeight
    });
    $('#layer1').attr({
        width: mWidth,
        height: mHeight
    });

    var base = new baseLayer("base-layer");
    base.drawGrid(mWidth, mHeight);
    var layer1 = new cubelayer("layer1");
    $('#vertical, #horizontal, #height').on('input' , function(event) {
        layer1.drawCube($('#vertical').val(), $('#horizontal').val(),$('#height').val());
    })
  });

  
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
        this.ctx.strokeStyle='#000';
        this.ctx.lineWidth=0.1;
    }
    drawGrid(width, height) {
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

class cubelayer extends baseCanvas{
    constructor(id) {
        super(id);
        super.init();
        this.ctx.strokeStyle="rgba(0, 0, 0, 1.0)";
        this.ctx.fillStyle='rgba(0, 100, 0, 0.5)';
    }
    drawCube(width,length,height){
        var cWidth = this.canvas.clientWidth;
        var cHeight = this.canvas.clientHeight;
        this.ctx.clearRect(0, 0, cWidth, cHeight);
        this.ctx.fillRect(10, cHeight - length - 10, width, length);
        this.ctx.strokeRect(10, cHeight - length - 10, width, length);
    }
}
