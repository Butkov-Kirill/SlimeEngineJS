export default class Keyboard {
    keys = {};
    constructor(){
        addEventListener('keydown', (e) => {
            this.keys[`${e.code}`] = 'press';
        });
        addEventListener('keyup', (e) => {
            this.keys[`${e.code}`] = 'down';
        });
    }

    isPress(key){
        if (this.keys[`${key}`] == 'press'){
            return true;
        } else {
            return false;
        }
    }
}