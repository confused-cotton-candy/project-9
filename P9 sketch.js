function setup() {
  createCanvas(400, 400);
 box=createSprite(200,200,30,30);}

function draw() {
  background("white");
    drawSprites();
createEdgeSprites();
if(keyIsDown(LEFT_ARROW))
    {box.x=box.x-5;
      background("pink")}
      if(keyIsDown(RIGHT_ARROW))
      {box.x=box.x+5;
      background("yellow")}
      if(keyIsDown(DOWN_ARROW))
      {box.y=box.y+5;
      background("green")}
      if(keyIsDown(UP_ARROW))
      {box.y=box.y-5;
      background("blue")}
      box.bounceOff(edges);

    }






