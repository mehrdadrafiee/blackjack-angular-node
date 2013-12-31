function DashboardCtrl ($scope) {
}

function BlackjackCtrl ($scope) {

//implement:
//blackjack +*X 

var deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
$scope.pot = Number(0);
var betAmount = Number($scope.betAmount);


var createPlayer = function ( name ) {
$scope.player = name;
$scope.playerWallet = 100; //start with 100
}
createPlayer($scope.player);

var randomCard = function() {
var min = 0;
var max = 13;
return Math.floor(Math.random() * (max - min + 1)) + min;
};

// var calculatePot = function ( winner ) {
// if ( winner == $scope.player )
// }
var playerWin = function ( ) {
$scope.playerWallet += $scope.pot*2 //house's gotta pay y'know? 
$scope.pot = 0;
gameOver = true;
}

var dealerWin = function ( ) {
$scope.pot = 0;
gameOver = true;
}

var push = function ( ) {
alert('Push');
$scope.playerWallet += $scope.pot;
$scope.pot = 0;
gameOver = true;
}

var calculateHand = function() {
userHand = 0;
dealerHand = 0;
for (var i=0; i < userHandArr.length; i++) {
userHand += userHandArr[i];
$scope.userHand = userHand;
$scope.userHandArr = userHandArr;
if ((userHand[0] == 11) && (userHand[1] == 11)) {
userHand[0] = 1;
}
}

for (var i=0; i < dealerHandArr.length; i++) {
dealerHand += dealerHandArr[i];
$scope.dealerHand = dealerHand;
$scope.dealerHandArr = dealerHandArr;

//prevent's getting 22 
if ((dealerHand[0] == 11) && (dealerHand[1] == 11)) {
dealerHand[0] = 1;
}

}

if ( userHand == 21 || dealerHand == 21 ) {
if ( userHand == 21 ) {
alert('Player blackjack!');
playerWin();

}
else if ( dealerHand == 21 ) {
alert('Dealer blackjack!');
dealerWin();

};
}

if (userHand > 21 || dealerHand > 21) {
if (userHand > 21) {
alert('Player bust!');
dealerWin();
}

else if (dealerHand > 21) {
alert('Dealer bust!');
playerWin();
}
}
}

$scope.deal = function(  ) {
$scope.clear();
if (!$scope.userBet || !$scope.player) {
alert('You\'re missing some critical information that is needed to proceed with the games');
gameOver = true;
}
else if (!gameOver) {
$scope.userBet( betAmount );
//deals 2 cards
for (var cardnum = 0; cardnum < 2; cardnum++) {
userHandArr.push(deck[randomCard()])
dealerHandArr.push(deck[randomCard()])
}
calculateHand();
}
}
$scope.userHit = function() {
// if (gameOver = true) {
// alert('Nice try, the game\'s over! \n Dealing a new hand...');
// $scope.deal();
// } else {
if (!gameOver) {
userHandArr.push(deck[randomCard()]);
calculateHand();
}
// }
// 
}
$scope.userBet = function ( betAmount ) {
$scope.playerWallet -= $scope.betAmount;
$scope.pot += $scope.betAmount;
}

//defines variables in order to deal()
$scope.clear = function() {
gameOver = false;
userHand = 0;
dealerHand = 0;
userHandArr = [];
dealerHandArr = [];
$scope.userHand = 0;
$scope.dealerHand = 0;
$scope.userHandArr = [];
$scope.dealerHandArr = [];
};

$scope.userStay = function( ) { 
while(dealerHand < 17) {
dealerHandArr.push(deck[randomCard()]);
calculateHand();
};

if (userHand > dealerHand) {
alert('You win! \n Player: ' + userHand + '\n Dealer: ' + dealerHand );
playerWin();
}

else if (userHand == dealerHand ) {
push();
}
else if (dealerHand < 22 && dealerHand > userHand) {
alert('Dealer Wins');
dealerWin();
}
}


}


