export default class GameObject {
    constructor(props){
        this.position = props.position ?? {x: 0, y: 0};
        this.name = props.name ?? 'NewObject';
        this.teg = props.teg ?? 'default;'
        this.camera = props.camera ?? console.log('ERROR: Choose camera for object "'+this.name+'"!');
        this.sprite = props.sprite ?? console.log('ERROR: Choose sprite for object "'+this.name+'"!');
        this.components = [];
    }

    AddComponent(component){
        this.components[this.components.length] = component;
    }

    Update(){
        for (let i=0; i<this.components.length; i++){
            if (this.components[i].name){
                this.components[i].update();
            }
        }
        this.sprite.Draw(this.camera, this.position.x, this.position.y);
    }
}