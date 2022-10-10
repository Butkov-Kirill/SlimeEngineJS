export default class Update{
    constructor(_functionUpdate){
        this.functionUpdate = _functionUpdate;

        this.deltaTime = 0;
        this.lastUpdate = 0;
        this.maxInterval = 40;

        this.update = this.update.bind(this);
        this.update();
    }

    update(currentTime = 0){
        requestAnimationFrame(this.update);

        this.deltaTime = currentTime - this.lastUpdate;

        if (this.deltaTime < this.maxInterval){
            this.functionUpdate(this.deltaTime / 1000);
        }

        this.lastUpdate = currentTime;
    }
}