class Enemy{
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        this.size = size;
    }

    show(){
        fill(255);
        rect(this.x, this.y, this.size, this.size-6);
    }
}
