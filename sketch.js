function preload(){
  snow=loadImage("snow1.jpg")
  snow1=loadAnimation("snow5.webp","snow4.webp")
}

function setup() {
  createCanvas(800,400);
  s1=createSprite(200, 200, 50, 50);
  s1.addAnimation(snow1)
}

function draw() {
  background(snow);  

  drawSprites();
}