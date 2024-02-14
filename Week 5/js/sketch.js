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

var run1;
var run2;

 var imageX1 = 300;
var imageY1 = 100;
var speedX, speedY;
var imageW1 = 256;
var imageH1 = 256;

var i = 0;
var time = 10;
var counter = 0;

var flipX = false;

var animations = [];


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

        run1 = loadImage("../images/png/Run (1).png");
        run2 = loadImage("../images/png/Run (2).png");
        run3 = loadImage("../images/png/Run (3).png");
        run4 = loadImage("../images/png/Run (4).png");
        run5 = loadImage("../images/png/Run (5).png");
        run6 = loadImage("../images/png/Run (6).png");
        run7 = loadImage("../images/png/Run (7).png");

        animations[0] = run1;
        animations[1] = run2;
        animations[2] = run3;
        animations[3] = run4;
        animations[4] = run5;
        animations[5] = run6;
        animations[6] = run7;
        setInterval(timeIt, 60);
 
 }


 function draw() {
     background(220);

     /* Sprit Animation */
     if(flipX)
     {
         push();
 
         // Scale -1, 1 means reverse the x axis, keep y the same.
         scale(-1, 1);
         
         // Because the x-axis is reversed, we need to draw at different x position.
      //   image(img, -width, 0);
         image(animations[i], -imageX1-imageW1,imageY1);
         
         pop();
     }
     else
     {
         image(animations[i], imageX1,imageY1);
     
     }
     
    
     if(keyIsPressed)
     {
         if(key == "a")
         {
             flipX = true;
             imageX1 -=2;
         }
 
         if(key == "d")
         {
             flipX = false;
             imageX1 +=2;
         }
         if(key == "w")
         {
             imageY1 -=2;
         }
         if(key == "s")
         {
             imageY1 +=2;
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

     /* Donutbody */
     fill(181, 117, 78);
     circle(200, 200, 150);
     /* Center */
     fill(207, 196, 190);
     circle(200, 200, 50);


     /* Sprinkes */
     strokeWeight(.5);
     fill(255, 255, 255);
     circle(xsprinkle, ysprinkle, 6);

     fill(80, 230, 128)
     circle(xsprinkle2, ysprinkle2, 6);

     fill(78, 164, 245);
     circle(160, 160, 6);

     fill(255, 38, 96);
     circle(190, 160, 6);

     fill(250, 134, 40);
     circle(260, 180, 6);

     fill(255, 248, 33);
     circle(250, 210, 6);

     fill(151, 33, 255);
     circle(220, 150, 6);

     fill(44, 81, 245);
     circle(220, 250, 6);

     fill(124, 245, 44);
     circle(170, 250, 6);

     fill(245, 51, 44);
     circle(155, 220, 6);

     fill(250, 35, 92);
     circle(150, 190, 6);


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

      

 }

 function mouseMoved() {
     x = mouseX;
     y = mouseY;
 }

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
  if (timerValue == 0){
    timerValue = 15
  }

if (i < animations.length-1) {
    i++;
  }
  else
  {
      i = 0;
  }
}
