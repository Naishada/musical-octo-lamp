//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var umbrella;
var maxDrops = 100;
var drops = [];
function preload(){
   
}

function setup(){
    createCanvas(1000,700); 

    engine = Engine.create();
	world = engine.world;

    umbrella = new Umbrella(500,600);
    Engine.run(engine);
}

function draw(){
    background("black");

    for(var i = 0;i<maxDrops;i++){
        drops.push(new Drop(random(0,1000),random(0,700)));
    }
      for(var j = 0 ; j < maxDrops; j++){
        drops[j].display();
      }
    

    
    umbrella.display();
    
}   