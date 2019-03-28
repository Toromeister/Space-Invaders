class Ship{

    constructor(hoyde, bredde, brettBredde){
        this.x = brettBredde/2;
        this.xdir = 0;
        this.hoyde = hoyde;
        this.bredde = bredde;
    }

    show() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, height-20, this.bredde, this.hoyde)
    }
    setDir(dir) {
        this.xdir = dir;
    }
    move(dir){
        this.x += this.xdir*5;
    }
}