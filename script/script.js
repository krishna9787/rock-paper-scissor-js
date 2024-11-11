function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


var compScoreTag = document.querySelector("#compScore");
var userScoreTag = document.querySelector("#yourScore");
var resultMessageTag = document.querySelector("#resultMessage");

var option = 4;
var compScore = compScoreTag.innerText;
var userScore = userScoreTag.innerText;

document.querySelector("#rockBtn").addEventListener("click", () => {
    console.log("Clicked Rock");
    option = 0;
    findWinner();
});

document.querySelector("#paperBtn").addEventListener("click", () => {
    console.log("Clicked paper");
    option = 1;
    findWinner();
});

document.querySelector("#scissorBtn").addEventListener("click", () => {
    console.log("scissor");
    option = 2;
    findWinner();
});


function findWinner() {
    var compValue = getRandomInt(3);
    console.log("Comp value", compValue);
    if (option == 0) {
        if (compValue === 1) {
            compWon();
        } else if (compValue === 0) {
            noWins();
        } else if (compValue == 2) {
            userWon();
        }
    } else if (option == 1) {
        if (compValue === 2) {
            compWon()
        } else if (compValue === 1) {
            noWins();
        } else if (compValue == 0) {
            userWon();
        }
    } else if (option == 2) {
        if (compValue === 0) {
            compWon();
        } else if (compValue === 2) {
            noWins();
        } else if (compValue == 1) {
            userWon();
        }
    }
}

function compWon() {
    resultMessageTag.className = '';
    resultMessageTag.classList.add("resultMessageRed");
    resultMessageTag.innerText = "Comp Won!!!";
    compScore = compScoreTag.innerText;
    compScoreTag.innerText = (parseInt(compScore) + 1);
}

function noWins() {
    resultMessageTag.className = '';
    resultMessageTag.classList.add("resultMessageNeutral");
    resultMessageTag.innerText = "Same value selected as Comp";
}

function userWon() {
    resultMessageTag.className = '';
    resultMessageTag.classList.add("resultMessageGreen");
    resultMessageTag.innerText = "User Won!!!";
    userScore = userScoreTag.innerText;
    userScoreTag.innerText = (parseInt(userScore) + 1); 
}