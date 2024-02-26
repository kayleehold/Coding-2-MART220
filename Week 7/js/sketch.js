/* Could not get the radius of the collision to shrink so that the character could "eat" when closer to the donut so the donut is grayed out but is still technically there! -Kaylee */
/* I collabed with Jessica Nelson! */

/* To Do: 
make more run cycle images ()
 */



/* Sprinkle Movement Variables */
var xspeed;
var yspeed = 10;
var xsprinkle = 200;
var ysprinkle = 225;
var xspeed2;
var yspeed2 = 10;
var xsprinkle2 = 160;
var ysprinkle2 = 160;
var distanceLimit = 75;

/* Mouse Square Movement variables */
var x = 100;
var y = 100;

/* Font Variable */
var theFont;

/* Image Variable */
var PNG;
var xPNG = 275, yPNG = 275;
var PNGspeedX, PNGspeedY;

var PNG2;
var xPNG2 = 100, yPNG2 = 25;
var PNGspeedX2, PNGspeedY2;

var PNG3;
var xPNG3 = 95, yPNG3 = 90;
var PNGspeedX3, PNGspeedY3;


/* timer variables */
var timerValue = 15;

/* Sprit Animation */

var imageX1 = 300;
var imageY1 = 100;
var speedX, speedY;
var imageW1 = 256;
var imageH1 = 256;

var i = 0;
var time = 10;
var counter = 0;

var turnX = false;

var animations = [];


var mySprite, mySprite2;
var mySprite3;
var mySprite4;
var mySprite5;
var mySprite6;
var mySprite7;

/* Donut and Sprinkles */
var donut;
var sprinkle1;
var sprinkle2;
var sprinkle3;
var sprinkle4;
var sprinkle5;
var sprinkle6;
var sprinkle7;
var sprinkle8;
var sprinkle9;

/* Collision */
var hitDonut = [];
var donutX = 200;
var donutY = 200;
var donutW = 150;


/* Functions */

function setup() {
    createCanvas(1000, 1000);

    xspeed = random(-1, 1)
    yspeed = random(-1, 1)
    xspeed2 = random(-1, 1)
    yspeed2 = random(-1, 1)

    PNG = loadImage("../images/CD.png");
    PNGspeedX = random(1, 5);
    PNGspeedY = random(1, 5);

    PNG2 = loadImage("../images/HeartFlower.png");
    PNGspeedX2 = random(1, 5);
    PNGspeedY2 = random(1, 5);

    PNG3 = loadImage("../images/Camera.png");
    PNGspeedX3 = random(1, 5);
    PNGspeedY3 = random(1, 5);

    theFont = loadFont('../fonts/billieeilish.ttf');

    donut = new Donut(200, 200, 150);
    sprinkle1 = new Sprinkle(160, 160, 6);
    sprinkle2 = new Sprinkle(190, 160, 6);
    sprinkle3 = new Sprinkle(260, 180, 6);
    sprinkle4 = new Sprinkle(250, 210, 6);
    sprinkle5 = new Sprinkle(220, 150, 6);
    sprinkle6 = new Sprinkle(220, 250, 6);
    sprinkle7 = new Sprinkle(170, 250, 6);
    sprinkle8 = new Sprinkle(155, 220, 6);
    sprinkle9 = new Sprinkle(150, 190, 6);




    mySprite = new Sprite('../images/png/Run (1).png', imageX1, 800, 416, 454);
    mySprite2 = new Sprite("../images/png/Run (2).png", imageX1, 800, 416, 454);
    mySprite3 = new Sprite("../images/png/Run (3).png", imageX1, 800, 416, 454);
    mySprite4 = new Sprite("../images/png/Run (4).png", imageX1, 800, 416, 454);
    mySprite5 = new Sprite("../images/png/Run (5).png", imageX1, 800, 416, 454);
    mySprite6 = new Sprite("../images/png/Run (6).png", imageX1, 800, 416, 454);
    mySprite7 = new Sprite("../images/png/Run (7).png", imageX1, 800, 416, 454);

    animations[0] = mySprite;
    animations[1] = mySprite2;
    animations[2] = mySprite3;
    animations[3] = mySprite4;
    animations[4] = mySprite5;
    animations[5] = mySprite6;
    animations[6] = mySprite7;

    /* Movement for Sprite */
    setInterval(updateImage, 50)

    /* Movement for CD image */
    setInterval(timeIt, 60);

}


function draw() {
    background(220);


/* Food Class Draw */
    donut.draw();

/* Food Class Draw */
    fill(78, 164, 245);
    sprinkle1.draw();


    fill(255, 38, 96);
    sprinkle2.draw();

    fill(250, 134, 40);
    sprinkle3.draw();

    fill(255, 248, 33);
    sprinkle4.draw();

    fill(151, 33, 255);
    sprinkle5.draw();

    fill(44, 81, 245);
    sprinkle6.draw();

    fill(124, 245, 44);
    sprinkle7.draw();

    fill(245, 51, 44);
    sprinkle8.draw();

    fill(250, 35, 92);
    sprinkle9.draw();


  /* DO NOT TOUCH */
      /* Sprinkes Bouncing */
      strokeWeight(.5);
      fill(255, 255, 255);
      circle(xsprinkle, ysprinkle, 6);
  
      fill(80, 230, 128)
      circle(xsprinkle2, ysprinkle2, 6);
  
  
  
      /*  Sprinkles Moving */
      xsprinkle += xspeed;
      ysprinkle += yspeed;
      xsprinkle2 += xspeed2;
      ysprinkle2 += yspeed2;
  
  
      /* Sprinkle bounce when reaching limit */
      if (xsprinkle < 200 - distanceLimit || xsprinkle > 200 + distanceLimit) {
          xspeed *= -1;
      }
  
      if (ysprinkle < 200 - distanceLimit || ysprinkle > 200 + distanceLimit) {
          yspeed *= -1;
      }
  
      if (xsprinkle2 < 200 - distanceLimit || xsprinkle2 > 200 + distanceLimit) {
          xspeed2 *= -1;
      }
  
      if (ysprinkle2 < 200 - distanceLimit || ysprinkle2 > 200 + distanceLimit) {
          yspeed2 *= -1;
      }
  

      
  
      /* Pink square Mouse Movement */
      fill(252, 3, 207)
      square(x, y, 10)
  
      /* 0 Image prtining and moving 20 pixels on screen */
      if (timerValue >= 11) {
      image(PNG, xPNG - 20, yPNG - 20);
      }
      if (timerValue <= 10) {
      image(PNG, xPNG + 10, yPNG + 10);
      }

    /* Sprit Character Class Animation */
    animations[i].updateX(imageX1);
    animations[i].updateY(imageY1);
    animations[i].setTurnX(turnX);
    animations[i].draw();

    if (keyIsPressed) {
        if (key == "a") {
            turnX = true;
            imageX1 -= 2;
        }

        if (key == "d") {
            turnX = false;
            imageX1 += 2;
        }
        if (key == "w") {
            imageY1 -= 2;
        }
        if (key == "s") {
            imageY1 += 2;
        }
    }



    /* Image 2 & 3*/

    image(PNG2, xPNG2, yPNG2)
    xPNG2 += PNGspeedX2;
    yPNG2 += PNGspeedY2;

    if(xPNG2 >= width-100 || xPNG2 <= 0)
    {
        PNGspeedX2 *=-1;
    }

    if(yPNG2 >= height-100 || yPNG2 <= 0)
    {
        PNGspeedY2 *=-1;
    }

    image(PNG3, xPNG3, yPNG3)
    xPNG3 += PNGspeedX3;
    yPNG3 += PNGspeedY3;

    if(xPNG3 >= width-100 || xPNG3 <= 0)
    {
        PNGspeedX3 *=-1;
    }

    if(yPNG3 >= height-100 || yPNG3 <= 0)
    {
        PNGspeedY3 *=-1;
    }



    /* Text */
    fill(250, 35, 92)
    textFont(theFont); /* <-- font  */
    textSize(14);
    text('Kaylee Holdsambeck', 250, 390);
    textSize(25);
    text('Yummy Donut', 20, 30);
    

       /* Collision between character & donut */

       animations[i].donutInteraction(donutX, donutY, donutW);
       noStroke();
       fill(220);
       for (let pos of hitDonut) {
         circle(donutX, donutY, donutW)
       }
}

/* Mouse Square */
function mouseMoved() {
    x = mouseX;
    y = mouseY;
}

/* Moving Animation */
function updateImage(){
    i++;
    if(i > animations.length-1){
        i = 0
    }

}

function checkCollision(x, y, w, h, x2, y2, w2, h2) {

    if (
        x - w / 2 < x2 + w2 / 2 &&
        x + w2 / 2 > x2 - w / 2 &&
        y - h2 / 2 < y2 + h / 2 &&
        y + h2 / 2 > y2 - h / 2

    ) {
        return true;
    } else {
        return false;
    }
}

function timeIt() {
if (timerValue > 0) {
timerValue--;
}
if (timerValue == 0){
timerValue = 15
}

}
