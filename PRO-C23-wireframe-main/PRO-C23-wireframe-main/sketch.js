const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower, ground, canon;

function preload(){
    backgroundImage = loadImage("assets/background.gif")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    angle = -PI / 4;
    tower = new Tower(150,350,160,310)
    ground = new Ground(600,580,1200,10)
    canon = new Canon(180,110,110,50,angle)
    
}

function draw(){
    background(189);
    image(backgroundImage,0,0,width,height);
    Engine.update(engine);
    tower.display();
    ground.display();
    canon.display();
}
