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
  //text(this.discardPile[this.discardPileHeadPointer],this.discardPileXPosition,this.discardPileYPosition);

 // deck.dealDeckAndDiscard();
  
  
  
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
          if((deck.getCardCheckValuesIndex((27-i) + layer) == 0) && (deck.getCardCheckValuesIndex(((27-i) + layer) + 1) == 0)){//uses layer of current card to find the two cards below it and checks if they are removed
			        console.log("you have clicked card " + (27-i));
          		console.log("name: " + deck.getCardNames(27-i));
          		values.setName(deck.getCardNames(27-i));
          		console.log("value: " + values.valueConverter());
          		values.pushLastTwoCardsValues(values.valueConverter());
          		values.pushLastTwoCardNames(deck.getCardNames(27-i));
              values.setCurrentPyramidPosition(27-i);
          		values.combinationCheck();
          		console.log("last 2: " + values.getLastTwoCardsValues());
          		clickNoise.play();
           
          }
        }else{
          
          console.log("you have clicked card " + (27-i));
          console.log("name: " + deck.getCardNames(27-i));
          values.setName(deck.getCardNames(27-i));
          console.log("value: " + values.valueConverter());
          values.pushLastTwoCardsValues(values.valueConverter());
          values.pushLastTwoCardNames(deck.getCardNames(27-i));
          values.setCurrentPyramidPosition(27-i);
          values.combinationCheck();
          console.log("last 2: " + values.getLastTwoCardsValues());
          clickNoise.play();
        }
        
    
    }
}
if((mouseX <= deck.getTopOfDeckXPosition() + (deck.getCardWidth()/2)&& mouseX >= deck.getTopOfDeckXPosition()-(deck.getCardWidth()/2))&&(mouseY >= deck.getTopOfDeckYPosition() - (deck.getCardHeight()/2) && mouseY <= deck.getTopOfDeckYPosition() + (deck.getCardHeight()/2))){
  console.log("you have clicked the deckPile");
          values.setDeckPileCheckValue(1);
          console.log("name: " + deck.getTopOfDeck());
          values.setName(deck.getTopOfDeck());
          console.log("value: " + values.valueConverter());
          values.pushLastTwoCardsValues(values.valueConverter());
          values.pushLastTwoCardNames(deck.getTopOfDeck());
          values.setCurrentPyramidPosition(28)
          values.combinationCheck();
       //   deck.incrementHeadPointer();
           
          console.log("last 2: " + values.getLastTwoCardsValues());
          clickNoise.play();
}
if((mouseX <= deck.getDiscardPileXPosition() + (deck.getCardWidth()/2)&& mouseX >= deck.getDiscardPileXPosition()-(deck.getCardWidth()/2))&&(mouseY >= deck.getDiscardPileYPosition() - (deck.getCardHeight()/2) && mouseY <= deck.getDiscardPileYPosition() + (deck.getCardHeight()/2))){
  console.log("you have clicked the discard pile");
          values.setDiscardPileCheckValue(1);
          console.log("name: " + deck.discardPile[deck.discardPileHeadPointer]);
          values.setName(deck.discardPile[deck.discardPileHeadPointer]);
          console.log("value: " + values.valueConverter());
          values.pushLastTwoCardsValues(values.valueConverter());
          values.pushLastTwoCardNames(deck.discardPile[deck.discardPileHeadPointer]);
          values.setCurrentPyramidPosition(29)
          values.combinationCheck();
         // deck.incrementDiscardPileHeadPointer();
         
          console.log("last 2: " + values.getLastTwoCardsValues());
          clickNoise.play();
}
    //console.log("you have not clicked a card");
    //console.log("mouseX " + mouseX);
    //console.log("mouseY " + mouseY);
  
}
  function keyPressed() {
    if (keyCode === 68){
      if(deck.getDeckPileHeadPointer() == 24){
        console.log("all items in array have been put in the discard pile. Putting discard pile into deck")
        for(let i = 0; i< 24; i++){
          deck.setDeckPileIndex(deck.getDiscardPileIndex(i),i);
          deck.resetDiscardPileHeadPointer();
          deck.resetHeadPointer();
        }
      }else{
        console.log("top of discard: " +  deck.getDiscardPileIndex(deck.getDiscardPileHeadPointer()))
        console.log("discard pile head pointer: " + deck.discardPileHeadPointer)
        deck.incrementDiscardPileHeadPointer();
        deck.setDiscardPileIndex(deck.getDiscardPileHeadPointer() ,deck.getDeckPileIndex(deck.getDeckPileHeadPointer()));
        deck.incrementHeadPointer();
       
      }
    }
  }
