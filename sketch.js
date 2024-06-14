function setup() {
    createCanvas(900, 900) ;
      background("purple");
    
  }
 
 function draw() {
   
   stroke("green");
   fill("blue");
   
   if(mouseIsPressed){ 
     circle(mouseX, mouseY, 10, 10);
   }
 }