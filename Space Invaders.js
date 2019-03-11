var xCanvasSize = 600;
var yCanvasSize = 400;

function setup(){
    createCanvas(xCanvasSize, yCanvasSize);
    frameRate(60);
}

function keyPressed(){
    switch(keyCode){
        case RIGHT_ARROW:
            moveRight = 1;
            break;
        case LEFT_ARROW:
            moveLeft = 1
            break;
        case UP_ARROW:
            shoot = 1/sec;
            break;
    }

}

function draw(){
    background(51);
}

function playerShip(){
    
}
