console.log("Up and Running!");
var cards = [
	{
	rank: "Queen",
	suit: "Hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "Queen",
	suit: "Diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "King",
	suit: "Hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "King",
	suit: "Diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

var checkForMatch =function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You Found a Match!");
	}else{
		console.log("Sorry, try again.");
	}
}

var flipCard = function(cardId){
	console.log("User Flipped " + cards[cardId].rank)
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit)
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2){
	checkForMatch();
	}
}
flipCard(0);
flipCard(2);
