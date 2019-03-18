class Drop{
    constructor(x, y){
        this.x = x;
        this.y = y; 
        this.r = 8;
        this.toDel = false;
    }
    show(){
        noStroke();
        fill(150, 0, 255);
        ellipse(this.x, this.y-40, this.r*2, this.r*2);
    }
    hits(enemy){
        var distanse = dist(this.x, this.y, enemy.x, enemy.y);
        if(distanse < this.r + enemy.size){
            return true;
        } else{
            return false; 
        }
    }
    move(){
        this.y = this.y - 5;
    }
    delete(){
        this.toDel=true;
    }

}
