var xCanvasSize = 800;
var yCanvasSize = 600;
var drops = [];
var sizeEnemy = 40;
var hastighet = 2;
var speedX = hastighet;
var speedY = hastighet;
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
        for(var j = 0; j < enemyArray.length; j++){
            for(var l = 0; l < enemyArray[j].length; l++){
                if(drops[i].hits(enemyArray[j][l]) && enemyArray[j][l].size>0){
                    drops[i].delete();
                    enemyArray[j][l].delete();
                }
            }
        }
    }
    for(var i = drops.length-1; i >= 0; i--) {
        if (drops[i].toDel) {
          drops.splice(i, 1);
        }
    }
    //Enemy
    for(var i=0; i<enemyArray.length; i++){
        for(var j=0; j<enemyArray[i].length; j++){
            enemyArray[i][j].show();
            if(enemyArray[i][j].toDel){
                //debugger;
                //enemyArray[i][j].splice(i,1)
                enemyArray[i][j].size = 0;
                enemyArray[i][j].toDel = false; 
                //console.log(enemyArray[i])
                if(erTomt(enemyArray)){
                    setTimeout(nyArray(),2000);
                    //hastighet++;
                }
            }
        }
    }

    posX += speedX;

    for(var i=0; i<enemyArray.length; i++){
        for(var j=0; j<enemyArray[i].length; j++){

            if(enemyArray[i][j].size > 0){ //Enemies som ikke er skutt
                enemyArray[i][j].move(90*i+marginX+posX,50*j+marginY+posY);
                //enemyArray[i][j].move(speedX,0)
                if(enemyArray[i][j].y > 500){
            
                }
                if(enemyArray[i][j].x > xCanvasSize-(sizeEnemy/2)){
                    posY += speedY;
                    speedX = -hastighet;
                }else if(enemyArray[i][j].x < (sizeEnemy/2)){
                    posY += speedY;
                    speedX = hastighet;
                }
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
function nyArray(){
    posX = 1;
    posY = 1;
    for(i=0; i<7; i++){
        enemyArray[i]=[];
        for(j=0; j<5; j++){
            enemyArray[i][j] = new Enemy(90*i+marginX+posX,50*j+25+marginY+posY,sizeEnemy);
        }
    }
}
function erTomt(array){
    for(let i = 0; i<array.length; i++){
        console.log(array.length);
        for(let j = 0; j<array[i].length; j++)
        if(array[i][j].size>0){
            return false;
        }
    }
    return true;
}
