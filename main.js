const prompt = require("prompt-sync")();



function deposit(){
    while (true){

        const depositAmount = prompt("Enter a deposit amount: ")
        const numberDepositAmount = parseFloat(depositAmount);


        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        console.log("Invalid deposit amount, please try again.");
        } else {
            return numberDepositAmount;
        }
    }
};

function getNumberOfLines(){
    while (true){

        const lines = prompt("Enter the number of lines to bet (1-3): ")
        const numberOfLines = parseFloat(lines);


        if (isNaN(numberOfLines) || numberOfLines<= 0 || numberOfLines > 3){
        console.log("Invalid number of lines, please try again.");
        } else {
            return numberOfLines;
        }
    }
};

function getBet(balance, lines){
    while (true){

        const bet = prompt("Enter the total bet amount per lines: ")
        const numberBet = parseFloat(bet);


        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance /lines){
        console.log("Invalid bet, please try again.");
        } else {
            return numberBet;
        }
    }
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines)

