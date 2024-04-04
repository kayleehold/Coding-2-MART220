/* Kaylee Holdsambeck - Week 12 HW - */

/* Variables */


let img;
function preload(){
  
}

function setup() {
    createCanvas(700, 700, WEBGL);
    img = loadImage('../texture/water.jpg');
    textureMode(NORMAL);
   
}

function draw() {
    background(250);
  
    normalMaterial();
    push();
    translate(-240, -100, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 5);
    rotateY(frameCount * 0.01);
    plane(70);
    pop();
  
    push();
    translate(0, -100, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(img);
    box(70, 70, 70);
    pop();

    // Assuming img has 100 pixels width and height
    beginShape();
    vertex(0, 0, 0, 0, 0);
    vertex(100, 0, 0, 1, 0);
    vertex(100, 100, 0, 1, 1);
    vertex(0, 100, 0, 0, 1);
    endShape(CLOSE);
  
    push();
    translate(240, -100, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(70, 70);
    pop();
  
    push();
    translate(-250, 100, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cone(50, 70);
    pop();
  
    push();
    translate(-75, 100, 0);  
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(50, 20);
    pop();
  
    push();
    translate(100, 100, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(50);
    pop();
  
    push();
    translate(275, 100, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    ellipsoid(30, 40, 40);
    pop();
  }
  