var screenWidth, screenHight, padding;
var hasBeenDelt = false
let won = false;
var suit;
let tempCardNum= [];
var cardImages = [];
let x = 0
let currentIndex;
var value;

function preload()
{
  for (let i = 0; i<4; i++){
    switch(i){
      case 0:
         suit = 'S';
       
         break;
      case 1:
        suit = 'C';
        break;
      case 2:
        suit ='H';
        break;
      case 3:
        suit = 'D';
        break;
      default: throw new error("out of bounds");
        
    }
      
    for( let j = 1;j<14;j++){
      currentIndex = j;
     switch(j){
       case 1:
         value = 'A'
         break;
       case 11:
         value = 'J'
         break;
       case 12:
         value = 'Q'
         break;
       case 13:
         value = 'K'
         break;
       default:
         value = j;
         console.log("no special case");
         break;

     }
     tempCardNum[j-1] = (value + suit + '.png')
     console.log("tempCardNum: " +  tempCardNum[j-1])
     
       
      console.log("inner loop count: " + j)
      cardImages[x] = loadImage('assets/images/cards/'+ tempCardNum[j-1])
      console.log("attempting to load " + tempCardNum[j-1])
      console.log("cardLoaded: " + cardImages[x])
      x++
    }
    
      
      
    
      
      
    
  }
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
  backgroundWon = loadImage("assets/images/background.jpg");
  deck = new deck(won);
  values = new values();
  createCanvas(screenWidth,screenHight);
  
  rectMode(CENTER);
 
  deck.shuffle();
  backgroundMusic.play();
  
 
 
  
  
}

function draw() {
  deck.wonCheck(won);
  if(!won){
    background(backgroundImage);
  }else{
    background(backgroundWon);
  }
  
  
 
  deck.deal();
  //text(this.discardPile[this.discardPileHeadPointer],this.discardPileXPosition,this.discardPileYPosition);

 // deck.dealDeckAndDiscard();
 let countOfZeros = 0;
 let temp = deck.getCardCheckValues();
for(let i = 0; i<27;i++){
  if(temp[i] == 0){
    countOfZeros++
   // console.log("count: " + countOfZeros)
  }if (countOfZeros == 27){
    
    won = true;
  }
  
}
  
  
}
function mouseClicked(){
 // let rightOfCard = deck.getCardXPositon(0,0) + (deck.getCardWidth()/2)
 // let leftOfCard = deck.getCardXPositon(0,0) - (deck.getCardWidth()/2)
 // let topOfCard = deck.getCardYPositon(0) - (deck.getCardHeight()/2)
  //let bottomOfCard = deck.getCardYPositon(0) + (deck.getCardHeight()/2)
    
  for(i = 0; i < 28; i++){


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
          values.setName(deck.getCardName(27-i));
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
       // if(deck.getTopOfDeck == " "){
       //   deck.incrementHeadPointer;
       // }
        console.log("top of discard: " +  deck.getDiscardPileIndex(deck.getDiscardPileHeadPointer()))
        console.log("discard pile head pointer: " + deck.discardPileHeadPointer)
        deck.incrementDiscardPileHeadPointer();
        deck.setDiscardPileIndex(deck.getDiscardPileHeadPointer() ,deck.getDeckPileIndex(deck.getDeckPileHeadPointer()));
        deck.incrementHeadPointer();
       
      }
    }
    if(keyCode === 72){
      window.open('src/HTML/howToPlay.html')
    }
    if (keyCode === 82){
      window.location.reload();
      
      
    }
  }
