function computer(){
    let computerChoice = Math.floor(Math.random()*3);
    switch(computerChoice){
        case 0:
            document.getElementById('compPaper').style.display = ('none');
            document.getElementById('compScissor').style.display = ('none');
            return 'rock';
        case 1:
            document.getElementById('compRock').style.display = ('none');
            document.getElementById('compScissor').style.display = ('none');
            return 'paper';
        case 2:
            document.getElementById('compPaper').style.display = ('none');
            document.getElementById('compRock').style.display = ('none');
            return 'scissor';
    }
}

let player = [document.getElementById('rock'),document.getElementById('paper'),document.getElementById('scissor')]

player.forEach(button => {
    button.addEventListener('click', function(){
       playGame(button.id);

       
    });
});

function game(player, computer){
    if (player == computer) {
        return "It's a tie!";
    }
    if ((player== 'rock' && computer == 'scissor') ||
        (player == 'paper' && computer == 'rock') ||
        (player === 'scissor' && computer == 'paper')) {
        return 'You win!';
    }
    return 'You lose!';
}

function togglePopUp() {
    const popup = document.getElementById('popup-1');
    popup.classList.toggle('active');

    if (!popup.classList.contains('active')) {
        document.getElementById('compRock').style.display = 'inline-block';
        document.getElementById('compPaper').style.display = 'inline-block';
        document.getElementById('compScissor').style.display = 'inline-block';
    }
}

let userScore = 0;
let compScore = 0;

function playGame(player) {
    const computerChoice = computer();
    const result = game(player, computerChoice);
    let expression;

    if (result === "You win!") {
        userScore++;
        expression = "Congrats!";
    } else if (result === "It's a tie!") {
        expression = "Oh Shocks!";
    } else {
        compScore ++;
        expression = "Too bad!";
    }

    document.getElementById('user-score').textContent = userScore;
    document.getElementById('comp-score').textContent = compScore;
    document.getElementById('expression').textContent = expression;
    document.getElementById('result').textContent = result;
    setTimeout(togglePopUp, 1500);
}

function resetScore(){
    userScore = 0;
    compScore = 0;

    document.getElementById('user-score').textContent = userScore;
    document.getElementById('comp-score').textContent = compScore;
}

document.getElementById('reset-btn').addEventListener('click', resetScore);