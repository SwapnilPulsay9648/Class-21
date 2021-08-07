var ball, ball2, ballBig, ballSmall;


function setup() {
  createCanvas(800,400);
  ball = createSprite(400, 200, 50, 50);
  ball.shapeColor = "green"
  ball.debug=true;
  ball2 = createSprite(200, 150, 50, 50);
  ball2.shapeColor = "green"
  ball2.debug=true;
  ballBig = createSprite(250, 350, 50, 50);
  ballBig.shapeColor = "blue"
  ballSmall = createSprite(350, 250, 50, 50);
  ballSmall.shapeColor = "blue"



}

function draw() {
  background("black");  

  ball.x = World.mouseX;
  ball.y = World.mouseY;

  if(isTouching(ball,ballSmall)){
    ball.shapeColor = "red"
    ballSmall.shapeColor = "red"
  }else{
    ball.shapeColor = "green"
    ballSmall.shapeColor = "green"
  }



  
  drawSprites();
}








