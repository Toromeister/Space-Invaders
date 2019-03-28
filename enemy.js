class Enemy{
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.toDel = false;
    }

    show(){
        fill(255);
        //rect(this.x, this.y, this.size, this.size-6);
        ellipse(this.x, this.y, this.size, this.size)
    }
    move(xpos, ypos){
        this.x = xpos;
        this.y = ypos;
    }
    delete(){
        this.toDel = true;
    }
}