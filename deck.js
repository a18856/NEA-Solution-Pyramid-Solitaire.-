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
  
  getTopOfDeck(){
    
  }
  
}