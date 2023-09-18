import { getFirebase, putToFirebase } from "./firebase.js"


// SELECTAT(hämtat) ok-knappen fron DOM:en 
const okButton = document.querySelector('#ok');

// Skapat ett P element som heter usernameP
const usernameP = document.createElement('p');

// lagt till p elementet till bodyn
document.body.append(usernameP);

let input;
let computer;
let playerScore = 0;
let computerScore = 0;
let highscorelist = [];




const winnerOfTheRoundP = document.querySelector('#winnerOfTheRoundP');
const playerScoreP = document.querySelector('#playerScoreP');
const computerScoreP = document.querySelector('#computerScoreP');
const playersChoiceP = document.querySelector('#playersChoiceP');
const computersChoiceP = document.querySelector('#computersChoiceP');
const highscoreListElement = document.querySelector("#highscoreP");


const maxPlayers = 5;
const rockOption = 0;
const paperOption = 1;
const scissorsOption = 2;


okButton.addEventListener('click', event => {
    event.preventDefault();
    // Hämtar värdet från input-boxen
    input = document.querySelector('#input').value;

    // Tilldelar ditt p element usernameP till värdet från input-boxen.
    usernameP.innerText = `Hello, ${input}! Please make a choice from the buttons above.`

});


//Hämtar rock-knappen från DOM:en
const rockButton = document.querySelector('#rock');

//Arrow-function för rock-knappen
rockButton.addEventListener('click', event => {
    // Visar användarens val
    playersChoiceP.innerText = `${input} chose: Rock`;

    //När antingen användaren eller datorn får tre poäng kommer deras allt att nollställas
    if (computerScore === 1) {
        console.log('final score', playerScore,computerScore, input);

       updatedHighscore(input, playerScore, highscorelist, highscoreListElement);

        playerScore = 0;
        computerScore = 0;

        playersChoiceP.innerText = 'Players choice: ';
        computersChoiceP.innerText = 'Computers choice: '

        playerScoreP.innerText = 'Player Score: '
        computerScoreP.innerText = 'Computer Score: '


    } else {
        //Math.random() som genererar siffron 0 till 2. 0===Rock , 1===Paper, 2===Scissors
        computer = Math.floor(Math.random() * 3);

        if (computer === 0) {
            computersChoiceP.innerText = 'Computer chose: Rock';
            playerScoreP.innerText = `${input}s Score: ${playerScore}`;
            computerScoreP.innerText = `Computers Score: ${computerScore}`;
            winnerOfTheRoundP.innerText = 'Winner of the round: Draw!';
        }
        else if (computer === 1) {
            computersChoiceP.innerText = 'Computer chose: Paper';
            computerScore++;
            playerScoreP.innerText = `${input}s Score: ${playerScore}`;
            computerScoreP.innerText = `Computers Score: ${computerScore}`;
            winnerOfTheRoundP.innerText = 'Winner of the round: Computer';
        }
        else {
            computersChoiceP.innerText = 'Computer chose: Scissors';
            playerScore++;
            winnerOfTheRoundP.innerText = `Winner of the round is: ${input}`
            playerScoreP.innerText = `${input}s Score: ${playerScore}`
            computerScoreP.innerText = `Computers Score: ${computerScore}`;


        }

    }


})

//Hämtar paper-knappen från DOM:en
const paperButton = document.querySelector('#paper');

//Arrow-function för paper-knappen
paperButton.addEventListener('click', event => {
    input = document.querySelector('#input').value;

    playersChoiceP.innerText = `${input} chose: Paper`;

    if (computerScore === 1) {

        console.log('final score', playerScore, computerScore, input);


        updatedHighscore(input, playerScore, highscorelist, highscoreListElement);

        playerScore = 0;
        computerScore = 0;



        playersChoiceP.innerText = 'Players choice: ';
        computersChoiceP.innerText = 'Computers choice: ';

        winnerOfTheRoundP.innerText = 'Winner of the round is:';

        playerScoreP.innerText = 'Player Score: '
        computerScoreP.innerText = 'Computer Score: ';



        //Om ingen har nått 3 poäng ska resten av alternativen köras när man trycker på någon av knapparna
    }
    else {

        //Math.random() so  genererar siffron 0 till 2. 0===Rock , 1===Paper, 2===Scissors
        computer = Math.floor(Math.random() * 3);


        if (computer === 0) {
            playerScore++;
            playerScoreP.innerText = `${input}s Score: ${playerScore}`;
            computerScoreP.innerText = `Computer Score: ${computerScore}`;
            computersChoiceP.innerText = 'Computer chose: Rock';
            winnerOfTheRoundP.innerText = `Winner of the round: ${input}`;

        }
        else if (computer === 1) {
            computersChoiceP.innerText = 'Computer chose: Paper';
            playerScoreP.innerText = `${input}s Score: ${playerScore}`;
            computerScoreP.innerText = `Computers Score: ${computerScore}`;
            winnerOfTheRoundP.innerText = 'Winner of the round: Draw!';

        }
        else {
            computerScore++;
            computersChoiceP.innerText = 'Computer chose: Scissors';
            playerScoreP.innerText = `${input}s Score: ${playerScore}`;
            computerScoreP.innerText = `Computers Score: ${computerScore}`;
            winnerOfTheRoundP.innerText = 'Winner of the round: Computer';

        }
    }

})

//Hämtar scissors-knappen från DOM:en
const scissorsButton = document.querySelector('#scissors');

//Arrow-function för scissors-knappen
scissorsButton.addEventListener('click', event => {
    playersChoiceP.innerText = `${input} chose: Scissors`;

    if (computerScore === 1) {

        console.log('final score', playerScore, computerScore, input);


        updatedHighscore(input, playerScore, highscorelist, highscoreListElement);

        playerScore = 0;
        computerScore = 0;

        playersChoiceP.innerText = 'Players choice: ';
        computersChoiceP.innerText = 'Computers choice: ';

        winnerOfTheRoundP.innerText = 'Winner of the round is:';

        playerScoreP.innerText = 'Player Score: '
        computerScoreP.innerText = 'Computer Score: ';

    } else {

        //Math.random() som genererar siffrorna 0 till 2. 0===Rock , 1===Paper, 2===Scissors
        computer = Math.floor(Math.random() * 3);


        if (computer === 0) {
            computerScore++;
            computerScoreP.innerText = `Computer Score: ${computerScore}`;
            playerScoreP.innerText = `${input} Score: ${playerScore}`;
            computersChoiceP.innerText = 'Computer chose: Rock'
            winnerOfTheRoundP.innerText = 'Winner of the round: Computer';

        }
        else if (computer === 1) {
            computersChoiceP.innerText = 'Computer chose: Paper';
            playerScore++;
            playerScoreP.innerText = `${input}s Score: ${playerScore}`;
            computerScoreP.innerText = `Computer Score: ${computerScore}`;
            winnerOfTheRoundP.innerText = `Winner of the round: ${input}`;

        }
        else {

            //computersChoiceP.innerText = 'Computer chose: Scissors';
            playerScoreP.innerText = `${input}s Score: ${playerScore}`;
            computerScoreP.innerText = `Computers Score: ${computerScore}`;
            winnerOfTheRoundP.innerText = 'Winner of the round: Draw!';
        }

    }

})

async function highScore() {

    highscorelist = await getFirebase();


    highscoreListElement.innerHTML = ''; // clear the high score list element

    highscorelist.forEach(highscore => {
        console.log(highscore)
        const listItemElement = document.createElement('li');
        listItemElement.innerText = `${highscore.name} | ${highscore.score}`;
        highscoreListElement.appendChild(listItemElement);
    })


}



//Add a players new name and score to the highscorelist
async function updatedHighscore(input, playerScore, highscorelist, highscoreListElement) {
    highscorelist = await getFirebase();
    console.log(highscorelist);

    //Push the new players score and name to the highscore list
    highscorelist.push({ name: input, score: playerScore });
    //sort the list in numerical order
    highscorelist.sort((a, b) => b.score - a.score);

    console.log(highscorelist);
    if (highscorelist.length > maxPlayers) {
        // Remove the last player on the list
        highscorelist.pop();
    }

    // console.log(highscorelist);
    putToFirebase(highscorelist);

    // Clear the high score list element
    highscoreListElement.innerHTML = '';

    highscorelist.forEach(highscore => {
        const listItemElement = document.createElement('li');
        listItemElement.innerText = `${highscore.name} | ${highscore.score}`;
        highscoreListElement.appendChild(listItemElement);
    })

}