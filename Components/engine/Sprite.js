export default class Sprite {
    constructor(props){
        this.width = props.width ?? 64;
        this.height = props.height ?? 64;
        this.animation = props.animation ?? console.log('ERROR: Choose animation!');
    }

    Draw(camera, x, y){
        camera.screen.screen.drawImage(this.animation.frame(), x+camera.x, y+camera.y, this.width, this.height);
        this.animation.NextFrame(); 
    }
}