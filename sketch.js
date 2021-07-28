var running, pathImg, path, runner, leftboundary, rightboundary;
function preload(){
 
  running=loadAnimation("runner-1.png", "runner-2.png")
  pathImg=loadImage("path.png");
  
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/2;
  runner = createSprite(200,300,20,20);
  runner.addAnimation("runner", running);
  runner.scale = 0.07;
  leftboundary=createSprite(0,300,100,600);
  rightboundary=createSprite(390,300,80,600);
 leftboundary.visible=false;
rightboundary.visible=false;
}

function draw() {
  background(0);
  
  path.velocityY=5;
  runner.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ;
  
  
}
  runner.collide(leftboundary);
  runner.collide(rightboundary);
  edges=createEdgeSprites();
  runner.collide(edges[3]);
drawSprites();
}
