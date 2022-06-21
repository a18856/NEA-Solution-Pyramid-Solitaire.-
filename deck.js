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
                      "10D","JD","QD","KD"]
    
  }
  shuffle(){
    var temp = new Array(52);// temporary array used to store the deck in its new shuffled state
    let randomIndex;
    do{
    for(let i = 0; i < this.deckList.length - 1;i++){// iterates through the original unshuffled deck
      randomIndex = Math.floor(Math.random() * 52);
      if(temp[randomIndex] == undefined){//if index position is empty
        temp[randomIndex] = this.deckList[i];//assigns the value in the index i of the original deck to the random index of the temporary one
        console.log(temp[randomIndex]);
      }else{
        console.log("Index position " + randomIndex +  " is full. Skipping...");//only other data type that could be here is a string so it must hence be full
        //i--; //decrements i-- so that the card in index i is not skipped when we skip the full index
        //if(i <= 0){
        //  i = 1;
      //  }
        
       
       }
     }
    }while(temp.includes(undefined));//checks if the temporary array is still empty
      console.log("deck shuffled!");
      console.log(temp);
  }
  
  getTopOfDeck(){
    
  }
  
}