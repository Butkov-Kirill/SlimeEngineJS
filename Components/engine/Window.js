export default class Window{
    constructor(id, color){
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.id = id;
        this.createWindow(color);
    }

    createWindow(color){
        this.canvas = document.createElement('canvas');
        this.screen = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.background = color;
        this.canvas.id = this.id;
        let App = document.getElementById('App');
        App.appendChild(this.canvas);
    }

    rect(x, y, width, height, color){
        this.screen.fillStyle = color;
        this.screen.fillRect(x, y, width, height);
    }

    clear(){
        this.screen.clearRect(0, 0, this.width, this.height);
    }
}