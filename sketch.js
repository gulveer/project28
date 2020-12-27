
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree1;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 tree1 = new Tree(1200,650,20,600);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
  tree1.display();
  drawSprites();
 
}



