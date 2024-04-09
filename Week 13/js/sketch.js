/* Kaylee Holdsambeck - Week 12 HW - */

/* Variables */
var theFont;

let img;
function preload(){
  
  theFont = loadFont('../font/billieeilish.ttf');

}

function setup() {
    createCanvas(700, 700, WEBGL);
    flowerimg = loadImage('../textures/flower.jpg');
    colorimg = loadImage('../textures/color.jpg');
    textureMode(NORMAL);
   
}

function draw() {
    background(250);

     /* Text */
     fill(250, 35, 92)
     textFont(theFont); /* <-- font  */
     textSize(25);
     text('Kaylee Beck - "fun!"', 20, 30);
    
    /* Shape 1 - Plane */
    normalMaterial();
    push();
    translate(-240, -100, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 5);
    rotateY(frameCount * 0.01);
    plane(70);
    pop();
  
    /* Shape 2 - Box */
    push();
    translate(0, -100, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(flowerimg);
    box(100, 100, 100);
    pop();


    /* Shape 3 - cylinder */
    push();
    translate(240, -100, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(70, 70);
    pop();

    
    /* Shape 4 - cone */
    push();
    translate(-250, 100, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cone(50, 70);
    pop();
  
    /* Shape 5 - torus */
    push();
    translate(-75, 100, 0);  
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(50, 20);
    pop();

    /* Shape 6 - sphere */
    push();
    translate(100, 100, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(50);
    texture(colorimg);
    pop();
  
    
  }
  