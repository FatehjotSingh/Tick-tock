const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hr,mn,sc;
var hra,mna,sca;


function setup() {
  createCanvas(700,700);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
}

function draw() {
  background(0); 
  translate(350,350)
  rotate(-90)
  hr=hour();
  hra=map(hr%12,0,12,0,360)
  mn=minute();
  mna=map(mn,0,60,0,360)
  sc=second();
  sca=map(sc,0,60,0,360)
  push();
  fill("black")
  stroke(255)
  strokeWeight(5)
  circle(0,0,480)
  pop()

  push()
  rotate(hra)
  stroke(0,0,255)
  fill("black")
  strokeWeight(7)
  line(0,0,75,0)
  pop()

  push()
  rotate(mna)
  stroke(0,255,0)
  strokeWeight(7)
  fill("black")
  line(0,0,125,0)
  pop()

  push()
  rotate(sca)
  stroke(255,0,0)
  strokeWeight(7)
 
  
  line(0,0,200,0)
  pop()
  noFill()
   strokeWeight(7)
  stroke(0,0,255)
  arc(0,0,510,510,0,hra)
  stroke(0,255,0)
  arc(0,0,530,530,0,mna)
  stroke(255,0,0)
  arc(0,0,550,550,0,sca)
  drawSprites();
  

}
