var screenWidth, screenHight, padding;
var hasBeenDelt = false

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
    
   if((mouseX <= deck.getCardDirections(0,0) && mouseX >= deck.getCardDirections(0,1))&&(mouseY >= deck.getCardDirections(0,3) && mouseY <= deck.getCardDirections(0,4))){//card 27
      console.log(" you have clicked card 27 ");
      console.log("name: " + deck.getCardNames(27));
      values.setName(deck.getCardNames(27))
      clickNoise.play();
      console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(0));
      let tempName;
      let tempCardNum;
      values.combinationCheck()
     /* if(values.combinationCheck()){

        for(let i = 0;i<1;i++){
         if(getLastTwoCardsNames[i] != deck.getCardNames(27)){
            tempName = getLastTwoCardsNames[i]
         }
         for(let i = 0;i<51;i++){
           if (deck.getDeckListIndex[i] == tempName){

          }

         }
       }
       deck.setCardCheckValues(27,0)
       deck.setCardCheckValues()
     } */
     console.log("last 2: " + values.getLastTwoCardsValues());
      

    }else if((mouseX <= deck.getCardDirections(1,0) && mouseX >= deck.getCardDirections(1,1))&&(mouseY >= deck.getCardDirections(1,3) && mouseY <= deck.getCardDirections(1,4))){
      console.log("you have clicked card 26");
      console.log("name: " + deck.getCardNames(26));
      values.setName(deck.getCardNames(26))
      console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(1));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(2,0) && mouseX >= deck.getCardDirections(2,1))&&(mouseY >= deck.getCardDirections(2,3) && mouseY <= deck.getCardDirections(2,4))){
      console.log("you have clicked card 25");
      console.log("name: " + deck.getCardNames(25));
      values.setName(deck.getCardNames(25))
      console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(2));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(3,0) && mouseX >= deck.getCardDirections(3,1))&&(mouseY >= deck.getCardDirections(3,3) && mouseY <= deck.getCardDirections(3,4))){
      console.log("you have clicked card 24");
      console.log("name: " + deck.getCardNames(24));
      values.setName(deck.getCardNames(24))
      console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(3));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(4,0) && mouseX >= deck.getCardDirections(4,1))&&(mouseY >= deck.getCardDirections(4,3) && mouseY <= deck.getCardDirections(4,4))){
      console.log("you have clicked card 23");
      console.log("name: " + deck.getCardNames(23));
      values.setName(deck.getCardNames(23))
      console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(4));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(5,0) && mouseX >= deck.getCardDirections(5,1))&&(mouseY >= deck.getCardDirections(5,3) && mouseY <= deck.getCardDirections(5,4))){
      console.log("you have clicked card 22");
      console.log("name: " + deck.getCardNames(22));
      values.setName(deck.getCardNames(22))
      console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(5));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(6,0) && mouseX >= deck.getCardDirections(6,1))&&(mouseY >= deck.getCardDirections(6,3) && mouseY <= deck.getCardDirections(6,4))){
      console.log("you have clicked card 21");
      console.log("name: " + deck.getCardNames(21));
      values.setName(deck.getCardNames(21))
      console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(6));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();
      
    }else if((mouseX <= deck.getCardDirections(7,0) && mouseX >= deck.getCardDirections(7,1))&&(mouseY >= deck.getCardDirections(7,3) && mouseY <= deck.getCardDirections(7,4))){
      console.log("you have clicked card 20");
      console.log("name: " + deck.getCardNames(20));
      values.setName(deck.getCardNames(20))
      console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(7));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(8,0) && mouseX >= deck.getCardDirections(8,1))&&(mouseY >= deck.getCardDirections(8,3) && mouseY <= deck.getCardDirections(8,4))){
      console.log("you have clicked card 19");
      console.log("name: " + deck.getCardNames(19));
      values.setName(deck.getCardNames(19))
       console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(8));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(9,0) && mouseX >= deck.getCardDirections(9,1))&&(mouseY >= deck.getCardDirections(9,3) && mouseY <= deck.getCardDirections(9,4))){
      console.log("you have clicked card 18");
      console.log("name: " + deck.getCardNames(18));
      values.setName(deck.getCardNames(18))
       console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(9));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();
      
    }else if((mouseX <= deck.getCardDirections(10,0) && mouseX >= deck.getCardDirections(10,1))&&(mouseY >= deck.getCardDirections(10,3) && mouseY <= deck.getCardDirections(10,4))){
      console.log("you have clicked card 17");
      console.log("name: " + deck.getCardNames(17));
      values.setName(deck.getCardNames(17))
      console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(10));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(11,0) && mouseX >= deck.getCardDirections(11,1))&&(mouseY >= deck.getCardDirections(11,3) && mouseY <= deck.getCardDirections(11,4))){
      console.log("you have clicked card 16");
      console.log("name: " + deck.getCardNames(16));
      values.setName(deck.getCardNames(16))
       console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(11));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(12,0) && mouseX >= deck.getCardDirections(12,1))&&(mouseY >= deck.getCardDirections(12,3) && mouseY <= deck.getCardDirections(12,4))){
      console.log("you have clicked card 15");
      console.log("name: " + deck.getCardNames(15));
      values.setName(deck.getCardNames(15))
      console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(12));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(13,0) && mouseX >= deck.getCardDirections(13,1))&&(mouseY >= deck.getCardDirections(13,3) && mouseY <= deck.getCardDirections(13,4))){
      console.log("you have clicked card 14");
      console.log("name: " + deck.getCardNames(14));
      values.setName(deck.getCardNames(14))
      console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(13));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(14,0) && mouseX >= deck.getCardDirections(14,1))&&(mouseY >= deck.getCardDirections(14,3) && mouseY <= deck.getCardDirections(14,4))){
      console.log("you have clicked card 13");
      console.log("name: " + deck.getCardNames(13));
      values.setName(deck.getCardNames(13))
      console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(14));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(15,0) && mouseX >= deck.getCardDirections(15,1))&&(mouseY >= deck.getCardDirections(15,3) && mouseY <= deck.getCardDirections(15,4))){
      console.log("you have clicked card 12");
      console.log("name: " + deck.getCardNames(12));
      values.setName(deck.getCardNames(12))
       console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(15));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(16,0) && mouseX >= deck.getCardDirections(16,1))&&(mouseY >= deck.getCardDirections(16,3) && mouseY <= deck.getCardDirections(16,4))){
      console.log("you have clicked card 11");
      console.log("name: " + deck.getCardNames(11));
      values.setName(deck.getCardNames(11))
      console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(16));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(17,0) && mouseX >= deck.getCardDirections(17,1))&&(mouseY >= deck.getCardDirections(17,3) && mouseY <= deck.getCardDirections(17,4))){
      console.log("you have clicked card 10");
      console.log("name: " + deck.getCardNames(10));
      values.setName(deck.getCardNames(10))
      console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(17));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(18,0) && mouseX >= deck.getCardDirections(18,1))&&(mouseY >= deck.getCardDirections(18,3) && mouseY <= deck.getCardDirections(18,4))){
      console.log("you have clicked card 9");
      console.log("name: " + deck.getCardNames(9));
      values.setName(deck.getCardNames(9))
      console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(18));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(19,0) && mouseX >= deck.getCardDirections(19,1))&&(mouseY >= deck.getCardDirections(19,3) && mouseY <= deck.getCardDirections(19,4))){
      clickNoise.play();
      console.log("you have clicked card 8");
      console.log("name: " + deck.getCardNames(8));
      values.setName(deck.getCardNames(8))
      console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(19));
      if(values.combinationCheck()){
        deck.setCardCheckValues(19,0)
      }
      console.log("last 2: " + values.getLastTwoCardsValues());
      

    }else if((mouseX <= deck.getCardDirections(20,0) && mouseX >= deck.getCardDirections(20,1))&&(mouseY >= deck.getCardDirections(20,3) && mouseY <= deck.getCardDirections(20,4))){
      console.log("you have clicked card 7");
      console.log("name: " + deck.getCardNames(7));
      values.setName(deck.getCardNames(7))
      console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(20));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(21,0) && mouseX >= deck.getCardDirections(21,1))&&(mouseY >= deck.getCardDirections(21,3) && mouseY <= deck.getCardDirections(21,4))){
      console.log("you have clicked card 6");
      console.log("name: " + deck.getCardNames(6));
      values.setName(deck.getCardNames(6))
      console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(21));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(22,0) && mouseX >= deck.getCardDirections(22,1))&&(mouseY >= deck.getCardDirections(22,3) && mouseY <= deck.getCardDirections(22,4))){
      console.log("you have clicked card 5");
      console.log("name: " + deck.getCardNames(5));
      values.setName(deck.getCardNames(5))
       console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(22));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(23,0) && mouseX >= deck.getCardDirections(23,1))&&(mouseY >= deck.getCardDirections(23,3) && mouseY <= deck.getCardDirections(23,4))){
      console.log("you have clicked card 4");
      console.log("name: " + deck.getCardNames(4));
      values.setName(deck.getCardNames(254))
       console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(23));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(24,0) && mouseX >= deck.getCardDirections(24,1))&&(mouseY >= deck.getCardDirections(24,3) && mouseY <= deck.getCardDirections(24,4))){
      console.log("you have clicked card 3");
      console.log("name: " + deck.getCardNames(3));
      values.setName(deck.getCardNames(3))
       console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(24));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(25,0) && mouseX >= deck.getCardDirections(25,1))&&(mouseY >= deck.getCardDirections(25,3) && mouseY <= deck.getCardDirections(25,4))){
      console.log("you have clicked card 2");
      console.log("name: " + deck.getCardNames(2));
      values.setName(deck.getCardNames(2))
       console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(25));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(26,0) && mouseX >= deck.getCardDirections(26,1))&&(mouseY >= deck.getCardDirections(26,3) && mouseY <= deck.getCardDirections(26,4))){
      console.log("you have clicked card 1");
      console.log("name: " + deck.getCardNames(1));
      values.setName(deck.getCardNames(1))
       console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(26));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues());
      clickNoise.play();

    }else if((mouseX <= deck.getCardDirections(27,0) && mouseX >= deck.getCardDirections(27,1))&&(mouseY >= deck.getCardDirections(27,3) && mouseY <= deck.getCardDirections(27,4))){
      console.log("you have clicked card 0");
      console.log("name: " + deck.getCardNames(0));
      values.setName(deck.getCardNames(0))
       console.log("value: " + values.valueConverter());
      values.pushLastTwoCardsValues(values.valueConverter());
      values.pushLastTwoCardNames(deck.getCardNames(27));
      values.combinationCheck();
      console.log("last 2: " + values.getLastTwoCardsValues())
      clickNoise.play();
      
    }
    else{
    console.log("you have not clicked a card");
    console.log("mouseX " + mouseX);
    console.log("mouseY " + mouseY);
  }
}