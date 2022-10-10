import Window from "../Components/engine/Window.js";
import Animation from "../Components/engine/Animation.js";
import PlayerObject from "../src/Objects/PlayerObject.js";
import Camera from "../Components/engine/Camera.js";
import NPC from "../src/Objects/NPC.js";
import {renderUI, UIOptions} from "./UIRender.js";
import ObjectsManager from "../Components/engine/ObjectsManager.js"
import Sprite from "../Components/engine/Sprite.js";
import GameObject from "../Components/engine/GameObject.js";
import PhysicComponent from "../Components/engine/GameComponents/Physic.js";
import TestComponent from "../Components/engine/GameComponents/TestComponent.js";

let Screen = new Window('screen', '#000');
let MainCamera = new Camera({screen: Screen});

let ObjManager = new ObjectsManager();

let Grass = new Sprite({
    width: 150, height: 150, animation : new Animation({
        path: '../src/Textures/Grass', loop: false
    })
});

let box = ObjManager.AddObject(0, new GameObject({
    name: 'Box', position: {x: 400, y: 400}, tag: 'box', camera: MainCamera, sprite: new Sprite({
        width: 100, height: 100, animation: new Animation({
            path: '../src/Textures/Floor', loop: false
        })
    })
}));

let Tree = ObjManager.AddObject(3, new GameObject({
    name: 'Tree', position: {x: 750, y: 150}, tag: 'box', camera: MainCamera, sprite: new Sprite({
        width: 150, height: 283, animation: new Animation({
            path: '../src/Textures/Wood', loop: true, frames: 10, speed: 25
        })
    })
}));
box.AddComponent(new PhysicComponent({parent: box, triger: true}));
box.AddComponent(new TestComponent());

console.log(box.components);

export let Player = ObjManager.AddObject(1, new PlayerObject({
    gameObject: new GameObject({
        name: 'PlayerObject', position: {x: Screen.width/2-102/2, y: Screen.height/2-102/2},
        teg: 'Player', camera: MainCamera, sprite: new Sprite({
            width: 102, height: 102, animation: new Animation({
                path: '../src/Textures/Player/State', loop: false
            })
        })
    }),
    name: 'James Bond', hp: 85, armor: 34, speed: 100
}));

Player.gameObject.AddComponent(new PhysicComponent({parent: Player.gameObject}));

ObjManager.AddObject(2, new NPC({
    gameObject: new GameObject({
        name: 'NPC object victor', position: {x: 100, y: 300}, teg: 'NPC', camera: MainCamera,
        sprite: new Sprite({
            width: 102, height: 102, animation: new Animation({
                path: '../src/Textures/Player/State', loop: false
            })
        })
    }),
    name : 'Victor', hp: 30, armor: 15, speed: 100
}));

ObjManager.AddObject(2, new NPC({
    gameObject: new GameObject({
        name: 'NPC object victor', position: {x: 200, y: 100}, teg: 'NPC', camera: MainCamera,
        sprite: new Sprite({
            width: 102, height: 102, animation: new Animation({
                path: '../src/Textures/Player/State', loop: false
            })
        })
    }),
    name : 'Leha', hp: 100, armor: 100, speed: 100
})).velocity = {x: -1, y: 1};

ObjManager.AddObject(2, new NPC({
    gameObject: new GameObject({
        name: 'NPC object victor', position: {x: 400, y: 500}, teg: 'NPC', camera: MainCamera,
        sprite: new Sprite({
            width: 102, height: 102, animation: new Animation({
                path: '../src/Textures/Player/State', loop: false
            })
        })
    }),
    name : 'Kolya', hp: 87, armor: 78, speed: 100
})).velocity = {x: 1, y: 1}

UIOptions(Screen);

export default function Loop(deltaTime){
    Screen.clear();
    
    for (let y=0; y<Screen.height/Grass.width; y++){
        for (let x=0; x<Screen.width/Grass.width; x++){
            Grass.Draw(MainCamera, x*Grass.width, y*Grass.height);
        }
    }

    ObjManager.Update(deltaTime);
    renderUI(Screen);
}