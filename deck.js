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
    this.cardWidth = (screenWidth - (padding*2)) / 7; // screen is devided into 7 parts to fit the card with a padding of 50 on each side 
    this.cardHight = this.cardWidth*2 //1:2 ratio bertween card with and hight

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
    for(let j = 0; j < 27; j++){
      if(this.dealOrder[j] == undefined){
        this.dealOrder[j] = "empty";
      }
    }
    for (let i = 0; i < 27; i++){
      
      this.dealOrder[i] = this.deckList[i]; //creates order in which cards are delt
      this.headPointer++ //increments queue pointer for deck dequeueing the card
     fill("white")
     textSize(17)
     switch (i) {
      case 0: text(this.dealOrder[i],50,this.cardWidth*7);
         break;
      case 1: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 2: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 3: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 4: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 5: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 6: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 7: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 8: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 9: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 10: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 11: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 12: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 13: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 14: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 15: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 16: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 17: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 18: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 19: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 20: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 21: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 22: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 23: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 24: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 25: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 26: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      case 27: text(this.dealOrder[i],750,this.cardWidth*7);
         break;
      default: console.log("fatal error. more cards have been delt than there are spaces.")
     }
  }

   console.log("deck delt!")
   
 }
  getTopOfDeck(){
    return this.deckList[this.headPointer];
  }
  getDealOrder(){
    return this.dealOrder;
  }
  
}