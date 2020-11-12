
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var crumpledPaper,base;
var binLeft,binBottom, binRight;
function preload()
{
	
}

function setup() {
	createCanvas(1250, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	crumpledPaper=new paper();
	base=new ground(625,590,1250,20);
	binLeft=new Dustbin(560,550,20,80);
	binBottom=new Dustbin(650,580,200,20);
	binRight=new Dustbin(740,550,20,80);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  crumpledPaper.display();
  fill("white");
  stroke("red");
  textSize(20);
  text("Use up and down arrow keys to make the paper ball fall inside the dustbin",200,40);
  base.display();
  binLeft.display();
  binRight.display();
  binBottom.display();
  keyPressed();
  drawSprites(); 
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:1,y:-5});
	}
	if(keyCode===DOWN_ARROW)
	{
		Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:1,y:4.5});
	}
}


