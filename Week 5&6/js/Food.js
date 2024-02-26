class Donut {

   constructor(x, y, w,) {
      this.x = x;
      this.y = y;
      this.w = w;
   }
   draw(){
      /* Donutbody */
    fill(181, 117, 78);
    circle(this.x, this.y, this.w);
    /* Center */
    fill(207, 196, 190);
    circle(this.x, this.y, this.w -100);
   }


}

class Sprinkle {

   constructor(x, y, w,) {
      this.x = x;
      this.y = y;
      this.w = w;
   }
   draw(){
      circle(this.x, this.y, this.w);
   }


}