var box1,box;
var ground
var boxGroup
var score;
var boxArray = [];
function setup()
 {
    createCanvas(displayWidth,displayHeight);

    ground=createSprite(displayWidth/2, displayHeight-120, displayWidth, 20);
    ground.shapeColor="peru";

    box1=createSprite(displayWidth/2,displayHeight-130,150,25)
    box1.shapeColor="blue"
    boxGroup=createGroup();
    score = 0;
}

function draw() 
{
  background("peachpuff"); 
  textSize(30);
  fill("black");
  text("SCORE: "+ score,displayWidth-200,50)
  box1.collide(ground)
  boxGroup.collide(ground)
  boxGroup.collide(box1);
 // boxGroup.collide(boxGroup)
  
  boxes();
  if(keyDown("d")){
    box.velocityX=0;
    box.velocityY=10;
  }
  if(boxGroup.isTouching(box)){
    boxGroup.setVelocityYEach(0)
  }
  if(boxGroup.x>1000){
    boxGroup.x=0;
  }
  for(var i = 0;i<=boxArray.length;i++){
    //console.log(boxArray[i])
    
    //console.log(boxArray[i+1])
   if(boxArray[i].x===boxArray[i+1].x){
    text("hello!"+i,500,500)
      score++;
      
    }
    else{
      text("wrong!",500,500)

    

  }}

  drawSprites();
}
function boxes(){
 if(frameCount%150===0)
  {
    box=createSprite(0,100,150,25);
    box.shapeColor=rgb(random(0,255),random(0,255),random(0,255))
    //box.debug=true;
    box.velocityX=10;
    boxGroup.add(box)
    boxArray.push(box);
    console.log(boxArray.length)
    //console.log(boxArray);
    //box.y=boxGroup.y-100;
    
  }
 
}