const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(500, 200, 50, 50);
    pig2 = new Pig(500, 125, 50, 50);
    pig3 = new Pig(500, 50, 50, 50);

    bird = new Bird(100,100);
    boy1 = new Boy();

    
    slingshot = new SlingShot(bird.body,{x:200, y:300});
    slingshot2 = new SlingShot(pig1.body,{x:500, y:180});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    pig1.display();
    pig2.display();
    pig3.display();
    boy1.display();

    bird.display();
    slingshot.display();  
    slingshot2.display(); 
    detectCollision();
    ground.display();
    pig1.display();
    pig2.display();
    pig3.display();
    boy1.display();

    detectCollision(bird, pig1);    
    detectCollision(bird, pig2); 
    detectCollision(bird, pig3); 
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function detectCollision(){
    var distance=dist(bird.body.position.x, bird.body.position.y, pig1.body.position.x, pig1.body.position.y);
    if(distance<=pig1.r+bird.r){
        Matter.body.setStatic(pig1.body, false);
    }
}