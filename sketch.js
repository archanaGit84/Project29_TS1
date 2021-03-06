const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, base1, base2, base3;


function setup(){
    createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,480,1000,20);
    base1 = new Ground(500,300,220,20);
    //Middle boxes of each row Central Box cb
    cb1= new Box(base1.body.position.x, base1.body.position.y - 30);
    cbX = cb1.body.position.x;
    cbY = cb1.body.position.y;
    cb2= new Box(cbX, cbY - 40);
    cb3 = new Box(cbX, cbY - 80);
    cb4 = new Box(cbX, cbY - 120);
    //Boxes to the left of central boxes (Left Boxes)

    lb11 = new Box(cbX - 30, cbY);
    lb12 = new Box(cbX - 60, cbY);
    lb13 = new Box(cbX - 90, cbY);
    
    lb21 = new Box(cbX - 30, cbY-40);
    lb22 = new Box(cbX - 60, cbY-40);
    
    lb31 = new Box(cbX - 30, cbY-80);

    //Boxes to the right of central boxes (Right Boxes)

    rb11 = new Box(cbX + 30, cbY);
    rb12 = new Box(cbX + 60, cbY);
    rb13 = new Box(cbX + 90, cbY);
    
    rb21 = new Box(cbX + 30, cbY-40);
    rb22 = new Box(cbX + 60, cbY-40);
    
    rb31 = new Box(cbX + 30, cbY-80);

    poly = new Poly(150,300);

    sling = new Elastic(poly.body, {x:150,y:300});
    Engine.run(engine);

    //var render = Matter.Render.create({element:document.body, engine:engine, options: {width:800, height:400}});
   // Matter.Render.run(render);
}

function draw(){
    background(0);
    ground.display();
    base1.display();
    cb1.display();
    cb2.display();
    cb3.display();
    cb4.display();

    lb11.display(); 
    lb12.display();
    lb13.display();

    lb21.display();
    lb22.display();
    
    lb31.display();

    rb11.display(); 
    rb12.display();
    rb13.display();

    rb21.display();
    rb22.display();
    
    rb31.display();

    sling.display();
    poly.display();
    
}

function mouseDragged(){
    poly.body.position.x = mouseX;
    poly.body.position.y = mouseY;
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(poly.body);
    }
}
