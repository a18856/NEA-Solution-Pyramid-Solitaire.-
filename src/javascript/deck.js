class deck{
  
   constructor(){
  
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
    this.headPointer = 0;
    this.tailpointer = this.deckList.length-1;
    this.cardSpacing = (screenWidth - (padding*2)) / 7; // screen is devided into 7 parts to fit the cards with a padding of 50px on each side 
    this.cardWidth = 80;
    this.cardHight = this.cardWidth*2 //1:2 ratio bertween card with and hight
    this.cardXPositon = [//each array contains the x position of cards in a row starting from the bottom up
      [50,150,250,350,450,550,650],//bottom row
      [100,200,300,400,500,600],//6th row
      [150,250,350,450,550],//5th row
      [200,300,400,500],//4th row
      [250,350,450],//3rd row
      [300,400],//2nd row
      [350]//top row
    ];
    this.cardYPositon =[ //the array contains the y position of cards in a row starting from the bottom up. This is calculaed by incrementing the card spacing
      this.cardSpacing*7,this.cardSpacing*6,this.cardSpacing*5,
      this.cardSpacing*4,this.cardSpacing*3,this.cardSpacing*2,
      this.cardSpacing];

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
      this.headPointer++ //increments queue pointer for deck dequeueing the card
     textSize(17);
     //console.log("to be delt: " + this.dealOrder[i] );
     console.log("x: " + this.cardXPositon[0][1]);
     console.log("y: " + this.cardYPositon[1]);
     switch (i) {//                  X incrments by 100 & y by a seventh of the screen width(100px) which is equivelent to a cards width
      case 0: rect(this.cardXPositon[0][0],this.cardYPositon[0],this.cardWidth,this.cardHight);
         text(this.dealOrder[i],this.cardXPositon[0][0],this.cardYPositon[0]);
         break;

      case 1: rect(this.cardXPositon[0][1],this.cardYPositon[0],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[0][1],this.cardYPositon[0]);
         break;

      case 2: rect(this.cardXPositon[0][2],this.cardYPositon[0],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[0][2],this.cardYPositon[0]);
         break;

      case 3: rect(this.cardXPositon[0][3],this.cardYPositon[0],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[0][3],this.cardYPositon[0]);
         break;

      case 4: rect(this.cardXPositon[0][4],this.cardYPositon[0],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[0][4],this.cardYPositon[0]);
         break;

      case 5: rect(this.cardXPositon[0][5],this.cardYPositon[0],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[0][5],this.cardYPositon[0]);
         break;

      case 6: rect(this.cardXPositon[0][6],this.cardYPositon[0],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[0][6],this.cardYPositon[0]);//bottom row
         break;//                    x  must be inbetween last row

      case 7:  rect(this.cardXPositon[1][0],this.cardYPositon[1],this.cardWidth,this.cardHight);
          text(this.dealOrder[i],this.cardXPositon[1][0],this.cardYPositon[1]);
         break;

      case 8: rect(this.cardXPositon[1][1],this.cardYPositon[1],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[1][1],this.cardYPositon[1]);
         break;

      case 9: rect(this.cardXPositon[1][2],this.cardYPositon[1],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[1][2],this.cardYPositon[1]);
         break;

      case 10: rect(this.cardXPositon[1][3],this.cardYPositon[1],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[1][3],this.cardYPositon[1]);
         break;

      case 11: rect(this.cardXPositon[1][4],this.cardYPositon[1],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[1][4],this.cardYPositon[1]);
         break;

      case 12: rect(this.cardXPositon[1][5],this.cardYPositon[1],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[1][5],this.cardYPositon[1]);// 6th row
         break;

      case 13: rect(this.cardXPositon[2][0],this.cardYPositon[2],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[2][0],this.cardYPositon[2]);
         break;

      case 14: rect(this.cardXPositon[2][1],this.cardYPositon[2],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[2][1],this.cardYPositon[2]);
         break;

      case 15: rect(this.cardXPositon[2][2],this.cardYPositon[2],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[2][2],this.cardYPositon[2]);
         break;

      case 16: rect(this.cardXPositon[2][3],this.cardYPositon[2],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[2][3],this.cardYPositon[2]);
         break;

      case 17: rect(this.cardXPositon[2][4],this.cardYPositon[2],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[2][4],this.cardYPositon[2]);//5th row
         break;

      case 18: rect(this.cardXPositon[3][0],this.cardYPositon[3],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[3][0],this.cardYPositon[3]);
         break;

      case 19: rect(this.cardXPositon[3][1],this.cardYPositon[3],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[3][1],this.cardYPositon[3]);
         break;

      case 20: rect(this.cardXPositon[3][2],this.cardYPositon[3],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[3][2],this.cardYPositon[3]);
         break;

      case 21: rect(this.cardXPositon[3][3],this.cardYPositon[3],this.cardWidth,this.cardHight);
      text(this.dealOrder[i],this.cardXPositon[3][3],this.cardYPositon[3]);//4th row
         break;

      case 22: rect(this.cardXPositon[4][0],this.cardYPositon[4],this.cardWidth,this.cardHight); 
      text(this.dealOrder[i],this.cardXPositon[4][0],this.cardYPositon[4]);
         break;

      case 23: rect(this.cardXPositon[4][1],this.cardYPositon[4],this.cardWidth,this.cardHight); 
      text(this.dealOrder[i],this.cardXPositon[4][1],this.cardYPositon[4]);
         break;

      case 24: rect(this.cardXPositon[4][2],this.cardYPositon[4],this.cardWidth,this.cardHight); 
      text(this.dealOrder[i],this.cardXPositon[4][2],this.cardYPositon[4]);//3rd row
         break;

      case 25: rect(this.cardXPositon[5][0],this.cardYPositon[5],this.cardWidth,this.cardHight); 
      text(this.dealOrder[i],this.cardXPositon[5][0],this.cardYPositon[5]);
         break;

      case 26: rect(this.cardXPositon[5][1],this.cardYPositon[5],this.cardWidth,this.cardHight); 
      text(this.dealOrder[i],this.cardXPositon[5][1],this.cardYPositon[5]);//2nd row
         break;

      case 27: rect(this.cardXPositon[6][0],this.cardYPositon[6],this.cardWidth,this.cardHight); 
      text(this.dealOrder[i],this.cardXPositon[6][0],this.cardYPositon[6]);//top row
         break;
         
      default: throw new error("fatal error. more cards have been delt than there are spaces."); 

     }
     
  }
  

   console.log("deck delt!");
   
 }
 draw(){

}
 
 // public getters
  getTopOfDeck = () => this.deckList[this.headPointer]; 
   
  getDealOrder = () => this.dealOrder;
  
  getHeadpointer = () => this.headPointer;
    
  getTailPointer = () => this.tailpointer;

  getCardHeight = () => this.cardHight;

  getCardSpacing = () => this.cardSpacing;

  getCardXPosition = (row,collum) => this.cardXPositon[row][collum];

  getCardYPosition = (input) => this.cardYPosition[input];

  incrementHeadPointer(){
   this.headPointer++;
  }


}