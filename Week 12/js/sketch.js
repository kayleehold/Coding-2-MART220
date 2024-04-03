/* Kaylee Holdsambeck - Week 11 HW - 
 Notes: There are particles when you eat the fruit but my code is written differently then yours and
 I wasn't able to find a way to get the particles to stay on the screen.
 Been overwhelmed with a few things in life right now and I couldn't find the time to schedule a meeting
 before the due date. 
 
 tried my best so thanks for reading!!*/

/* Variables */

/* Mouse Square Movement variables */
var xmouse = 100;
var ymouse = 100;


/* Banana */
var PNG1;
var xPNG1 = 115, yPNG1 = 50;
var PNGspeedX1, PNGspeedY1;

/* Lemon */
var PNG2;
var xPNG2, yPNG2;
var PNGspeedX2, PNGspeedY2;

/* Strawberry */
var PNG3;
var xPNG3 = 95, yPNG3 = 90;
var PNGspeedX3, PNGspeedY3;


/* Sprite movement Var */
//var idleArray = [];
//var runArray = [];
var idleStrings = []; //textfiles array
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
var health = 50;
var myTime = 10;

/* Sounds */
var goodFood;
var badFood;
var bgMusic;

/* Particles */
const particles = [];
var phealth = 100;



function preload() {
    idleStrings = loadStrings("../textfiles/idle.txt");
    runStrings = loadStrings("../textfiles/run.txt");

}

function setup() {
    createCanvas(1000, 600);

   /*  Animation copy and paste */
    myAnimation = new mySprite( 200, 200, 150, 150);
    myAnimation.myLoadAnimation('idle', idleStrings);
    myAnimation.myLoadAnimation('run', runStrings);

     //compact way to add an image
    PNG1 = new Sprite(random(200, 900), random(100,500),100,100, 'static');
    PNG1.img = "../images/Banana.png";
    PNG1.scale = 0.5;
    PNG1.diameter = 50;

      //compact way to add an image
    PNG2 = new Sprite(random(200, 900), random(100,500),100,100, 'static');
    PNG2.img = "../images/Lemon.png";
    PNG2.scale = 0.5;
    PNG2.diameter = 10;

    //compact way to add an image
    PNG3 = new Sprite(random(200, 900), random(100,500),100,100, 'static');
    PNG3.img = "../images/Strawberry.png";
    PNG3.scale = 0.5;
    PNG3.diameter = 10;
    

    
/* Timer stuff */
    setInterval(changeTime, 100);
    setInterval(countDown, 1000);

} 

function draw() {
    background(120);

    /* Pink square Mouse Movement */
    fill(252, 3, 207)
    square(xmouse, ymouse, 10)



/* Character movement copy & paste teach */
if(kb.pressing('d'))
{
    if(myAnimation.isColliding(PNG2))
    {

        PNG2.remove();
        health += 10
        PNG2 = new Sprite(random(200, 900), random(100,500),100,100, 'static');
        PNG2.img = "../images/Lemon.png";
        PNG2.scale = 0.5;
        PNG2.diameter = 10;

        /* Particles */
        createParticles(PNG2.position.x, PNG2.position.y);
        phealth -= 1;
            if(phealth <= 0)
            {
                PNG2.remove();
                PNG2 = null; }

        
    }  
    else if(myAnimation.isColliding(PNG1))
    {
        PNG1.remove();
        health -= 10
        PNG1 = new Sprite(random(200, 900), random(100,500),100,100, 'static');
        PNG1.img = "../images/Banana.png";
        PNG1.scale = 0.5;
        PNG1.diameter = 50;

        /* Particles */
        createParticles(PNG1.position.x, PNG1.position.y);
        phealth -= 1;
            if(phealth <= 0)
            {
                PNG1.remove();
                PNG1 = null; }
        
    } 
    else if(myAnimation.isColliding(PNG3))
    {
        PNG3.remove();
        health += 10
        PNG3 = new Sprite(random(200, 900), random(100,500),100,100, 'static');
        PNG3.img = "../images/Strawberry.png";
        PNG3.scale = 0.5;
        PNG3.diameter = 10;

        /* Particles */
        createParticles(PNG3.position.x, PNG3.position.y);
        phealth -= 1;
            if(phealth <= 0)
            {
                PNG3.remove();
                PNG3 = null; }
        
    } 
    myAnimation.updatePosition('forward');
    myAnimation.drawAnimation('run');    
      
}
else if(kb.pressing('a'))
{
    if(myAnimation.isColliding(PNG2))
    {
        PNG2.remove();
        health += 10
        PNG2.img
    }  
    myAnimation.updatePosition('reverse');
    myAnimation.drawAnimation('run');        
}
else if(kb.pressing('w'))
{
    if(myAnimation.isColliding(PNG1))
    {
        PNG2.remove();
        health += 10
        PNG2.img
        
    } 
    myAnimation.updatePosition('up');
    myAnimation.drawAnimation('run'); 

}
else if(kb.pressing('s'))
{
    if(myAnimation.isColliding(PNG1))
    {
        PNG2.remove();
        health += 10
        PNG2.img
        
    } 
    myAnimation.updatePosition('down');   
    myAnimation.drawAnimation('run');        
}
else
{
    myAnimation.drawAnimation('idle');
} 

/* PNG2.debug = mouseIsPressed; */



   /* Text */
   fill(250, 35, 92)
   textSize(14);
   textSize(30);
   text("Health : " + health, 400, 50);


    /*  Winner and Bad Display */
   if (health == 100) {
    fill(250, 35, 92)
    textSize(60);
    text("Winner", 400, 300);
    
}
else if (health == 0) {
    fill(250, 35, 92)
    textSize(60);
    text("Too Bad", 400, 300);
}

}


/* Timers */
function changeTime() {
    i++;
    if (i > idleStrings.length - 1) {
        i = 0;
    }
}

function changeTime() {
    i++;
    if (i > idleStrings.length - 1) {
        i = 0;
    }
}

function countDown() {
    myTime--;
    if (myTime < 0) {
        myTime = 10;
    
    }
}


/* Mouse Square */
function mouseMoved() {
    xmouse = mouseX;
    ymouse = mouseY;
}

/* Particles Function */
function createParticles(x,y)
{
for (let i = 0; i < 5; i++) {
    let p = new Particle(x,y);
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}
