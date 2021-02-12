const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Detector=Matter.Detector

var engine, world;
var ground1;
var ball
var wall1
var lvl

function setup(){
    var canvas = createCanvas(700,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var ball_options ={
    restitution:0.5
    }

    ground = new Ground(600,height,1200,20);
    wall1=new Wall(1,350,30,700)
    wall2=new Wall(699,350,30,700)
    wall3=new Wall(350,3,700,20)
    ball= new Ball(350,350,30)

    lvlwall1 = new levelWall (485,350,400,20)
    lvlwall2= new levelWall(200,200,370,20)
    booster1= new Booster (30,350,30,200)
    checkpoint1= new CheckPoint(30,100,30,150)
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    wall1.display();
    wall2.display();
    wall3.display();
    lvlwall1.display()
    lvlwall2.display()
    booster1.display()
    checkpoint1.display()
    ball.display()
   if (Matter.Detector.canCollide(ball.body,checkpoint1.body) === true){
   world.remove(world,ball.body) 
   console.log(ball)
   }
    

}

Matter.Events.on(ball, 'collisionEnd', ({ pairs }) => {
   pairs.forEach(({ ball,checkpoint1 }) => {
     if (bodyA = ball) Matter.World.remove(world, bodyA);
     if (bodyB = checkpoint1) Matter.World.remove(world, bodyB);
  });
});