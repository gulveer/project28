

const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var tree1; 
var ground;
var stone;
var boy;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var rope1;



function setup() { 
	createCanvas(1600, 700); 
	engine = Engine.create(); 
	world = engine.world; 
	//Create the Bodies Here.
	
	tree1 = new Tree(1100,360,400,500); 
	ground = new Ground(650,600,1600,20); 
	stone = new Stone(110,460,10,10);
	rope1 = new Rope(stone.body,{x:110, y:460});
	mango1 = new Mango(1000,300,50,50);
	mango2 = new Mango(1200,280,50,50);
	mango3 = new Mango(1090,300,50,50);
	mango4 = new Mango(1020,220,50,50);
	mango5 = new Mango(1170,200,50,50);
	mango6 = new Mango(1250,250,50,50);
	mango7 = new Mango(1100,240,50,50);
	
	
	
	Engine.run(engine); 
	} 
	
	function draw() { 
		background("white"); 
		Engine.update(engine);
		tree1.display();
	    ground.display();
	    stone.display();
	    
	    mango1.display();
		mango2.display();
		mango3.display();
		mango4.display();
		mango5.display();
		mango6.display();
		mango7.display();
	    rope1.display();
	
	detectcollision(stone,mango1);
	detectcollision(stone,mango2);
	detectcollision(stone,mango3);
	detectcollision(stone,mango4);
	detectcollision(stone,mango5);
	detectcollision(stone,mango6);
	detectcollision(stone,mango7);

	
	
	}

	function mouseDragged(){
		Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
		
		}
		
	function mouseReleased(){
		rope1.fly();   
		
		
		}

		function keyPressed(){
			if(keyCode === 32){

				rope1.attach(stone.body);
			}
		}

		function detectcollision(lstone,lmango){
		
		mangoBodyPosition = lmango.body.position;
		stoneBodyPosition = lstone.body.position;

		var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

		if(distance <= lmango.r + lstone.r){
     Matter.Body.setStatic(lmango.body, false);

		}
	
	
	
	
	}


		