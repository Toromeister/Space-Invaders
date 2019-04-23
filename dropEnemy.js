class DropEnemy{
    constructor(x, y){
        this.x = x;
        this.y = y-40; 
        this.r = 6;
        this.toDel = false;
    }
    show(){
        fill(255, 0, 0);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
    hits(ship){ 
        var distanse = dist(this.x, this.y, ship.x, ship.y);
        if(distanse < this.r + (ship.hoyde/2)){
            return true;
        } else{
            return false; 
        }
    }
    move(){
        this.y = this.y + 5;
    }
    delete(){
        this.toDel=true;
    }
}