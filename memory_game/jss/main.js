console.log("Up and Running!");
var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];

var checkForMatch =function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You Found a Match!");
	}else{
		console.log("Sorry, try again.");
	}
}

var flipCard = function(cardId){
	console.log("User Flipped " + cards[cardId])
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2){
	checkForMatch();
	}
}
flipCard(0);
flipCard(2);
