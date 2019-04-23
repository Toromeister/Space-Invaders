class Enemy{
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.toDel = false;
        this.isDel = false;
    }

    show(){
        imageMode(CENTER);
        image(bildeEnemy, this.x, this.y);
    }
    move(xpos, ypos){
        this.x = xpos;
        this.y = ypos;
    }
    delete(){
        this.toDel = true;
    }
}