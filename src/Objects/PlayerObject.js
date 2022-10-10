import Animation from '../../Components/engine/Animation.js';
import Keyboard from '../../Components/engine/Keyboard.js';

export default class PlayerObject {
    constructor(props){
        this.gameObject = props.gameObject ?? console.log('ERROR: Choose GameObject for Player!');
        this.position = props.gameObject.position ?? console.log('ERROR: Choose GameObject for Player!');
        this.speed = props.speed ?? 30;
        this.name = props.name ?? 'Noname';
        this.hp = props.hp ?? 100;
        this.armor = props.armor ?? 100;

        this.velocity = {x: 0, y: 0};
        this.speedAnimation = 15;

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

        this.keyboard = new Keyboard();
    }

    Update(deltaTime){
        this.position.x += this.speed * this.velocity.x * deltaTime;
        this.position.y += this.speed * this.velocity.y * deltaTime;
        
        this.gameObject.position = this.position;
        this.gameObject.camera.Move(this.speed*this.velocity.x * deltaTime * -1, this.speed*this.velocity.y * deltaTime * -1);
        
        this.gameObject.sprite.animation = this.animations[""+this.velocity.y][""+this.velocity.x];

        this.Controll();

        this.gameObject.Update();
    }

    Controll(){
        if (this.keyboard.isPress('KeyW')){
            this.velocity.y=-1;
        }  else if (this.keyboard.isPress('KeyS')){
            this.velocity.y=1;
        } else {
            this.velocity.y=0;
        }
        if (this.keyboard.isPress('KeyA')){
            this.velocity.x=-1;
        }  else if (this.keyboard.isPress('KeyD')){
            this.velocity.x=1;
        } else {
            this.velocity.x=0;
        }  
    }
}