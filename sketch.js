const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg,monster,superhero;

function preload() {
bg=loadImage("image/BACKGROUND.png")
monster=loadImage("image/MONSTER.PNG")
superhero=loadImage("image/SUPERHERO.png")

}

function setup() {
  createCanvas(3000, 800);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground=new Ground(1500,400,600,50);
  hero=new Hero(500,200,50);
  fly=new Fly(hero.body,{x:200,y:200})

}

function draw() {
  background(bg);
  Engine.update(myEngine);
  ground.display();
  hero.display();
  fly.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

