

const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
var tree1; 

function setup() { 
	createCanvas(1600, 700); 
	engine = Engine.create(); 
	world = engine.world; 
	//Create the Bodies Here.
	 
	tree1 = new Tree(1000,300,400,500); 
	 
	 Engine.run(engine); 
	} 
	
	function draw() { 
		background(0); 
		tree1.display();
	 }

