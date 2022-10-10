import Animation from '../../Components/engine/Animation.js';
import UI from '../../Components/engine/UI.js';

export default class NPC{
    constructor(props){
        this.gameObject = props.gameObject ?? console.log('ERROR: Choose GameObject for NPC');
        this.position = props.gameObject.position ?? {x: 0, y: 0};
        this.speed = props.speed ?? 30;
        this.name = props.name ?? 'Noname';
        this.hp = props.hp ?? 100;
        this.armor = props.armor ?? 100;

        this.velocity = {x: -1, y: -1};
        this.speedAnimation = 15;
        this._UI = new UI(props.gameObject.camera);

        this.animations = {
            "0" : {
                "1" : new Animation({path: '../src/Textures/Player/MoveRight', frames: 4, speed: this.speedAnimation}),
                "0" : new Animation({path: '../src/Textures/Player/State', frames: 1, speed: this.speedAnimation}),
                "-1" : new Animation({path: '../src/Textures/Player/MoveLeft', frames: 4, speed: this.speedAnimation})
            },
            "1" : {
                "0" : new Animation({path: '../src/Textures/Player/MoveDown', frames: 4, speed: this.speedAnimation}),
                "1" : new Animation({path: '../src/Textures/Player/MoveRightDown', frames: 4, speed: this.speedAnimation}),
                "-1" : new Animation({path: '../src/Textures/Player/MoveLeftDown', frames: 4, speed: this.speedAnimation})
            },
            "-1" : {
                "0" : new Animation({path: '../src/Textures/Player/MoveUp', frames: 4, speed: this.speedAnimation}),
                "1" : new Animation({path: '../src/Textures/Player/MoveRightUp', frames: 4, speed: this.speedAnimation}),
                "-1" : new Animation({path: '../src/Textures/Player/MoveLeftUp', frames: 4, speed: this.speedAnimation})
            }
        }
    }

    Update(deltaTime){
        this.position.x += this.speed * this.velocity.x * deltaTime;
        this.position.y += this.speed * this.velocity.y * deltaTime;
        this.gameObject.position = this.position;
        
        this.gameObject.sprite.animation = this.animations[""+this.velocity.y][""+this.velocity.x];

        this.Controll();

        this.gameObject.Update();
        this._UI.progressBar({backgroundColor: '#5B5B5B', borderColor: '#000', procentages: this.hp, color: '#D10000', border: 1, width: 100, height: 3, x: this.position.x, y: this.position.y-17});
        this._UI.progressBar({backgroundColor: '#5B5B5B', borderColor: '#000', procentages: this.armor, color: '#16E1CC', border: 1, width: 100, height: 3, x: this.position.x, y: this.position.y-10});
        this._UI.printText({text: this.name, font: 'normal 15px Arial', x: this.position.x+10, y: this.position.y-23, color: '#fff'});
    }

    Controll(){
        if (this.position.x<0 || this.position.x>this.gameObject.camera.screen.width-this.gameObject.sprite.width){
            this.velocity.x = this.velocity.x*-1;
        }
        if (this.position.y<0 || this.position.y>this.gameObject.camera.screen.height-this.gameObject.sprite.height){
            this.velocity.y = this.velocity.y*-1;
        }
    }
}