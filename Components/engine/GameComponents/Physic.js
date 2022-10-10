export default class Physic {
    constructor(props){
        this.name = 'Physic';
        this.triger = props.triger ?? false;
        this.parent = props.parent ?? console.log('ERROR: Choose parent for component "'+this.name+'"!');
    }

    update(){
        
    }
}