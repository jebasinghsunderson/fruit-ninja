var nife
var enemy,enemy2;
var fruit1,fruit2,fruit3,fruit4,fruit;
var nifeimage,fruit1image,fruit2image,fruit3image,fruit4image,enemyimage,enemyimage2,backgroundImage  ;
var fruitGroup,enemyGroup;
var nifeSound,gameoverSound;
var PLAY=1;
var END=0;
var gameState=PLAY;

var gameover,gameoverimage;

var score=0;
function preload(){
  
   nifeimage = loadImage("sword.png");
  
   fruit1image = loadImage("fruit1.png");
   fruit2image = loadImage("fruit2.png");
   fruit3image = loadImage("fruit3.png");
   fruit4image = loadImage("fruit4.png");

   backgroundImage = loadImage("background.jpeg");
  
   enemyimage = loadImage("alien1.png");
   enemyimage2 = loadImage("alien2.png");
  
   gameoverimage = loadImage("gameover.png");
  
   nifeSound = loadSound("knifeSwooshSound.mp3");
   gameoverSound=loadSound("gameover.mp3")
}
function setup(){
  
  createCanvas(600,600);
  
 background =createSprite(0,0,600,200);
  background.addImage(backgroundImage);
  background.scale=3.0;
  
  nife=createSprite(300,50,20,20);
  nife.addImage(nifeimage);
  nife.scale=0.5;
 
 fruitGroup= new Group();
  enemyGroup= new Group();
  
  
}

function draw(){
  if(gameState===PLAY){
     nife.x =mouseX;
    nife.y =mouseY;
     
    spawnfruit();
     spawnEnemy();
                                                                          
    
  if(fruitGroup.isTouching(nife)){
      fruitGroup.destroyEach();
      nifeSound.play();
      score=score+2;
  }
  if(enemyGroup.isTouching(nife)){
      gameoverSound.play();
      gameState=END;
  }
 }
  if (gameState===END){
    
      gameover=createSprite(320,220,10,10)
      gameover.addImage(gameoverimage);
      nife.y=280;
      nife.x=280;
}
    // console.log(frameCount)  
  drawSprites();
     
  fill("black");
     textSize(20);
    text("score:"+score,250,30);
}

function spawnfruit(){
  if(World.frameCount % 60 === 0){
    rand=Math.round(random(1,4)); 
/* switch(rand){
     case 1:fruit.addImage("fruit1",fruit1image);
        break;
     case 2:fruit.addImage("fruit2",fruit2image) 
        break;
     case 3:fruit.addImage("fruit3",fruit3image);
        break;
     case 4:fruit.addImage("fruit4",fruit4image) 
        break;  
      default:
      break;
   }*/
      fruit=createSprite(600,200,10,10);
       fruit.scale=0.2;
    if (rand == 1){
      fruit.addImage("fruit1",fruit1image);
    }else if (rand == 2){
      fruit.addImage("fruit2",fruit2image) ;
    }else if (rand == 3){
      fruit.addImage("fruit3",fruit3image) ;
    }else  {
      fruit.addImage("fruit4",fruit4image) ;
    }

      fruit.y=Math.round(random(10,470))
      fruit.velocityX=-(8+2*score/8);
      fruit.lifetime=70;
     fruitGroup.add(fruit);
  }
}
function spawnEnemy(){
     if(World.frameCount % 200 === 0){
    enemy=createSprite(600,200,10,10);
    enemy.addAnimation("moving",enemyimage)
    enemy.velocityX=-(9+2*score/10);
    enemy.lifetime=100;
    enemy.y=Math.round(random(100,300));
    enemyGroup.add(enemy); 
   }
  }

