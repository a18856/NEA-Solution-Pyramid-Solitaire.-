var screenWidth
var screenHight
var padding
function setup() {
   screenWidth = 800;
   screenHight = 800;
   padding = 50; //used to add boarder
  backgroundImage = loadImage("assets/background.png");
  deck = new deck();
  createCanvas(screenWidth,screenHight);
  rectMode(CENTER);
 
  deck.shuffle();
  deck.deal();
   
 console.log (deck.cardWidth);
  
  
}

function draw() {
  background(backgroundImage);
 
  
  
  
  
}