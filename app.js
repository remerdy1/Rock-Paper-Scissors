// VARIABLES
let userScore = 0;
let compScore = 0;
// DOM
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
let userScoreUI = document.getElementById("user-score");
let compScoreUI = document.getElementById("comp-score");
let resultUI = document.querySelector(".result");

// Capitalise first letter
const capitaliseFirstLetter = word => {
    const newFirstLetter = word[0].toUpperCase();
    word = word.split("");
    word.splice(0, 1, newFirstLetter);
    word = word.join("");
    return word;
}


// Display results
const displayResult = (result, userChoice, compChoice) =>{
    switch(result){
        case "win":
            userScore++;
            userScoreUI.innerHTML = userScore;
            compScoreUI.innerHTML = compScore;
            resultUI.innerHTML = `${capitaliseFirstLetter(userChoice)} Beats ${capitaliseFirstLetter(compChoice)}. User Wins!`;
            document.getElementById(userChoice).classList.add("glow-green");
            setTimeout(() => document.getElementById(userChoice).classList.remove("glow-green"), 400);  
            break;
        case "draw":
            userScoreUI.innerHTML = userScore;
            compScoreUI.innerHTML = compScore;
            resultUI.innerHTML = `You Both Chose ${capitaliseFirstLetter(userChoice)}. It's A Draw!`;
            document.getElementById(userChoice).classList.add("glow-grey");
            setTimeout(() => document.getElementById(userChoice).classList.remove("glow-grey"), 400);
            break;
        case "lose":
            compScore++;
            userScoreUI.innerHTML = userScore;
            compScoreUI.innerHTML = compScore;
            resultUI.innerHTML = `${capitaliseFirstLetter(compChoice)} beats ${capitaliseFirstLetter(userChoice)}. Computer Wins!`;
            document.getElementById(userChoice).classList.add("glow-red");
            setTimeout(() => document.getElementById(userChoice).classList.remove("glow-red"), 400);
            break;
    }
}


// Get computer choice  
const getComputerChoice = () =>{
    const choices = ["rock", "paper", "scissors"];
    const randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}


// Compare choices & get result
const compareChoice = userChoice =>{
    
    let compChoice = getComputerChoice()

    switch(userChoice+compChoice){
        // Cases where user wins
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            displayResult("win", userChoice, compChoice);
            break;
        // Cases where user loses
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            displayResult("lose", userChoice, compChoice);
            break;
        // Cases where its a draw
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            displayResult("draw", userChoice, compChoice);
            break;
    }
}


// On click 
rockButton.addEventListener("click", () => compareChoice("rock"));
paperButton.addEventListener("click", () => compareChoice("paper"));
scissorsButton.addEventListener("click", () => compareChoice("scissors"));