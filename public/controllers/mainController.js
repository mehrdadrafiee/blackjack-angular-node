function DashboardCtrl ($scope) {
	
}

function BlackjackCtrl ($scope) {

	var deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
	var randomCard = function() {
		var min = 0;
		var max = 13;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

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
			if ((dealerHand[0] == 11) && (dealerHand[1] == 11)) {
				dealerHand[0] = 1;
			}

		}	

		if (userHand == 21 || dealerHand == 21) {
			if(userHand == 21) {
				alert('Player blackjack!'); 
				gameOver = true;
			}
			else if (dealerHand == 21) {
				alert('Dealer blackjack!');
				gameOver = true;
			};
		}

		
		if (userHand > 21 || dealerHand > 21) {
			if (userHand > 21) {
				alert('Player bust!');
				gameOver = true;
			}

			else if (dealerHand > 21) {
				alert('Dealer bust!')
				gameOver = true;
			}
		}
		
	}

	$scope.deal = function() {
		$scope.clear();
		//deals 2 cards
		for (var cardnum = 0; cardnum < 2; cardnum++) {
			userHandArr.push(deck[randomCard()])
			dealerHandArr.push(deck[randomCard()])
		}
		calculateHand();
	}

	$scope.userHit = function() {
		if (gameOver) {
			alert('Nice try, the game\'s over! \n Dealing a new hand...');
			$scope.deal();
		} else {
			if (!gameOver) {
				userHandArr.push(deck[randomCard()]);
				calculateHand();
			}
		}
	}

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
			gameOver = true;
		}

		else if (userHand == dealerHand ) {
			alert('Push');
			gameOver = true;
		}
		else if (dealerHand < 22 && dealerHand > userHand) {
			alert('Dealer Wins');
			gameOver = true;
		}
		

	}



}



