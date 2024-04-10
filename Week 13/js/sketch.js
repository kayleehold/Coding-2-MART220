/* Kaylee Holdsambeck - Week 12 HW - */

/* Variables */
var theFont;

let shapes = [];

let boxPosition;
let cylinderPosition;

let backgroundImage;

let img;
function preload(){
  
  bee = loadModel('../threeD/OBJ/beemodel.obj', true);

  theFont = loadFont('../font/billieeilish.ttf');

  backgroundImage = loadImage('../textures/background.jpg');

}

function setup() {
    createCanvas(700, 700, WEBGL);
    flowerimg = loadImage('../textures/flower.jpg');
    colorimg = loadImage('../textures/color.jpg');
    beeimg = loadImage('../textures/bee.jpg');
    textureMode(NORMAL);

    boxPosition = createVector(-100, -100, 0);
    cylinderPosition = createVector(100, -100, -100);
   
}

function draw() {
    background(250);
    
     background(backgroundImage);
     normalMaterial();
     
     /* Box */
     push();
     translate(boxPosition.x, boxPosition.y, boxPosition.z);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 1);
     rotateY(frameCount * 1);
     texture(flowerimg);
     box(50, 50, 50);
     pop();
     
     push();
     translate(cylinderPosition.x, cylinderPosition.y, cylinderPosition.z);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * .5);
     rotateY(frameCount * 1);
     texture(flowerimg);
     cylinder(20, 50);
     pop();
 
     push();
     translate(-170, -60, -150);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 1);
     rotateY(frameCount * 3);
     texture(flowerimg);
     cone(40, 70);
     pop();
 
     push();
     translate(160,120);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 5);
     rotateY(frameCount * 1);
     texture(flowerimg);
     ellipsoid(30, 40, 40);
     pop();
 
     push();
     translate(60,190, -100);
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 3);
     rotateY(frameCount * 1);
     texture(flowerimg);
     torus(30, 15);
     pop();
 
 
     /* Model */
     push();
     scale(0.8); // Scaled to make model fit into canvas
     rotateZ(frameCount * 0.01);
     rotateX(frameCount * 1);
     rotateY(frameCount * 1);
     texture(beeimg);
     model(bee);
     pop();

          /* Text */
          fill(214, 127, 0)
          textFont(theFont); /* <-- font  */
          textSize(25);
          text('Kaylee Beck - "Hey Honey(Bee)"', -30, 300);
  }
  
  function mouseClicked() {
    // Update positions randomly when the mouse is clicked
    boxPosition.set(random(-200, 0), random(-200, 0), random(-200, 200));
    cylinderPosition.set(random(0, 200), random(-200, 0), random(-200, 200));
  }