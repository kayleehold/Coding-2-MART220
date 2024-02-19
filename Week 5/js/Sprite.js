class Sprite {

   constructor(myfilePath, x, y, w, h) {
      this.myfilePath = myfilePath;
      this.mySprite = loadImage(this.myfilePath);
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
   }

   setTurnX(turnX)
   {
      this.turnX = turnX;
   }

   updateX(x)
   {
      this.x = x;
   }

   updateY(y)
   {
      this.y = y;
   }

   draw() {
      if(this.turnX)
      {
         push();
         scale(-1, 1);
         image(this.mySprite, -this.x-this.w, this.y)
         pop();
      } 
      else
      {
         image(this.mySprite, this.x, this.y)
      }
   }

   donutInteraction(donutX, donutY, donutW)
   {
      var imageRadius = this.w /2;
      if(checkCollision(this.x, this.y, imageRadius, imageRadius, donutX, donutY, donutW *2, donutW * 2))
      {
         hitDonut.push({x: this.x, y: this.y});
         console.log(this.x + "= x" + this.y + "= y")
      }
   }

}