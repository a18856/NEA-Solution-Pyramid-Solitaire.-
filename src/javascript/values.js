class values{
    constructor(){
        //est
        this.name = "nameless"; //name of card to be converted into a value
        this.cardList = //used as a reference table to find the value of cards
        ["AS","2S","3S","4S",
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
        this.values = // refrenced against cardList[] to give the correct value
        [1,2,3,4,5,6,7,8,
        9,10,11,12,13,1,2,
        3,4,5,6,7,8,9,10,11,
        12,13,1,2,3,4,5,6,7,8,
        9,10,11,12,13,1,2,3,4,
        5,6,7,8,9,10,11,12,13];
        
        this.lastTwoCardsValues = new Array(0,0);// stack used to hold the last 2 card values the user has clicked

        this.lastTwoCardNames = new Array(0,0);// stack used to hold the last 2 cards the user has clicked       

        this.headPointer = 0; //pointer for lastTwoCardsValues. Is used to reset the stack when it is full
        this.nameHeadPointer = 0; //same as above but for card nanmes
    }
    

    valueConverter(){//returns value of a card
        let i;
        for ( i = 0; i<52;i++){
            if (this.cardList[i] === this.name){
                return this.values[i];
            }
        }  
    }
    
    combinationCheck(){
        let tempCardNum1;
        let tempCardNum2;
        let tempCardNumKing;
            if(this.lastTwoCardsValues[this.headPointer-1] == 13){// -1 as pushLastTwoCardsValues() increments headpointer
                console.log("King! card removed");
                tempCardNumKing = this.lastTwoCardNames[this.headPointer-1]//stores card position of card to be removed
                for(let i = 0;i<51;i++){
                    console.log(tempCardNumKing + "comparison with: " + deck.getDealOrderIndex(i));
                    
                    if(tempCardNumKing == deck.getDealOrderIndex(i)){//uses the name of the card to find its position on the board by searching dealOrder
                     //   console.log("comparation with: " + deck.getDealOrderIndex[i]);
                     console.log("cardname " + tempCardNumKing);   
                        deck.setCardCheckValues(27-i,0)// sets the check value of the card position to 0, removing it from play
                        console.log("checkValues: " + deck.getCardCheckValues);
                    }
                    
                }
                cardMatchNoise.play();

                for(let i = 0; i<= 1;i++){//emptys stack after compairing 
                 this.lastTwoCardsValues[i] = 0;
                 this.lastTwoCardNames[i] =  "empty";
             }
             this.headPointer = 0;//rests pointer
             this.nameHeadPointer = 0;
             return true;
             }
           
        if(this.headPointer ==  2){//checks if array is full
            
            if((this.lastTwoCardsValues[0] + this.lastTwoCardsValues[1]) == 13){
                
                console.log("removed!")
                cardMatchNoise.play();
                for(let i = 0;i<51;i++){
                    console.log(tempCardNum1 + " comparison with: " + deck.getDealOrderIndex(i))
                    tempCardNum1 = this.lastTwoCardNames[0];
                    tempCardNum2 = this.lastTwoCardNames[1];
                    if(tempCardNum1 == deck.getDealOrderIndex(i)){
                    //    console.log("comparation with: " + deck.getDealOrdexIndex[i])
                        
                        console.log("card being removed  " + tempCardNum1)
                        deck.setCardCheckValues(27-i,0);//removes matched cards from play. it is 27-i as card 27 ia the first card of the bottom row and cardValues[] index psotions are linked to card positions.
                        
                        console.log("checkValues: " + deck.getCardCheckValues);
                        
                    }if(tempCardNum2 == deck.getDealOrderIndex(i)){
                        console.log("card being removed  " + tempCardNum2);
                        deck.setCardCheckValues(27-i,0);
                        console.log("checkValues: " + deck.getCardCheckValues);
                        

                    }
                }
                for(let i = 0; i<= 1;i++){
                this.lastTwoCardsValues[i] = 0;
                this.lastTwoCardNames[i] =  "empty";
            }
            this.nameHeadPointer = 0;
            this.headPointer = 0;
            return true;
            }else{
               console.log("This combination does not add up to 13") 
               failedMatchNoise.play();
               for(let i = 0; i< 1;i++){
               this.lastTwoCardsValues[i] = 0;
               this.lastTwoCardNames[i] =  "empty";
            }
            this.headPointer = 0;
            this.nameHeadPointer = 0;
               return false;
            }
            
        }
    }
    getLastTwoCardsValues = () => this.lastTwoCardsValues;

    getLastTwoCardsValuesIndex = (index) => this.lastTwoCardsValues[index];

    setName = (input) => this.name = input;


    pushLastTwoCardsValues = (input) => {
        this.lastTwoCardsValues[this.headPointer] = input
        this.headPointer++;
        console.log("headpointer: " + this.headPointer);
    }
    pushLastTwoCardNames = (input) => {
        this.lastTwoCardNames[this.nameHeadPointer] = input
        this.nameHeadPointer++;
        console.log("headpointer: " + this.nameHeadPointer);
    }

      
      
      
    
}