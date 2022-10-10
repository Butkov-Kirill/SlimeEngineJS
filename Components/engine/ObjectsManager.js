export default class ObjectsManager{
    objects = [];
    constructor(){

    }

    AddObject(layer, object){
        if (!this.objects[layer]){
            this.objects[layer] = [];
        }
        this.objects[layer].push(object);
        return object;
    }

    Update(deltaTime){
        for(let i=0; i<this.objects.length; i++){
            if (this.objects[i]){
                for (let j=0; j<this.objects[i].length; j++){
                    if (this.objects[i][j]){
                        this.objects[i][j].Update(deltaTime);
                    }
                }
            }
        }
    }
}