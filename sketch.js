var hr, hrAngle;
var mn, mnAngle;
var sc, scAngle;



function setup() {
  createCanvas(400,400);

  angleMode(DEGREES);

}

function draw() {
  background(0);  
   
  translate(200,200);
  rotate(-90);
 
  hr = hour();
  mn = minute();
  sc = second();
  
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360); 
  

  push();
  rotate(scAngle);
  stroke("purple");
  strokeWeight(7);
  line(0,0,100,0);
  pop();
 
  push();
  rotate(mnAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  
  push();
  rotate(scAngle);
  stroke("orange");
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  
  stroke("blue");
  point(0,0);
  strokeWeight(10);
  noFill();

  stroke("purple");
  arc(0,0,300,300,0,scAngle);

  stroke("green");
  arc(0,0,280,280,0,mnAngle);
  
  stroke("orange");
  arc(0,0,260,260,0,hrAngle);
  
  
  //drawSprites();

}

