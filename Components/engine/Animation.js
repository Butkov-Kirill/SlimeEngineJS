export default class Animation{
    sprites = [];
    constructor(props){
        this.path = props.path ?? console.log('ERROR: Choose path to animation');
        this.frames = props.frames ?? 1;
        this.speed = props.speed ?? 1000;
        this.loop = props.loop ?? true;

        this.time = 0;
        this.activeFrame = 0;
        this.state = 'stop';
        for (let i=0; i<this.frames; i++){
            this.sprites[i] = new Image();
            this.sprites[i].src = this.path+'/'+i+'.png';
        }
    }

    frame(){
        return this.sprites[this.activeFrame];
    }

    NextFrame(){
        this.time++;
        if (this.time < this.speed){
            this.state = 'play';
        }
        if (this.time>=this.speed){
            this.time=0;
            this.activeFrame++;
            if (this.activeFrame > this.frames-1){
                if (this.loop){
                    this.activeFrame = 0;
                } else {
                    this.activeFrame--;
                }
                this.state = 'stop';
            }
        }
    }
}