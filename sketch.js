const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies


var myengine,myworld,object

function setup() {
  createCanvas(400,400);

  myengine=Engine.create();
  myworld=myengine.world;

  var option={
  isStatic:true
  }

var bounce={
  restitution:1.2
}

  ground= Bodies.rectangle(200,380,400,10,option);
  World.add(myworld,ground);
 
  ball=Bodies.circle(200,300,40,bounce)
  World.add(myworld,ball);
}

function draw() {
  background(0);  
  Engine.update(myengine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipseMode(CENTER)
  ellipse(ball.position.x, ball.position.y ,40,40);
  drawSprites();
}
