var xCanvasSize = 800;
var yCanvasSize = 600;
var drops = [];
var sizeEnemy = 40;
var hastighet = 2;
var speedX = hastighet;
var speedY = 25;
var posX = 1;
var posY = 1;
var marginY =75;
var marginX = 100;
var enemyArray = [];
var enemyDrops = [];
var score = 0;
var ship;
var bildeEnemy;


function setup(){
    createCanvas(xCanvasSize, yCanvasSize);
    rectMode(CENTER);
    bildeEnemy = loadImage("enemy.png");
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
    text(score, 10, 30);
    textSize(20);

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
                    score +=10;
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
    for(var i = enemyDrops.length-1; i >= 0; i--) {
        if (enemyDrops[i].toDel) {
          enemyDrops.splice(i, 1);
        }
    }
    //Enemy
    for(var i=0; i<enemyArray.length; i++){
        for(var j=0; j<enemyArray[i].length; j++){
            if(!enemyArray[i][j].isDel){
                enemyArray[i][j].show();
            } 
            if(enemyArray[i][j].toDel){
                enemyArray[i][j].size = 0;
                enemyArray[i][j].toDel = false; 
                enemyArray[i][j].isDel = true;
                if(erTomt(enemyArray)){
                    hastighet += 0.2;
                }
            }
        }
    }

    posX += speedX;

    for(var i=0; i<enemyArray.length; i++){
        for(var j=0; j<enemyArray[i].length; j++){
            if(!enemyArray[i][j].isDel){ //Enemies som ikke er skutt
                enemyArray[i][j].move(90*i+marginX+posX,50*j+marginY+posY);
                if(enemyArray[i][j].y > 520){
                    noLoop();
                    setTimeout(function(){location.reload(true)},100);
                }
                if(enemyArray[i][j].x > xCanvasSize-(sizeEnemy/2)){
                    posY += speedY;
                    speedX = -hastighet;
                    break;
                }else if(enemyArray[i][j].x < (sizeEnemy/2)){
                    posY += speedY;
                    speedX = hastighet;
                    break;
                }
            }
        }
    }
    //Enemy drops
    for(let i = 0; i < enemyDrops.length; i++){
        enemyDrops[i].show();
        enemyDrops[i].move();
        if(enemyDrops[i].y > (yCanvasSize+marginY)){
            enemyDrops[i].delete();
        }
        if(enemyDrops[i].hits(ship)){
            for(let i = 0; i<enemyDrops.length; i++){
                enemyDrops[i].delete();
            }
            noLoop();
            setTimeout(function(){location.reload(true)},100);
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
    enemyDropProb(enemyDrops);
}

function enemyDropProb(array){
    prob = 50+(array.length*3);
    var randomTall = Math.floor(random(prob));
    //console.log(randomTall);
    if(randomTall===1){
        makeEnemyDrop(enemyArray);
    }

}
 
function makeEnemyDrop(array){
    var tempRandom = random(array);
    var randomElement = random(tempRandom);
    console.log(randomElement);
    
    if(randomElement.size > 0){
        var enemyDrop = new DropEnemy(randomElement.x, randomElement.y);
        enemyDrops.push(enemyDrop);
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
    speedX = hastighet;
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
