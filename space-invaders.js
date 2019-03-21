var xCanvasSize = 800;
var yCanvasSize = 600;
var drops = [];
var sizeEnemy = 35;
var speedX = 5;
var speedY = 5;
var posX = 1;
var posY = 1;
var marginY =75;
var marginX = 100;
var enemyArray = [];


function setup(){
    createCanvas(xCanvasSize, yCanvasSize);
    rectMode(CENTER);
    for(i=0; i<7; i++){
        enemyArray[i]=[];
        for(j=0; j<5; j++){
            enemyArray[i][j] = new Enemy(90*i+marginX+posX,50*j+25+marginY+posY,sizeEnemy);
        }
    }
    ship = new Ship(30, 20, 600);
}

function draw(){
    background(51);
    ship.show();
    ship.move();

    //Fjerner skudd
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
    //Enemy
    for(i=0; i<enemyArray.length; i++){
        for(j=0; j<enemyArray[i].length; j++){
            enemyArray[i][j].show();
        }
    }

    posX += speedX;

    for(i=0; i<enemyArray.length; i++){
        for(j=0; j<enemyArray.length; j++){
            enemyArray[i][j] = new Enemy(90*i+marginX+posX,50*j+marginY+posY,sizeEnemy);

            if(enemyArray[i][j].y > 500){
            
            }
            if(enemyArray[i][j].x > 780 ||enemyArray[i][j].x < 0){
                posY += speedY;
                speedX = -speedX;
            }
        }
    }
    //Bevegelse
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
