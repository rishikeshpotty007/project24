
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinO,paperO,groundO;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
    dustbinO = new dustbin(1200,650);
	paperO = new paper(200,450,40);
	groundO = new ground(width/2,670,width,20);
	//Create the Bodies Here.
	var render = Render.create({
		 element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false 
		} 
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinO.display();
  paperO.display();
  groundO.display();
  drawSprites();
 
}
function keyPressed() {
	 if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(paperO.body,paperO.body.position,{x:85,y:-85});
	 } 
	}


