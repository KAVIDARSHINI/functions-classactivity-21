var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 70, 40);
  movingRect = createSprite(400,300, 40,70);

  gameObject1 = createSprite(100,50,50,50);
  gameObject1.shapeColor = "red";
  gameObject2 = createSprite(200,50,50,50);
  gameObject2.shapeColor = "red";  
  gameObject3 = createSprite(300,50,50,50);
  gameObject3.shapeColor = "red";
  gameObject4 = createSprite(400,50,50,50);
  gameObject4.shapeColor = "red";
  fixedRect.shapeColor = "pink";
  movingRect.shapeColor = "pink";

  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(255,255,255); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(isTouching(movingRect,gameObject2)){
    gameObject2.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }else{
    gameObject2.shapeColor = "pink";
    movingRect.shapeColor = "pink";
  }
 
  
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width / 2 + object1.width / 2 && 
    object2.x - object1.x < object2.width / 2 + object1.width/ 2 &&
    object1.y - object2.y < object2.height / 2 + object1.height / 2 && 
    object2.y - object1.y < object2.height / 2 + object1.height / 2) {

      return true;

   
  } else {
    return false;
    
  }
}