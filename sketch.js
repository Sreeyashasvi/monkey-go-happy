
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  bananaGroup=new Group();
  obstaclesGroup=new Group();
  
}


function draw() {
  background("white");
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  spawnbananas();
  spwanobstacles();
  drawSprites();

  
}


function spawnbananas() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
}
function spwanobstacles(){
  if (frameCount % 100 === 0){
    var obstacles = createSprite(250,600,40,10);
    obstacles.y = Math.round(random(325,325));
    obstacles.addImage(obstacleImage);
    obstacles.scale = 0.1;
    obstacles.velocityX = -5;
    
    obstacles.lifetime = 300;
    
    obstaclesGroup.add(obstacles);
  }
}


