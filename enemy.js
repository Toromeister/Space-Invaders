class Enemy{
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.toDel = false;
        this.isDel = false;
    }

    show(){
        fill(255);
        imageMode(CENTER);
        //rect(this.x, this.y, this.size, this.size-6);
        //ellipse(this.x, this.y, this.size, this.size)
        image(bildeEnemy, this.x, this.y, 50, 35);
    }
    move(xpos, ypos){
        this.x = xpos;
        this.y = ypos;
    }
    delete(){
        this.toDel = true;
    }
}