/* Kaylee Holdsambeck 
Week 7 HW 
*/

/* Variables */

/* Mouse Square Movement variables */
var xmouse = 100;
var ymouse = 100;

/* Font Variable */
var theFont;

/* Bouncing Food Images */
var PNG2;
var xPNG2 = 100, yPNG2 = 25;
var PNGspeedX2, PNGspeedY2;

var PNG3;
var xPNG3 = 95, yPNG3 = 90;
var PNGspeedX3, PNGspeedY3;

/* Sprite movement Var */
var idleArray = [];
var runArray = [];
var idleStrings = [];
var runStrings = [];


/* Copy and pasted from teach */
var objectToEat;
var objectToDraw;

var i = 0;
var flipX = false;

var xImage = 100, yImage = 25;

/* Point Sytem */
var score = 0;
var myTime = 10;



function preload() {
    idleStrings = loadStrings("../textfiles/idle.txt");
    runStrings = loadStrings("../textfiles/run.txt");
}

function setup() {
    createCanvas(1000, 600);

    /* Bouncing Images */
    xspeed = random(-1, 1)
    yspeed = random(-1, 1)
    xspeed2 = random(-1, 1)
    yspeed2 = random(-1, 1)

    PNG2 = loadImage("../images/Lemon.png");
    PNGspeedX2 = random(1, 5);
    PNGspeedY2 = random(1, 5);

    PNG3 = loadImage("../images/Strawberry.png");
    PNGspeedX3 = random(1, 5);
    PNGspeedY3 = random(1, 5);

    theFont = loadFont('../fonts/billieeilish.ttf');


/* Uploaded from teach */
    for (let k = 0; k < idleStrings.length; k++) {
        idleArray.push(new Sprite(idleStrings[k], 50, 300, 680, 472));
    }
    for (let k = 0; k < runStrings.length; k++) {
        runArray.push(new Sprite(runStrings[k], 50, 300, 680, 472));
    }

    
/* Timer stuff */
    setInterval(changeTime, 100);
    setInterval(countDown, 1000);
}

function draw() {
    background(220);

    /* Pink square Mouse Movement */
    fill(252, 3, 207)
    square(xmouse, ymouse, 10)
    

/* Character movement copy & paste teach */
if (objectToEat != null) {
    objectToEat.draw();
}

if (keyIsPressed) {
    if (key == "w") {
        yImage -= 1;
    }
    if (key == "s") {
        yImage += 1;
    }
    if (key == "a") {
        xImage -= 1;
        flipX = true;
    }
    if (key == "d") {
        xImage += 1;
        flipX = false;
    }

    for (var ii = 0; ii < idleArray.length; ii++) {
        idleArray[ii].updateX(xImage);
        idleArray[ii].updateFlip(flipX);
        runArray[ii].updateX(xImage);
        runArray[ii].updateFlip(flipX);
        idleArray[ii].y = yImage
        runArray[ii].y = yImage
        
        if (objectToEat != null) {
            if (runArray[ii].checkCollision(objectToEat.x, objectToEat.y, objectToEat.w, objectToEat.h)) {
                objectToEat = null;
                /* console.log("pls") */
            }
        }

    }
    objectToDraw = runArray;
}
else {
    objectToDraw = idleArray;     
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
   textSize(25);
   text("Score : " + score, 400, 50);

   fill(250, 35, 92);
   textSize(25);
   text(myTime + " seconds", 50, 50);

}


/* Timers */
function changeTime() {
    i++;
    if (i > idleArray.length - 1) {
        i = 0;
    }
}

function changeTime() {
    i++;
    if (i > idleArray.length - 1) {
        i = 0;
    }
}

function countDown() {
    myTime--;
    if (myTime < 0) {
        myTime = 10;
        /* createANewFoodItem(); */
    }
}


/* Mouse Square */
function mouseMoved() {
    xmouse = mouseX;
    ymouse = mouseY;
}
