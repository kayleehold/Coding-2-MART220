class Sprite {

   constructor(myfilePath, x, y, w, h) {
      this.myfilePath = myfilePath;
      this.mySprite = loadImage(this.myfilePath);
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
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
      image(this.mySprite, this.x, this.y)
   }
}