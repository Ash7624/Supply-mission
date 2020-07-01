var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var wall,wall2,wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1200,400);
    rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	wallsprite=createSprite(400,640,200,20);
	wallsprite.shapeColor="red";

	wall2sprite=createSprite(300,550,20,200);
	wall2sprite.shapeColor="red";

	wall3sprite=createSprite(500,560,20,200);
	wall3sprite.shapeColor="red";



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 wall=Bodies.rectangle(400,640,200,20, {isStatic:true} ) 
	 World.add(world, wall);
wall2=Bodies.rectangle(300,550,20,200,{isStatic:true});
	World.add(world,wall2);	 
wall3=Bodies.rectangle(500,560,20,200);
	World.add(world,wall3);
	
	Engine.run(engine);
  
}


function draw() {

  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  wallsprite.y=wall.position.y;
  wallsprite.x=wall.position.x;
  wall2sprite.x=wall2.position.x;
  wall2sprite.y=wall2.position.y;
  wall3sprite.x=wall3.position.x;
  wall3sprite.y=wall3.position.y;
  drawSprites();
  keyPressed()
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    package.velocityY = -1;
  }
}



