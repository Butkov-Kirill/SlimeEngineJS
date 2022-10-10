export default class Camera{
    constructor(props){
        this.screen = props.screen ?? console.log('ERROR: Choose screen');
        this.x = props.x ?? 0;
        this.y = props.y ?? 0;
    }

    Move(x,y){
        this.x+=x;
        this.y+=y;
    }
}