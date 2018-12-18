class baseCanvas {
    constructor(id) {
        this.id = id
    }
    getCanvas() {
        this.canvas= document.getElementById(this.id);
    }
    getCtx() {
        this.ctx=this.canvas.getContext('2d');
    }
}
