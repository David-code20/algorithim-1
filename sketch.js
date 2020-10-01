var mrect,frect;
function setup() {
  createCanvas(800,400);
  frect=createSprite(200,200,50,80);
  frect.shapeColor="green"
  frect.velocityY=5
  mrect=createSprite(400, 200, 80, 30);
  mrect.shapeColor="green";
  mrect.velocityY=-5
  o1=createSprite(100,100,50,50);
  o1.shapeColor="green";
  o2=createSprite(200,100,50,50);
  o2.shapeColor="green";
  o3=createSprite(300,100,50,50);
  o3.shapeColor="green";
}

function draw() {
  background(255,255,255);
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;
 if (isTouching(mrect,o2)) {
  o2.shapeColor="blue"
  mrect.shapeColor="blue"  
 } 
 else{
  o2.shapeColor="green"
  mrect.shapeColor="green"
 }
 bounceOff(mrect,frect)
  drawSprites();
}
function isTouching(ob1,ob2){
  if (ob1.x-ob2.x<ob1.width/2+ob2.width/2
    && ob2.x-ob1.x<ob1.width/2+ob2.width/2
    && ob1.y-ob2.y<ob1.height/2+ob2.height/2 
    && ob2.y-ob1.y<ob1.height/2+ob2.height/2 ) {
    return true;
  } 
   else {
    return false;
   }
}
function bounceOff(object1,object2){ 
  if (object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2) { 
  object1.velocityX = object1.velocityX * (-1);
   object2.velocityX = object2.velocityX * (-1); }
 if (object1.y - object2.y < object2.height/2 + object1.height/2 
  && object2.y - object2.y < object2.height/2 + object1.height/2) 
 { 
    object1.velocityY = object1.velocityY * (-1);
   object2.velocityY = object2.velocityY * (-1);
   }
  }
