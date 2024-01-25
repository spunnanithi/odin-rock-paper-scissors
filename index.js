// Keep track of round count
let counterRound = 0;

// Keep track of player score and computer score
let playerScore = 0;
let computerScore = 0;

// Function to randomly generate computer's choice
function getComputerChoice() {
	const computerSelection = ["rock", "paper", "scissors"];
	const randomPick = Math.floor(Math.random() * 3);
	return computerSelection[randomPick];
}

// Function to get user input
function getPlayerChoice() {
	// Ensuring that the user enters a valid input
	while (true) {
		let playerSelection = prompt(
			"Enter rock, paper, or scissors: "
		).toLowerCase();

		if (
			playerSelection === "rock" ||
			playerSelection === "paper" ||
			playerSelection === "scissors"
		) {
			return playerSelection;
		}
	}
}

// Play through 5 rounds
while (counterRound < 5) {
	// Console log current round
	console.log(`Round ${counterRound + 1}`);

	// Calling getComputerChoice() to get computer's choice
	const computerSelection = getComputerChoice();

	// Calling getPlayerChoice() to get player's choice
	const playerSelection = getPlayerChoice();

	// Calling playGame() to play the game
	let resultOfGame = playGame(playerSelection, computerSelection);

	// Function to play the game and return the result
	function playGame(playerSelection, computerSelection) {
		if (playerSelection === computerSelection) {
			return "It's a tie! Let's replay the round!";
		} else if (
			(playerSelection === "rock" && computerSelection === "scissors") ||
			(playerSelection === "paper" && computerSelection === "rock") ||
			(playerSelection === "scissors" && computerSelection === "paper")
		) {
			playerScore++;
			counterRound++;
			return "You win!";
		} else {
			computerScore++;
			counterRound++;
			return "You lose...";
		}
	}

	// Outputting the results of the game.
	console.log("Computer's Choice:", computerSelection.toUpperCase());
	console.log("Player's Choice:", playerSelection.toUpperCase());
	console.log(resultOfGame);
	console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
	console.log("-------------------------");
}
