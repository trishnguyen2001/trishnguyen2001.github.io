function setup() {
  createCanvas(400, 400);
}

///////////////////////////////COLORS/////////////////////////////////
//  naval               #303d4d     48,61,77
//  gentleman's gray    #314657     49,70,87
//  hale navy           #454b57     69,75,87
//  indigo batik        #3e5064     62,80,100
//  blueprint           #608190     96,129,144
//  van courtland blue  #87989f     135,152,159
//  smoke               #bbc9ca     187,201,202
//  palladian blue      #c2d3c9     194,211,201
//////////////////////////////////////////////////////////////////////
function draw() {
  background(220);
  stroke(0, 0, 0);
  strokeWeight(10);
  ellipse(width * 0.5, height * 0.5, width * 0.75, width * 0.75);
  ellipse(width * 0.3, height * 0.4, width * 0.1, width * 0.1);
  ellipse(width * 0.7, height * 0.4, width * 0.1, width * 0.1);
  line(width * 0.4, height * 0.55, width * 0.6, height * 0.55);
}
