var shipImg1,seaImg,imageSea,ship;
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  
}

function setup(){
  createCanvas(400,400);
  //background("black");
  imageSea = createSprite(200,200);

  imageSea.addImage(seaImg);
  imageSea.scale=0.25;
  imageSea.velocityX=-3;
  ship=createSprite(70,200,30,30);
  ship.addAnimation('ship',shipImg1);
  ship.scale=0.2;
  }

function draw() {
background("blue");
if (imageSea.x<0){
  imageSea.x=imageSea.width/8;
}
  
  
  
  drawSprites()
}
 
