

var cards=[{
    rank:"queen",
    suit:"hearts",
    cardImage:"images/queen-of-hearts.png"
},{
    rank:"queen",
    suit:"diamonds",
    cardImage:"images/queen-of-diamonds.png"
},{
    rank:"king",
    suit:"hearts",
    cardImage:"images/king-of-hearts.png"
},{
    rank:"king",
    suit:"diamonds",
    cardImage:"images/king-of-diamonds.png"
}];
var cardInPlay=[];
var checkForMatch=function(){
    
    if (cardInPlay[0]===cardInPlay[1])
        console.log("You found a match!dwa");
       else
      console.log("Sorry, try again.");
  }

var flipCard= function(cardId){
    console.log("User flipped "+cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    cardInPlay.push(cards[cardId].rank);
       if(cardInPlay.length===2){
       checkForMatch();
}
};


flipCard(0);
flipCard(2);
