/* Kaylee Holdsambeck - Week 7 HW - Worked with Jessica Nelson - Notes: Couldn't get the hit boxes exactly right but it works besides that*/

/* Variables */

/* Mouse Square Movement variables */
var xmouse = 100;
var ymouse = 100;

/* Bouncing Food Images */

/* Banana */
var PNG1;
var xPNG1 = 115, yPNG1 = 50;
var PNGspeedX1, PNGspeedY1;

/* Lemon */
var PNG2;
var xPNG2 = 100, yPNG2 = 25;
var PNGspeedX2, PNGspeedY2;

/* Strawberry */
var PNG3;
var xPNG3 = 95, yPNG3 = 90;
var PNGspeedX3, PNGspeedY3;


/* Sprite movement Var */
var idleArray = [];
var runArray = [];
var idleStrings = [];
var runStrings = [];

/* Week 9 copy and paste variables */
var myAnimation;
var myWalkAnimation;

/* Copy and pasted from teach */
var objectToEat;
var objectToDraw;

var i = 0;
var flipX = false;

/* Sprite x&y */
var xImage = 550, yImage = 100;

/* Point Sytem */
var score = 0;
var myTime = 10;

/* Sounds */
var goodFood;
var badFood;
var bgMusic;


function preload() {
    idleStrings = loadStrings("../textfiles/idle.txt");
    runStrings = loadStrings("../textfiles/run.txt");

    goodFood = loadSound("../sounds/Good.mp3");
    badFood = loadSound("../sounds/Bad.mp3");
    bgMusic = loadSound("../sounds/JustAGirl.mp3");
}

function setup() {
    createCanvas(1000, 600);

    /* Bouncing Images */
    xspeed = random(-1, 1)
    yspeed = random(-1, 1)
    xspeed2 = random(-1, 1)
    yspeed2 = random(-1, 1)

    PNG1 = loadImage("../images/Banana.png");
    PNGspeedX1 = random(1, 5);
    PNGspeedY1 = random(1, 5);

    PNG2 = loadImage("../images/Lemon.png");
    PNGspeedX2 = random(1, 5);
    PNGspeedY2 = random(1, 5);

    PNG3 = loadImage("../images/Strawberry.png", );
    PNGspeedX3 = random(1, 5);
    PNGspeedY3 = random(1, 5);

    


/* Uploaded from teach */
    for (let k = 0; k < idleStrings.length; k++) {
        idleArray.push(new Sprite(idleStrings[k], 550, 100, 680, 472));
    }
    for (let k = 0; k < runStrings.length; k++) {
        runArray.push(new Sprite(runStrings[k], 550, 100, 680, 472));
    }

    
/* Timer stuff */
    setInterval(changeTime, 100);
    setInterval(countDown, 1000);

    /* Creating Food Image Variables */
    objectToEat = new Sprite("../images/Lemon.png", 400, 200, 100, 100,);
    objectToEat2 = new Sprite("../images/Strawberry.png", 100, 200, 100, 100);
    objectNotToEat = new Sprite("../images/Banana.png", 100, 200, 100, 100);
}

function draw() {
    background(220);

    /* Pink square Mouse Movement */
    fill(252, 3, 207)
    square(xmouse, ymouse, 10)
    

/* Character movement copy & paste teach */
if(kb.pressing('d'))
{
    if(myAnimation.isColliding(PNG2))
    {
        myAnimation.drawAnimation('idle');
        myAnimation.updatePosition('idle');
        
    }  
    else if(myAnimation.isColliding(brainImage))
    {
        brainImage.remove();
        
    }  
    myAnimation.updatePosition('forward');
    myAnimation.drawAnimation('walk');    
      
}
else if(kb.pressing('a'))
{
    if(myAnimation.isColliding(catImage))
    {
        myAnimation.drawAnimation('idle');
        myAnimation.updatePosition('idle');  
    }  
    myAnimation.updatePosition('reverse');
    myAnimation.drawAnimation('walk');        
}
else if(kb.pressing('w'))
{
    if(myAnimation.isColliding(catImage))
    {
        myAnimation.drawAnimation('idle');
        myAnimation.updatePosition('idle');
        
    }  
    myAnimation.updatePosition('up');
    myAnimation.drawAnimation('walk'); 

}
else if(kb.pressing('s'))
{
    if(myAnimation.isColliding(catImage))
    {
        myAnimation.drawAnimation('idle');
        myAnimation.updatePosition('idle');
        
    }  
    myAnimation.updatePosition('down');   
    myAnimation.drawAnimation('walk');        
}
else
{
    myAnimation.drawAnimation('idle');
} 

brainImage.debug = mouseIsPressed;



   /* Text */
   fill(250, 35, 92)
   textSize(14);
   textSize(30);
   text("Score : " + score, 400, 50);

   fill(250, 35, 92);
   textSize(30);
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
        createLemon();
        createStrawberry();
        createBanana();
    }
}

function createBanana()
{
    console.log("HI");
    objectNotToEat = new Sprite("../images/Banana.png", random(50, width-100), random(50,height-100), 100, 100);

}

function createLemon()
{
    console.log("HI");
    objectToEat = new Sprite("../images/Lemon.png", random(50, width-100), random(50,height-100), 100, 100);

}

function createStrawberry()
{
    objectToEat2 = new Sprite("../images/Strawberry.png", random(50, width-100), random(50,height-100), 100, 100);

}


/* Mouse Square */
function mouseMoved() {
    xmouse = mouseX;
    ymouse = mouseY;
}

/* Music */
function mousePressed()
{
    playMySound();
}
function playMySound()
{
    bgMusic.loop();
}