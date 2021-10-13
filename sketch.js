var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var ed;
var coin;
var bob;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  energyDrink = loadImage("energyDrink.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
boy.setCollider("rectangle",0,0,100 ,100);




leftBoundary=createSprite(0,0,100,800);


// leftBoundary.invisible = false;
// leftBoundary.visible = true;
leftBoundary.invisible = true;
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

 if(path.y > 400 ){
    path.y = height/2;
  }

if(path.y > 400 ){
   
  path.y = height/2;
  }

  if(path.y > 400 ){
 path.y = height/2;
}



 if(path.y > 400 ){
   path.y = height/2;
  }

 endr();

  drawSprites();
}

function endr(){
  if (frameCount % 50 === 0) {
    ed=createSprite(600,0,20,20)
    ed.velocityY=4
    ed.scale=.1
    ed.addImage(energyDrink)
    //ed.y=Math.round(random(0,0))
    ed.x=Math.round(random(50,350))
    ed.setCollider("rectangle",0,0,100,100);
  } 
}

