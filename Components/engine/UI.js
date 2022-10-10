export default class UI{
    constructor(camera){
        this.camera = camera;
        this.screen = camera.screen.screen;
    }

    printText(props){
        this.screen.font = props.font ?? 'normal 30px Arial';
        this.screen.fillStyle='#000';
        this.screen.fillStyle = props.color ?? '#000';
        this.screen.fillText(props.text, props.x+this.camera.x, props.y+this.camera.y);
    }

    progressBar(props){
        this.screen.fillStyle = props.backgroundColor;
        this.screen.fillRect(props.x+this.camera.x, props.y+this.camera.y, props.width, props.height);
        this.screen.fillStyle = props.color;
        let widthFill = (props.width/100)*props.procentages;
        this.screen.fillRect(props.x+this.camera.x, props.y+this.camera.y, widthFill, props.height);
        this.screen.fillStyle = props.borderColor;
        this.screen.lineWidth = props.border;
        this.screen.fillRect(props.x+widthFill+this.camera.x, props.y+this.camera.y, 1, props.height);
        this.screen.strokeRect(props.x+this.camera.x, props.y+this.camera.y, props.width, props.height);
    }
}