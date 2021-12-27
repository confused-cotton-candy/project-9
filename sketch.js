function setup() {
  createCanvas(400, 400);
 box=createSprite(200,200,30,30);}


 function draw() {
  background(box.x,box.y,225);
    drawSprites();
createEdgeSprites();
if(keyIsDown(LEFT_ARROW))
    {box.x=box.x-5;}
      if(keyIsDown(RIGHT_ARROW))
      {box.x=box.x+5;}
      if(keyIsDown(DOWN_ARROW))
      {box.y=box.y+5;}
      if(keyIsDown(UP_ARROW))
      {box.y=box.y-5;}
      box.bounceOff(edges);

    }




