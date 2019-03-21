var xCanvasSize = 800;
var yCanvasSize = 600;
var drops = [];

function setup(){
    createCanvas(xCanvasSize, yCanvasSize);
    frameRate(60);
    ship = new Ship(30, 20, 600);
    
}

function draw(){
    background(51);
    ship.show();
    ship.move();
    for(let i = 0; i < drops.length; i++){
        drops[i].show();
        drops[i].move();
        if(drops[i].y <= 0){
            drops[i].delete();
        }
    }

    for (var i = drops.length-1; i >= 0; i--) {
        if (drops[i].toDel) {
          drops.splice(i, 1);
        }
    }
    if(keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW)){
        ship.setDir(0);
    }else if(keyIsDown(LEFT_ARROW)){
        ship.setDir(-1);
    }else if(keyIsDown(RIGHT_ARROW)){
        ship.setDir(1);
    }else{
        ship.setDir(0);
    }
    
    if(ship.x<10){
        ship.setDir(1);
    } else if(ship.x > (xCanvasSize-10)){
        ship.setDir(-1);
    }
}

function keyPressed(){
    if (keyCode === UP_ARROW) {
        var drop = new Drop(ship.x, height);
        drops.push(drop);
      }
}
