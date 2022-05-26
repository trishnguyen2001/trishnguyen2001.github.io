let c;
let pic;

function preload() {
  pic = loadImage("assets/mikopfp.jpg");
}

function setup() {
  // let wwidth;
  // let wheight;
  // if (windowWidth > 1000) {
  //   wwidth = windowWidth * 0.55;
  //   wheight = windowHeight * 0.35;
  // } else {
  //   wwidth = windowWidth * 0.35;
  //   wheight = windowHeight * 0.35;
  // }
  // c = createCanvas(wwidth, wheight);
  // c.parent("canvasHolder");
  // // c.parent("intro");
  // background(255, 255, 255, 40);
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
  c = createCanvas(windowWidth, windowHeight * 0.4);
  c.parent("canvasHolder");
  background(255, 255, 255, 30);
  imageMode(CENTER);
  image(pic, width * 0.2, height * 0.6, 500, 500);
}
