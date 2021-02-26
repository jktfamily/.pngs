//sky
background(0,255,255);

noStroke();

var c = 200;

var hc = 100;

var a1 = 7.5;

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
  //window
    //frame
    //right
    fill(255,255,255);
    rect(221,209,30,30);
    //left
    rect(159,209,30,30);
    //glass
    fill(0,0,255);
    //right
    rect(215,212,a1,a1);
    rect(230,212,a1,a1);
    rect(215,227,a1,a1);
    rect(230,227,a1,a1);
    //left
    rect(162,212,a1,a1);
    rect(177,212,a1,a1);
    rect(162,227,a1,a1);
    rect(177,227,a1,a1);

//ground
noStroke();
fill(0,255,0);
rect(-100,300,4000,300);

/****
v1.0/0001
****/
