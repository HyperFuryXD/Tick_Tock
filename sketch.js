var hr = hour();
var mn = minute();
var sc = second();

var scAngle;
var mnAngle;
var hrAngle;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}