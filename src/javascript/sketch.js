var screenWidth, screenHight, padding;
var hasBeenDelt = false
function setup() {
   screenWidth = 800;
   screenHight = 800;
   padding = 50; //used to add boarder
  backgroundImage = loadImage("assets/background.png");
  deck = new deck();
  createCanvas(screenWidth,screenHight);
  rectMode(CENTER);
 
  deck.shuffle();
  
   
 
  
  
}

function draw() {
  background(backgroundImage);
 
  deck.deal();
  
  
  
}