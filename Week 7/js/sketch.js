




/* Variables */

/* Mouse Square Movement variables */
var xmouse = 100;
var ymouse = 100;

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

/* Font Variable */
var theFont;



function preload() {
    idleStrings = loadStrings("../textfiles/idle.txt");
    runStrings = loadStrings("../textfiles/run.txt");
}

function setup() {
    createCanvas(1000, 1000);

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
        idleArray.push(new myImage(idleStrings[k], 50, 300, 680, 472));
    }
    for (let k = 0; k < runStrings.length; k++) {
        walkArray.push(new myImage(runStrings[k], 50, 300, 680, 472));
    }

    

    setInterval(changeTime, 100);
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
        walkArray[ii].updateX(xImage);
        walkArray[ii].updateFlip(flipX);
        
        if (objectToEat != null) {
            if (walkArray[ii].checkCollision(objectToEat.x, objectToEat.y, objectToEat.w, objectToEat.h)) {
                objectToEat = null;
            }
        }

    }
    objectToDraw = walkArray;
}
else {
    objectToDraw = idleArray;     
}


}