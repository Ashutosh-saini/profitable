// js for the rock paper scissor

function rpsGame(yourChoice) {

    var humanChoice , botChoice;

    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToInt());

    results = finalMessage(results);
    
    message = finalMessage(results);

    rpsFrontEnd(yourChoice.id, botChoice, message);

}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function nameToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {
            'scissors':1, 'rock':0.5, 'paper':0
        },
        'paper': {
            'scissors':0, 'rock':1, 'paper':0.5
        },
        'scisssors': {
            'scissors':0.5, rock:0.5, 'paper':1
        }
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message':'You lost!', 'color':'red'};
    }
    else if (yourScore === 0.5) {
        return {'message':'You tied!', 'color':'yellow'};
    }
    else{
        return {'message':'You Won!', 'color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDatabase = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src,
    }   

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height = 150 width = 150 + >";
    messageDiv.innerHTML = "<h1 style='color'; " + finalMessage['color' ] + "; font-size: 60px/>";

    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150";


    document.getElementById('flex-box-rps-div').appendChild(humanDiv);

    document.getElementById('flex-box-rps-div').appendChild(messageDiv);

    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}