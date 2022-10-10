import Camera from "../Components/engine/Camera.js";
import Sprite from "../Components/engine/Sprite.js";
import Animation from "../Components/engine/Animation.js";
import Screen from "./Game.js";
import {Player} from "./Game.js"
import _UI from "../Components/engine/UI.js";

let UICamera = new Camera({screen: Screen});
let UI = null;
const DefaultFont = (size) => {
    return `bold ${size}px Arial`;
}

let PlayerPanel = new Sprite({
    width: 191*2, height: 54*2, animation: new Animation({
        path: '../src/Textures/UI/PlayerPanel', loop: false
    })
});
export function UIOptions(screen){
    UICamera.screen = screen;
    UI = new _UI(UICamera);
    PlayerPanel.x = UICamera.screen.width/2-PlayerPanel.width/2;
    PlayerPanel.y = UICamera.screen.height-PlayerPanel.height-25;
}

export function renderUI(){
    PlayerPanel.Draw(UICamera, PlayerPanel.x, PlayerPanel.y);
    UI.printText({text: 'Name: '+Player.name, x: PlayerPanel.x+115, y: PlayerPanel.y+25, font: DefaultFont(15), color: '#F9F9F9'});
    UI.printText({text: 'HP:', x: PlayerPanel.x+115, y: PlayerPanel.y+50, font: DefaultFont(15), color: '#F9F9F9'});
    UI.progressBar({backgroundColor: '#5B5B5B', borderColor: '#000', procentages: Player.hp, border: 3, color: '#D10000', x: PlayerPanel.x+180, y: PlayerPanel.y+40, width: 180, height: 10});
    UI.printText({text: 'Armor:', x: PlayerPanel.x+115, y: PlayerPanel.y+50+30, font: DefaultFont(15), color: '#F9F9F9'});
    UI.progressBar({backgroundColor: '#5B5B5B', borderColor: '#000', procentages: Player.armor, border: 3, color: '#16E1CC', x: PlayerPanel.x+180, y: PlayerPanel.y+40+30, width: 180, height: 10});
    UI.printText({text: 'AWSD - Move', x: 20, y: 25, font: DefaultFont(20), color: '#fff'});
    UI.printText({text: 'Slime Engine JS v0.0.1', x: 20, y: UICamera.screen.height-30, font: DefaultFont(20), color: '#fff'});
}