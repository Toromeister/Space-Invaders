class Ship{

    constructor(ypos,hoyde, bredde, brettBredde){
        this.x = brettBredde/2;
        this.y = ypos;
        this.xdir = 0;
        this.hoyde = hoyde;
        this.bredde = bredde;
    }

    show() {
        imageMode(CENTER);
        image(bildeShip, this.x, this.y, this.bredde, this.hoyde);
    }
    setDir(dir) {
        this.xdir = dir;
    }
    move(){
        this.x += this.xdir*3;
    }
}