var xCanvasSize = 800;
var yCanvasSize = 600;
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
}

function draw(){
    background(51);

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
}