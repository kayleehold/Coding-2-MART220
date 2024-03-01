class Sprite {

   constructor(myfilePath, x, y, w, h) {
   
      this.mySprite = loadImage(myfilePath);
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
   }

       // functions
       updateX(x) {
         this.x = x;
     }
 
     updateFlip(flipX) {
         this.flipX = flipX;
     }
     draw() {
      rect(this.x  , this.y+150, this.w/2, this.h/4);
         if (this.flipX) {
             // The push and pop functions save and reset the previous transformation.
             push();
             // Scale -1, 1 means reverse the x axis, keep y the same.
             scale(-1, 1);
             // Because the x-axis is reversed, we need to draw at different x position.
             image(this.mySprite, -this.x - this.w / 2, this.y);
             pop();
         }
         else {
             image(this.mySprite, this.x, this.y);
 
         }
 
     }
 
     checkCollision(x2, y2, w2, h2) {
      
         if (
             this.x - this.w / 2 < x2 + w2 / 2 &&
             this.x + w2 / 2 > x2 - this.w / 2 &&
             this.y+150 - h2 / 4 < y2 + this.h / 4 &&
             this.y+150 + h2 / 4 > y2 - this.h / 4
     
         ) {
             return true;
         } else {
             return false;
         }
     }
 }