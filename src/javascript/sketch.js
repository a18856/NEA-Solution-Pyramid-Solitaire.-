var screenWidth, screenHight, padding;
var hasBeenDelt = false
let k = 0;
function preload()
{
  backgroundMusic = loadSound('assets/audio/WetHands.wav');
  cardMatchNoise = loadSound("assets/audio/cardMatchNoise.wav")
  failedMatchNoise = loadSound('assets/audio/failedMatchNoise.wav')
  clickNoise = loadSound('assets/audio/clickNoise.mp3')
}
 
function setup() {
   screenWidth = 800;
   screenHight = 800;
   padding = 50; //used to add boarder
  backgroundImage = loadImage("assets/images/background.png");
  deck = new deck();
  values = new values();
  createCanvas(screenWidth,screenHight);
  rectMode(CENTER);
 
  deck.shuffle();
  backgroundMusic.play();
   
 
  
  
}

function draw() {
  background(backgroundImage);
 
  deck.deal();
  
  
  
}
function mouseClicked(){
 // let rightOfCard = deck.getCardXPositon(0,0) + (deck.getCardWidth()/2)
 // let leftOfCard = deck.getCardXPositon(0,0) - (deck.getCardWidth()/2)
 // let topOfCard = deck.getCardYPositon(0) - (deck.getCardHeight()/2)
  //let bottomOfCard = deck.getCardYPositon(0) + (deck.getCardHeight()/2)
    
  for(i = 0; i < 27; i++){


    if((mouseX <= deck.getCardDirections(i,0) && mouseX >= deck.getCardDirections(i,1))&&(mouseY >= deck.getCardDirections(i,2) && mouseY <= deck.getCardDirections(i,3))){
      console.log("if statment collison")
        if((27-i) <= 20){
          console.log("if statment less that or = 20")
          let layer = deck.layerCheck(27-i);
          if((deck.getCardCheckValuesIndex((27-i) + layer) == 0) && (deck.getCardCheckValuesIndex(((27-i) + layer) + 1) == 0)){//uses layer of current card to find the two cards below it
			        console.log("you have clicked card " + (27-i));
          		console.log("name: " + deck.getCardNames(27-i));
          		values.setName(deck.getCardNames(27-i))
          		console.log("value: " + values.valueConverter());
          		values.pushLastTwoCardsValues(values.valueConverter());
          		values.pushLastTwoCardNames(deck.getCardNames(27-i));
          		values.combinationCheck();
          		console.log("last 2: " + values.getLastTwoCardsValues());
          		clickNoise.play();
              k++;
              console.log("e: " + k);
          }
        }else{
          
          console.log("you have clicked card " + (27-i));
          console.log("name: " + deck.getCardNames(27-i));
          values.setName(deck.getCardNames(27-i))
          console.log("value: " + values.valueConverter());
          values.pushLastTwoCardsValues(values.valueConverter());
          values.pushLastTwoCardNames(deck.getCardNames(27-i));
          values.combinationCheck();
          console.log("last 2: " + values.getLastTwoCardsValues());
          clickNoise.play();
        }
        
    
    }
}
    //console.log("you have not clicked a card");
    //console.log("mouseX " + mouseX);
    //console.log("mouseY " + mouseY);
  
}