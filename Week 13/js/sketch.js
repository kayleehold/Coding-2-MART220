/* Kaylee Holdsambeck - Week 12 HW - */

/* Variables */
var theFont;

let shapes = [];


let img;
function preload(){
  
  teapot = loadModel('...', true);

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
    
     background(200);
     normalMaterial();
     
     /* Box */
     push();
     translate(-100,-100);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     texture(img);
     box(150, 150, 150);
     pop();
     
     push();
     translate(100,100);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     texture(img);
     cylinder(20, 50);
     pop();
 
     push();
     translate(100,100);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     texture(img);
     cone(40, 70);
     pop();
 
     push();
     translate(100,100);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     texture(img);
     ellipsoid(30, 40, 40);
     pop();
 
     push();
     translate(100,100);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     texture(img);
     torus(30, 15);
     pop();
 
     push();
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     translate(-100, -100);
     texture(img);
     beginShape();
     vertex(0, 0, 100, 0, 0);
     vertex(200, 0, 50, 1, 0);
     vertex(200, 200, 100, 1, 1);
     vertex(0, 200, 50, 0, 1);
     endShape(CLOSE);
     pop();
 
     push();
     scale(0.4); // Scaled to make model fit into canvas
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     normalMaterial(); // For effect
     model(well);
     pop();

  
    
  }
  