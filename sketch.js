var path,mainCyclist, cyclistC, cyclistG;
var pathImg,mainRacerImg1,mainRacerImg2;
var reni, reniI;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  reniI = loadImage("images/reinici.webp");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  
  
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);


//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
mainCyclist.setCollider("rectangle", 1 , 1, mainCyclist.width - 270, mainCyclist.height -380)
  
cyclistG = new Group();

reni = createSprite( 230, 140, 20, 20);
reni.addImage("ickdf", reniI);
reni.scale = 0.5;
reni.visible = false;
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
    
   ciCa();
    
   path.velocityX = -5;
    
  if(mainCyclist.isTouching(cyclistG)){
      gameState = END
    }
  
  if(frameCount%20 === 0){
    distance = distance + 5
  }
    
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
    
 }
  
  if(gameState === END){
    cyclistG.setVelocityXEach(0);
    path.velocityX = 0;
    reni.visible =true;
    
    if(mousePressedOver(reni)){
      gameState=PLAY
      restert();
    }
    
  }
  
}

function ciCa(){
  if (frameCount%200 === 0){
    var y = Math.round(random(25,275));
    cyclistC = createSprite(550, y, 20, 20);
    cyclistC.addAnimation("fioi", mainRacerImg2);
    cyclistC.scale = 0.065;
    cyclistC .velocityX = -3;
    cyclistC.setCollider("rectangle", 1 , 1, cyclistC.width - 100, cyclistC.height -380)
    cyclistG.add(cyclistC);
    
  }
  
}


function restert(){
  cyclistG.destroyEach();
  distance = 0
  
  reni.visible = false
}



