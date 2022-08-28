class values{
    constructor(){
        this.name;
        this.cardList = 
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
        this.values = 
        [1,2,3,4,5,6,7,8,
        9,10,11,12,13,1,2,
        3,4,5,6,7,8,9,10,11,
        12,13,1,2,3,4,5,6,7,8,
        9,10,11,12,13,1,2,3,4,
        5,6,7,8,9,10,11,12,13];
        
        this.lastTwoCardsValues = new Array(0,0);
        this.headPointer = 0;
    }
    

    valueConverter(){//returns value of a card
        let i;
        for ( i = 0; i<51;i++){
            if (this.cardList[i] === this.name){
                return this.values[i];
            }
        }  
    }
    combinationCheck(){

            if(this.lastTwoCardsValues[this.headPointer-1] == 13){// -1 as pushLastTwoCardsValues() increments headpointer
                console.log("King! card removed");
                let tempCardNum
                for(let i = 0;i<51;i++){
                    if(this.name == deck.getDealOrderIndex[i]){
                        tempCardNum = i;
                        deck.setCardCheckValues(tempCardNum,0)
                    }
                    
                }
                cardMatchNoise.play();

                for(let i = 0; i<= 2;i++){
                 this.lastTwoCardsValues[i] = 0;
             }
             this.headPointer = 0;
             return true;
             }
           
        if(this.headPointer ==  2){//checks if array is full
            
            if((this.lastTwoCardsValues[0] + this.lastTwoCardsValues[1]) == 13){
                
                console.log("removed!")
                cardMatchNoise.play();
                for(let i = 0;i<51;i++){
                    if(this.name == deck.getDealOrderIndex[i]){
                        tempCardNum = i;
                        deck.setCardCheckValues(tempCardNum,0)
                    }
                }
                for(let i = 0; i<= 1;i++){
                this.lastTwoCardsValues[i] = 0;
            }
            this.headPointer = 0;
            return true;
            }else{
               console.log("This combination does not add up to 13") 
               failedMatchNoise.play();
               for(let i = 0; i<= 1;i++){
               this.lastTwoCardsValues[i] = 0;
            }
            this.headPointer = 0;
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

      
      
      
    
}