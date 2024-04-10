/* Kaylee Holdsambeck - Week 12 HW - */

/* Variables */
var theFont;

let shapes = [];

let boxPosition;
let cylinderPosition;


let img;
function preload(){
  
  bee = loadModel('../threeD/OBJ/beemodel.obj', true);

  theFont = loadFont('../font/billieeilish.ttf');

}

function setup() {
    createCanvas(700, 700, WEBGL);
    flowerimg = loadImage('../textures/flower.jpg');
    colorimg = loadImage('../textures/color.jpg');
    textureMode(NORMAL);

    boxPosition = createVector(-100, -100, 0);
    cylinderPosition = createVector(100, -100, -100);
   
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
     translate(boxPosition.x, boxPosition.y, boxPosition.z);
     rotateX(frameCount * 1);
     rotateY(frameCount * 1);
     texture(flowerimg);
     box(50, 50, 50);
     pop();
     
     push();
     translate(cylinderPosition.x, cylinderPosition.y, cylinderPosition.z);
     rotateX(frameCount * 1);
     rotateY(frameCount * 1);
     texture(flowerimg);
     cylinder(20, 50);
     pop();
 
     push();
     translate(-170, -60, -150);
     rotateX(frameCount * 1);
     rotateY(frameCount * 1);
     texture(flowerimg);
     cone(40, 70);
     pop();
 
     push();
     translate(160,120);
     rotateX(frameCount * 5);
     rotateY(frameCount * 1);
     texture(flowerimg);
     ellipsoid(30, 40, 40);
     pop();
 
     push();
     translate(60,190, -100);
     rotateX(frameCount * 1);
     rotateY(frameCount * 1);
     texture(flowerimg);
     torus(30, 15);
     pop();
 
 
     /* Model */
     push();
     scale(0.8); // Scaled to make model fit into canvas
     rotateX(frameCount * 1);
     rotateY(frameCount * 1);
     normalMaterial(); // For effect
     model(bee);
     pop();

  }
  
  function mouseClicked() {
    // Update positions randomly when the mouse is clicked
    boxPosition.set(random(-200, 0), random(-200, 0), random(-200, 200));
    cylinderPosition.set(random(0, 200), random(-200, 0), random(-200, 200));
  }