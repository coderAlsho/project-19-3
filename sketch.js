var PLAY = 1;
var END = 0;
var gameState = PLAY;
var runman, runman_running;
var Apple ,AppleImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground, player1;
var score;
var appleGroup, obstacleGroup;



function preload(){
bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("Obstacle.png");
  runman_running = loadAnimation("image-asset.gif");
  AppleImage = loadImage("Apple.jpg");

}

function setup(){
    createCanvas(600, 600);
  
  player1 = createSprite(100, 340, 20, 50);
  player1.addAnimation("runman", runman_running); 
  player1.scale=0.1;
  
  ground = createSprite(400, 370, 800, 10);
  
     appleGroup = new Group();
   obstacleGroup = new Group();
  
  score = 0;
  
}

function draw(){
  background("white");
  
  text("Score: "+ score, 500,50); 
  
  if(gameState===PLAY){
  
    ground.velocityX = -4;
  ground.x=ground.width/2;
  
  if(keyDown("space")&&player1.y >=334.3) {
  player1.velocityY=-2;

    player1.velocityY = player1.velocityY + 0.1;
     player1.collide(ground);
    
    if(gameState===END){
      ground.velocityX=0;
      player1.velocityX=0;
      
       obstacleGroup.setVelocityEach(0);
    appleGroup.setVelocityEach(0);
    obstacleGroup.setLifetimeEach(-1);
    appleGroup.setLifetimeEach(-1);  
    }
  }
   if(appleGroup.isTouching(player1)){
      appleGroup.destroyEach();
      score = score+1;
      
    }
   else if(obstacleGroup.isTouching(player1)){
     gameState=END;
      
      
    }
}
player1.velocityY = player1.velocityY + 0.8
  drawSprites();
console.log(player1.y);
  apple1();
  obstacle1();
}
function apple1(){
 if(World.frameCount%80===0){
  Apple = createSprite(600, 120, 40, 10);
  Apple.addImage(AppleImage);
  Apple.y=Math.round(random(120, 200));
  Apple.scale=0.1; 
  Apple.velocityX = -3; 
  Apple.lifetime = 200; 
   
  appleGroup.add(Apple);
 }
}
  function obstacle1(){
 if(World.frameCount%300===0){
 obstacle = createSprite(600, 340, 20, 50);
 obstacle.addImage(obstacleImage);
 obstacle.scale=0.15;
 obstacle.lifetime=300;
 obstacle.velocityX=-4; 
   
 obstacleGroup.add(obstacle);  
   
 }
    
    
}




