class deck{
  
   constructor(won){
     this.won = won
     this.deckList = ["AS","2S","3S","4S",
                      "5S","6S","7S","8S",
                      "9S","10S","JS","QS",
                      "KS","AC","2C","3C",
                      "4C","5C","6C","7C",
                      "8C","9C","10C","JC",
                      "QC","KC","AH","2H",
                      "3H","4H","5H","6H",
                      "7H","8H","9H","10H",
                      "JH","QH","KH","AD",
                      "2D","3D","4D","5D",
                      "6D","7D","8D","9D",
                      "10D","JD","QD","KD"];
    this.dealOrder = new Array(28);   
    this.cardNames = new Array(28);  //used to find values of delt cards. Index corrisponds wiht card number.
    this.deckPile = new Array(24); 
    this.deckPileSetupCheck = false;
    this.discardPile = [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "];           
    this.headPointer = 0;
    this.discardPileHeadPointer = 0;
    this.hasDeckBeenDelt = false;
    this.tailpointer = this.deckList.length-1;
    this.topOfDeckXPosition = 700;
    this.topOfDeckYPosition = 100;
    this.discardPileXPosition = 700;
    this.discardPileYPosition = 300;
   // this.cardDrawButtonXPosition = 700;
   // this.cardDrawButtonWidth = 40;
   // this.cardDrawButtonHight = 40;
  //  this.cardDrawButtonYPosition = this.discardPileYPosition - this.topOfDeckYPosition;
    this.cardSpacing = 100;  
    this.cardWidth = 80;
    this.rowSubtractionLookup = [7,7,7,7,7,7,6,6,6,6,6,5,5,5,5,4,4,4,3,3,2];
    this.cardCheckValues = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];//used to represent which cards should be hidden or not. 1 means visible and 0 means hidden
    this.cardHight = this.cardWidth*2 //1:2 ratio bertween card with and hight
    this.cardXPositon = [//each array contains the x position of cards in a row starting from the bottom up
      [100,200,300,400,500,600,700],//bottom row
      [150,250,350,450,550,650],//6th row
      [200,300,400,500,600],//5th row
      [250,350,450,550],//4th row
      [300,400,500],//3rd row
      [350,450],//2nd row
      [400]//top row
    ];//the array contains the y position of cards in a row starting from the bottom up. This is calculaed by incrementing the card spacing
    this.cardYPositon = [700,600,500,400,300,200,100];
    this.cardDirections = [// 4 items in each array starting with right then left then top them middle. Calculated by adding half of width and hight to the center of the card. Used to register  clicks.
      [(this.getCardXPositon(0,0) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(0,0) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(0) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(0) + (this.getCardHeight()/2))/*bottom*/],// card 27
      [(this.getCardXPositon(0,1) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(0,1) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(0) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(0) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(0,2) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(0,2) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(0) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(0) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(0,3) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(0,3) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(0) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(0) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(0,4) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(0,4) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(0) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(0) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(0,5) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(0,5) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(0) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(0) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(0,6) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(0,6) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(0) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(0) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(1,0) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(1,0) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(1) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(1) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(1,1) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(1,1) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(1) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(1) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(1,2) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(1,2) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(1) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(1) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(1,3) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(1,3) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(1) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(1) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(1,4) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(1,4) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(1) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(1) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(1,5) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(1,5) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(1) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(1) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(2,0) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(2,0) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(2) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(2) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(2,1) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(2,1) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(2) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(2) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(2,2) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(2,2) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(2) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(2) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(2,3) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(2,3) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(2) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(2) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(2,4) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(2,4) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(2) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(2) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(3,0) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(3,0) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(3) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(3) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(3,1) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(3,1) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(3) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(3) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(3,2) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(3,2) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(3) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(3) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(3,3) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(3,3) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(3) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(3) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(4,0) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(4,0) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(4) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(4) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(4,1) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(4,1) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(4) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(4) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(4,2) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(4,2) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(4) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(4) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(5,0) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(5,0) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(5) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(5) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(5,1) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(5,1) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(5) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(5) + (this.getCardHeight()/2))/*bottom*/],
      [(this.getCardXPositon(6,0) + (this.getCardWidth()/2)),/*right*/(this.getCardXPositon(6,0) - (this.getCardWidth()/2)),/*left*/(this.getCardYPositon(6) - (this.getCardHeight()/2)),/* top*/(this.getCardYPositon(6) + (this.getCardHeight()/2))/*bottom*/]
   ]

  }
  layerCheck(input){//unironicly the hardest thing here
   let i = -1;
   let j = 1;
   while (input > i) {
      //console.log("while i: " + i);
      i += j;
    
      //console.log("while j: " + j)
      j++;
    
      // count++;
      
    }
    return j-1;

  }
  shuffle(){
    let index = this.deckList.length, randomIndex; //declares index and random index
    do{

      randomIndex = Math.floor(Math.random() * index);// generates random index that has not been shuffled
      index--; //decrements index so that shuffled items are not reshuffled

      [this.deckList[index],this.deckList[randomIndex]] = [ this.deckList[randomIndex], this.deckList[index]];//swaps the item at index and random index hence shuffling them.
    }while(index != 0);//checks if there are still elements to be shuffled
      console.log("deck shuffled!");
      console.log(this.deckList);
  }

  deal(){
    for(let i = 0; i < 28; i++){
      if(this.dealOrder[i] == undefined){
        this.dealOrder[i] = "empty";//fills array with strings to avoid undefined type errors.
      }
    }
    
    for (let i = 0; i < 28; i++){
      
      this.dealOrder[i] = this.deckList[i]; //creates order in which cards are delt
      //this.headPointer++ //increments queue pointer for deck dequeueing the card
     textSize(17);
     //console.log("to be delt: " + this.dealOrder[i] );
    // console.log("x: " + this.cardXPositon[0][1]);
    // console.log("y: " + this.cardYPositon[1]);
    imageMode(CENTER)
     switch (i) {//                  X incrments by 100 & y by a seventh of the screen width(100px) which is equivelent to a cards width
      case 0: this.cardNames[27] = this.dealOrder[i];
      if(this.cardCheckValues[27] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[0][0],this.cardYPositon[0],this.cardWidth,this.cardHight)
        // rect(this.cardXPositon[0][0],this.cardYPositon[0],this.cardWidth,this.cardHight);
       //  text(this.dealOrder[i],this.cardXPositon[0][0],this.cardYPositon[0]);
         //card 27
      }
      break;   

      case 1: this.cardNames[26] = this.dealOrder[i];
      if(this.cardCheckValues[26] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[0][1],this.cardYPositon[0],this.cardWidth,this.cardHight);
         //rect(this.cardXPositon[0][1],this.cardYPositon[0],this.cardWidth,this.cardHight);
        // text(this.dealOrder[i],this.cardXPositon[0][1],this.cardYPositon[0]);
         
      }
      break;

      case 2: this.cardNames[25] = this.dealOrder[i];
      if(this.cardCheckValues[25] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[0][2],this.cardYPositon[0],this.cardWidth,this.cardHight);
         //rect(this.cardXPositon[0][2],this.cardYPositon[0],this.cardWidth,this.cardHight);
        // text(this.dealOrder[i],this.cardXPositon[0][2],this.cardYPositon[0]);
         

      }
      break;

      case 3: this.cardNames[24] = this.dealOrder[i];
      if(this.cardCheckValues[24] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[0][3],this.cardYPositon[0],this.cardWidth,this.cardHight);
        // rect(this.cardXPositon[0][3],this.cardYPositon[0],this.cardWidth,this.cardHight);
        // text(this.dealOrder[i],this.cardXPositon[0][3],this.cardYPositon[0]);
      }
      
         break;

      case 4: this.cardNames[23] = this.dealOrder[i];
      if(this.cardCheckValues[23] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[0][4],this.cardYPositon[0],this.cardWidth,this.cardHight);
         //rect(this.cardXPositon[0][4],this.cardYPositon[0],this.cardWidth,this.cardHight);
         //text(this.dealOrder[i],this.cardXPositon[0][4],this.cardYPositon[0]);
      }
      
         break;

      case 5: this.cardNames[22] = this.dealOrder[i];
      if(this.cardCheckValues[22] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[0][5],this.cardYPositon[0],this.cardWidth,this.cardHight);
         //rect(this.cardXPositon[0][5],this.cardYPositon[0],this.cardWidth,this.cardHight);
         //text(this.dealOrder[i],this.cardXPositon[0][5],this.cardYPositon[0]);

      }
      
         break;

      case 6: this.cardNames[21] = this.dealOrder[i];
      if(this.cardCheckValues[21] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[0][6],this.cardYPositon[0],this.cardWidth,this.cardHight);
        // rect(this.cardXPositon[0][6],this.cardYPositon[0],this.cardWidth,this.cardHight);
         // text(this.dealOrder[i],this.cardXPositon[0][6],this.cardYPositon[0]);//bottom row

      }
      
         break;//                    x  must be inbetween last row

      case 7: this.cardNames[20] = this.dealOrder[i]; 
      if(this.cardCheckValues[20] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[1][0],this.cardYPositon[1],this.cardWidth,this.cardHight);
         //rect(this.cardXPositon[1][0],this.cardYPositon[1],this.cardWidth,this.cardHight);
         //text(this.dealOrder[i],this.cardXPositon[1][0],this.cardYPositon[1]);
      }
          
         break;

      case 8: this.cardNames[19] = this.dealOrder[i];
      if(this.cardCheckValues[19] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[1][1],this.cardYPositon[1],this.cardWidth,this.cardHight);
         //rect(this.cardXPositon[1][1],this.cardYPositon[1],this.cardWidth,this.cardHight);
         // text(this.dealOrder[i],this.cardXPositon[1][1],this.cardYPositon[1]);
      }
      
         break;

      case 9: this.cardNames[18] = this.dealOrder[i];
      if(this.cardCheckValues[18] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[1][2],this.cardYPositon[1],this.cardWidth,this.cardHight);
         //rect(this.cardXPositon[1][2],this.cardYPositon[1],this.cardWidth,this.cardHight);
         //text(this.dealOrder[i],this.cardXPositon[1][2],this.cardYPositon[1]);
      }
      
         break;

      case 10: this.cardNames[17] = this.dealOrder[i];
      if(this.cardCheckValues[17] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[1][3],this.cardYPositon[1],this.cardWidth,this.cardHight);
         //rect(this.cardXPositon[1][3],this.cardYPositon[1],this.cardWidth,this.cardHight);
         //text(this.dealOrder[i],this.cardXPositon[1][3],this.cardYPositon[1]);
      }
      
         break;

      case 11: this.cardNames[16] = this.dealOrder[i];
      if(this.cardCheckValues[16] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[1][4],this.cardYPositon[1],this.cardWidth,this.cardHight);
        // rect(this.cardXPositon[1][4],this.cardYPositon[1],this.cardWidth,this.cardHight);
         //text(this.dealOrder[i],this.cardXPositon[1][4],this.cardYPositon[1]);
      }
      
         break;

      case 12: this.cardNames[15] = this.dealOrder[i];
      if(this.cardCheckValues[15] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[1][5],this.cardYPositon[1],this.cardWidth,this.cardHight);
        // rect(this.cardXPositon[1][5],this.cardYPositon[1],this.cardWidth,this.cardHight);
      //text(this.dealOrder[i],this.cardXPositon[1][5],this.cardYPositon[1]);// 6th row
      }
         break;

      case 13: this.cardNames[14] = this.dealOrder[i];
      if(this.cardCheckValues[14] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[2][0],this.cardYPositon[2],this.cardWidth,this.cardHight);
        // rect(this.cardXPositon[2][0],this.cardYPositon[2],this.cardWidth,this.cardHight);
         //text(this.dealOrder[i],this.cardXPositon[2][0],this.cardYPositon[2]);
      }
      
         break;

      case 14: this.cardNames[13] = this.dealOrder[i];
      if(this.cardCheckValues[13] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[2][1],this.cardYPositon[2],this.cardWidth,this.cardHight);
         //rect(this.cardXPositon[2][1],this.cardYPositon[2],this.cardWidth,this.cardHight);
         //text(this.dealOrder[i],this.cardXPositon[2][1],this.cardYPositon[2]);
      }
      
         break;

      case 15: this.cardNames[12] = this.dealOrder[i];
      if(this.cardCheckValues[12] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[2][2],this.cardYPositon[2],this.cardWidth,this.cardHight);
        // rect(this.cardXPositon[2][2],this.cardYPositon[2],this.cardWidth,this.cardHight);
         //text(this.dealOrder[i],this.cardXPositon[2][2],this.cardYPositon[2]);
      }
      
         break;

      case 16: this.cardNames[11] = this.dealOrder[i];
      if(this.cardCheckValues[11] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[2][3],this.cardYPositon[2],this.cardWidth,this.cardHight);
        // rect(this.cardXPositon[2][3],this.cardYPositon[2],this.cardWidth,this.cardHight);
         //text(this.dealOrder[i],this.cardXPositon[2][3],this.cardYPositon[2]);
      }
      
         break;

      case 17: this.cardNames[10] = this.dealOrder[i];
      if(this.cardCheckValues[10] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[2][4],this.cardYPositon[2],this.cardWidth,this.cardHight);
        // rect(this.cardXPositon[2][4],this.cardYPositon[2],this.cardWidth,this.cardHight);
      //text(this.dealOrder[i],this.cardXPositon[2][4],this.cardYPositon[2]);
      }
      //5th row
         break;

      case 18: this.cardNames[9] = this.dealOrder[i];
      if(this.cardCheckValues[9] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[3][0],this.cardYPositon[3],this.cardWidth,this.cardHight);
        // rect(this.cardXPositon[3][0],this.cardYPositon[3],this.cardWidth,this.cardHight);
         //text(this.dealOrder[i],this.cardXPositon[3][0],this.cardYPositon[3]);
      }
      
         break;

      case 19: this.cardNames[8] = this.dealOrder[i];
      if(this.cardCheckValues[8] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[3][1],this.cardYPositon[3],this.cardWidth,this.cardHight);
         // rect(this.cardXPositon[3][1],this.cardYPositon[3],this.cardWidth,this.cardHight);
          //text(this.dealOrder[i],this.cardXPositon[3][1],this.cardYPositon[3]);
      }
     
         break;

      case 20: this.cardNames[7] = this.dealOrder[i]; 
      if(this.cardCheckValues[7] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[3][2],this.cardYPositon[3],this.cardWidth,this.cardHight);
         //rect(this.cardXPositon[3][2],this.cardYPositon[3],this.cardWidth,this.cardHight);
         //text(this.dealOrder[i],this.cardXPositon[3][2],this.cardYPositon[3])
      }
      ;
         break;

      case 21: this.cardNames[6] = this.dealOrder[i];
      if(this.cardCheckValues[6] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[3][3],this.cardYPositon[3],this.cardWidth,this.cardHight);
         //rect(this.cardXPositon[3][3],this.cardYPositon[3],this.cardWidth,this.cardHight);
         //text(this.dealOrder[i],this.cardXPositon[3][3],this.cardYPositon[3]);//4th row
      }
      
         break;

      case 22: this.cardNames[5] = this.dealOrder[i];
      if(this.cardCheckValues[5] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[4][0],this.cardYPositon[4],this.cardWidth,this.cardHight);
          //rect(this.cardXPositon[4][0],this.cardYPositon[4],this.cardWidth,this.cardHight); 
          //text(this.dealOrder[i],this.cardXPositon[4][0],this.cardYPositon[4]);
      }
     
         break;

      case 23: this.cardNames[4] = this.dealOrder[i];
      if(this.cardCheckValues[4] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[4][1],this.cardYPositon[4],this.cardWidth,this.cardHight);
         //rect(this.cardXPositon[4][1],this.cardYPositon[4],this.cardWidth,this.cardHight); 
         //text(this.dealOrder[i],this.cardXPositon[4][1],this.cardYPositon[4]);
      }
      
         break;

      case 24: this.cardNames[3] = this.dealOrder[i];
      if(this.cardCheckValues[3] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[4][2],this.cardYPositon[4],this.cardWidth,this.cardHight);
         //rect(this.cardXPositon[4][2],this.cardYPositon[4],this.cardWidth,this.cardHight); 
         //text(this.dealOrder[i],this.cardXPositon[4][2],this.cardYPositon[4]);//3rd row
      }
      
         break;

      case 25: this.cardNames[2] = this.dealOrder[i];
      if(this.cardCheckValues[2] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[5][0],this.cardYPositon[5],this.cardWidth,this.cardHight); 
        // rect(this.cardXPositon[5][0],this.cardYPositon[5],this.cardWidth,this.cardHight); 
        // text(this.dealOrder[i],this.cardXPositon[5][0],this.cardYPositon[5]);
      }
      
         break;

      case 26: this.cardNames[1] = this.dealOrder[i];
      if(this.cardCheckValues[1] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[5][1],this.cardYPositon[5],this.cardWidth,this.cardHight);
        // rect(this.cardXPositon[5][1],this.cardYPositon[5],this.cardWidth,this.cardHight); 
        // text(this.dealOrder[i],this.cardXPositon[5][1],this.cardYPositon[5]);//2nd row
      }
      
         break;

      case 27: this.cardNames[0] = this.dealOrder[i];
      if(this.cardCheckValues[0] == 1){
         image(cardImages[this.textToImage(this.dealOrder[i])],this.cardXPositon[6][0],this.cardYPositon[6],this.cardWidth,this.cardHight); 
         // rect(this.cardXPositon[6][0],this.cardYPositon[6],this.cardWidth,this.cardHight); 
          //text(this.dealOrder[i],this.cardXPositon[6][0],this.cardYPositon[6]);//top row
      }
     
         break;
     
      default: throw new error("Fatal error. More cards have been delt than there are spaces."); 

     }
     imageMode(CORNER)
  }
  if(!this.deckPileSetupCheck){
      for(let i = 0;i<this.deckPile.length;i++){
            this.deckPile[i] = this.deckList[28+i];
            this.deckPileSetupCheck = true;
         }
       }
   
   //console.log("deckPile: " + this.deckPile);
  // console.log("discardPile: " + this.discardPile);
   //console.log("deck delt!");

       //console.log(this.won)
   if(!this.won){
   //draws the deckpile card onto the screen 
   imageMode(CENTER);
//image(cardImages[this.textToImage(this.deckPile[this.headPointer])],this.topOfDeckXPosition,this.topOfDeckYPosition,this.cardWidth,this.cardHight);
   rect(this.topOfDeckXPosition,this.topOfDeckYPosition,this.cardWidth,this.cardHight);
   text(this.deckPile[this.headPointer],this.topOfDeckXPosition,this.topOfDeckYPosition);
   //console.log("headpointer: " + this.headPointer)
//draws the discard pile card onto the screen
   
  // image(cardImages[this.textToImage(this.discardPile[this.discardPileHeadPointer])],this.discardPileXPosition,this.discardPileYPosition,this.cardWidth,this.cardHight);
   rect(this.discardPileXPosition,this.discardPileYPosition,this.cardWidth,this.cardHight);
   text(this.discardPile[this.discardPileHeadPointer],this.discardPileXPosition,this.discardPileYPosition);
   imageMode(CORNER);
}
   ellipse(200,100,125,100)
   text("score: " + values.getScore(),150,100);
   
   console.log(this.discardPile[this.discardPileHeadPointer])


//draws the card draw button
   //rect(this.cardDrawButtonXPosition,this.cardDrawButtonYPosition,this.cardDrawButtonWidth,this.cardDrawButtonHight);
   //text("Click To Draw A Card",this.cardDrawButtonXPosition,this.cardDrawButtonYPosition);
 }
wonCheck(input){
   this.won = input
 }
 textToImage(cardName){//linear search that returns the index that needs to be used to draw the right image
   for(let i = 0;i<52;i++){
      if(values.getCardListIndex(i) == cardName){
         return i;
   }
   }
   
 }
 // public getters

 
 getTopOfDeckXPosition = () => this.topOfDeckXPosition;

 getTopOfDeckYPosition = () => this.topOfDeckYPosition;

 getDiscardPileXPosition = () => this.discardPileXPosition; 

 getDiscardPileYPosition = () => this.discardPileYPosition; 

 getDiscardPileIndex = (input) => this.discardPile[input];

 getDeckPileIndex = (input) => this.deckPile[input];

 getRowSubtractionLookup = (input) => this.rowSubtractionLookup[input];
  
 getTopOfDeck = () => this.deckPile[this.headPointer]; 
   
  getDealOrder = () => this.dealOrder;

  getDealOrderIndex = (index) => this.dealOrder[index];
  
  getDeckPileHeadPointer = () => this.headPointer;
    
  getDiscardPileHeadPointer(){ 
   return this.discardPileHeadPointer;
}
  //getTailPointer = () => this.tailpointer;

  getCardHeight = () => this.cardHight;

  getCardSpacing = () => this.cardSpacing;

  getCardXPositon = (row,collum) => this.cardXPositon[row][collum];

  getCardDirections = (row,collum) => this.cardDirections[row][collum];

  getCardYPositon = (input) => this.cardYPositon[input];

  getCardCheckValues = () => this.cardCheckValues;

  getCardCheckValuesIndex = (input) => this.cardCheckValues[input];

  getCardNames(input){
   return this.cardNames[input];
  }

  getCardWidth = () => this.cardWidth;

  getHasDeckBeenDelt = () => this.hasDeckBeenDelt;
  //seters
 // setCardCheckValues = (index,input) => this.cardCheckValues[index] = input;
 setDiscardPileIndex(index,input){
      this.discardPile[index] = input;
      console.log("input of setDiscardPile " + input)
      console.log("index of setDiscardPile " + index)
      console.log("outcome " + this.discardPile[index])
      console.log("expected outcome " + this.discardPile[this.discardPileHeadPointer])
      text(this.discardPile[this.discardPileHeadPointer],this.discardPileXPosition,this.discardPileYPosition);
   };
 

   setDeckPileIndex(input,index){
      this.deckPile[index] = input;
   }

  setCardCheckValues(index,input){
   
   this.cardCheckValues[index] = input;

  }

  setHasDeckBeenDelt = (input) => this.hasDeckBeenDelt = input;
  resetHeadPointer(){
   this.headPointer = 0;
  }
  resetDiscardPileHeadPointer(){
   this.discardPileHeadPointer = 0;
  }
  
  incrementHeadPointer(){
   this.headPointer++;
   
  }
  incrementDiscardPileHeadPointer(){
   this.discardPileHeadPointer++
  }


}