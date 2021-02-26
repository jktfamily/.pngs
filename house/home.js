//sky
background(0,255,255);

noStroke();

var c = 200;

var hc = 100;

//sun
fill(255,255,0);
ellipse(0,0,250,250);

//house
fill(139,69,19);
triangle(110,200,200,140,290,200);
rect(c-50,c,hc,hc);
  //door
  stroke(0,0,0);
  arc(200,300,44,93,180,360);
    //knob
    fill(0,0,0);
    ellipse(190,280,5,5);

//ground
noStroke();
fill(0,255,0);
rect(-100,300,4000,300);

//v1.0
