function setup() {
  var screenWidth = 800;
  var screenHight = 800;
  deck = new deck();
  createCanvas(screenWidth,screenHight);
  rectMode(CENTER);
  for(let i = 0; i < 5; i++){
    deck.shuffle();
  }
  
}

function draw() {
  background("green");
  
  
  
  
}