const reset = document.getElementById("refresh");
const urScore = document.getElementById("ur-score");
const botScore = document.getElementById("bot-score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choices = [rock, paper, scissors];
const score = document.getElementById("result");
const compChoice = document.getElementById("description");

reset.addEventListener("click", () => {
    urScore.textContent = 0;
    botScore.textContent = 0;
    score.textContent = "";
    compChoice.textContent = "";
})

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        handleTextContent(choice.id);
    });
})

function handleTextContent(choice) {
    const temp = handleGame(choice);
    const result = temp["result"];
    const description = temp["description"];
    score.textContent = result;
    compChoice.textContent = description;
    if(result === "You win") {
        urScore.textContent = parseInt(urScore.textContent) + 1;
    } else if(result === "You loose") {
        botScore.textContent = parseInt(botScore.textContent) + 1;
    }
}

function handleGame(choice) {
    const temp = handleResult(choice);
    const result = temp["result"];
    const botChoice = temp["botChoice"];
    var description;
    if (result === "Draw") {
        description = `Computer also chose ${botChoice}`
    } else if (result === "You win" || result === "You loose") {
        description = `Computer chose ${botChoice}`
    }
    return {"result": result, 
            "description": description};
}

function handleBotChoice() {
    const random = Math.floor(Math.random()*3);
    var botChoice;
    switch (random) {
        case 0: 
            botChoice = "rock"; 
            break;
        case 1:
            botChoice = "paper"; 
            break;
        case 2:
            botChoice = "scissors"; 
            break;
    }
    return botChoice;
}

function handleResult(choice) {
    const botChoice = handleBotChoice();
    var result;
    if (((choice === "rock") && (botChoice === "scissors")) || ((choice === "paper") && (botChoice === "rock")) || ((choice === "scissors") && (botChoice === "paper"))) {
        result = "You win";
    } else if (((choice === "rock") && (botChoice === "paper")) || ((choice === "paper") && (botChoice === "scissors")) || ((choice === "scissors") && (botChoice === "rock"))) {
        result = "You loose";
    } else if (choice === botChoice) {
        result = "Draw";
    }
    return {"result": result,
            "botChoice": botChoice};
}
