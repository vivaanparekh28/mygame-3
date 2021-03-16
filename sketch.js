const Body=Matter.Body;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;

var engine,world;
var water,waterimg,fireimg,fire,wall
var ground1,ground2,ground3,ground4,ground5,groun6,groun7,ground8,ground9,ground10,ground11,ground12
function preload(){
  backgroundImg = loadImage("./level.jpg");
waterimg=loadImage("./watergirl.png")
fireimg=loadImage("./Fireboy.png")
}
function setup() {
  createCanvas(1100,700);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
   water=createSprite(120,600,20,20)
water.addImage("water",waterimg)
water.scale=0.2
   fire=createSprite(70,600,20,20)
   fire.addImage("fire",fireimg)
   fire.scale=0.25
   ground1=createSprite(550,675,1100,20)
   ground1.visible=false
   ground2=createSprite(700,538,490,20)
   ground2.visible=false
   ground3=createSprite(200,580,300,20)
   ground3.visible=false
   ground4=createSprite(690,555,40,40)
   ground4.visible=false
   ground5=createSprite(1020,640,80,70)
   ground5.visible=false
   ground6=createSprite(490,510,60,60)
   ground6.visible=false
   ground7=createSprite(210,490,500,20)
   ground7.visible=false
   ground8=createSprite(350,370,400,20)
   ground8.visible=false
   ground9=createSprite(560,390,50,50)
   ground9.visible=false
   ground10=createSprite(800,400,400,20)
   ground10.visible=false
   ground11=createSprite(1010,430,160,70)
   ground11.visible=false
  // fire=new Fireboy()
  // ground=new Ground()
  // water=new Watergirl()
}

function draw() {
  background(backgroundImg);
  Engine.update(engine) 
  // ground.display()
  // fire.display()
  // //fire.collide(ground) 
  water.velocityY=water.velocityY+0.3
  fire.velocityY=fire.velocityY+0.3
  fire.collide(ground1)
  water.collide(ground1)
  fire.collide(ground2)
  water.collide(ground2)
  fire.collide(ground3)
  water.collide(ground3)
  fire.collide(ground4)
  water.collide(ground4)
  fire.collide(ground5)
  water.collide(ground5)
  fire.collide(ground6)
  water.collide(ground6)
  fire.collide(ground7)
  water.collide(ground7)
  fire.collide(ground8)
  water.collide(ground8)
  fire.collide(ground9)
  water.collide(ground9)
  fire.collide(ground10)
  water.collide(ground10)
  fire.collide(ground11)
  water.collide(ground11)
  // if(keyCode===100 && keyCode===119){
  //   water.y=water.y-10
  //   water.x=water.x+4
  // }
  if (keyCode===119){
    water.velocityY=-4
    water.velocityY=water.velocityY+0.3
  }
  if(keyDown("d")){
 water.velocityX=3
 
 
  }
  else{
    water.velocityX=0
  }
  if(keyDown("a")){
    water.velocityX=-3
  }
 

  if(keyDown(UP_ARROW)){
    fire.velocityY=-6
    fire.velocityY=fire.velocityY+0.8
  }
  if(keyDown(RIGHT_ARROW)){
    fire.velocityX=3
 
  }
  else{
    fire.velocityX=0
  }
  if(keyDown(LEFT_ARROW)){
    fire.velocityX=-3
  }
  
  
  // water.display()

  // waterkeys()

   drawSprites();
  
}
