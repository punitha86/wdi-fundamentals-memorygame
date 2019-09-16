

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
        alert("You found a match!");
        
       else
    alert("Sorry, try again.");
  }

var flipCard= function(){
    var cardId=this.getAttribute('data-id');
    cardInPlay.push(cards[cardId].rank); 
    this.setAttribute("src",cards[cardId].cardImage);
       if(cardInPlay.length===2){
       checkForMatch();
}
};



var createBoard = function(){
    for( var i = 0; i<4; i++){
        var cardElement = document.createElement("img");
        cardElement.setAttribute("src","images/back.png");
        cardElement.setAttribute("data-id",i);
        cardElement.addEventListener('click',flipCard);
        document.getElementById("game-board").appendChild(cardElement);

    }
}
createBoard();
var resetBoard = function(){
    event.stopPropagation();
    var list = document.getElementById("game-board")
    while (list.firstChild)
    list.removeChild(list.firstChild);
    
    createBoard();  
}
reset.addEventListener('click',resetBoard);