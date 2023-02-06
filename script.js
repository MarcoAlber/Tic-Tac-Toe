let fields = [];
let currentCasket = 'apple';

function fieldCasket(id) {
    if (currentCasket == 'apple') {
        currentCasket = 'grapes';
        document.getElementById('player-1').classList.remove('player-inactivate');
        document.getElementById('player-2').classList.add('player-inactivate');
    }
    else {
        currentCasket = 'apple';
        document.getElementById('player-2').classList.remove('player-inactivate');
        document.getElementById('player-1').classList.add('player-inactivate');
    }
    fields[id] = currentCasket;
    console.log(fields);
    showSymbols();
    showWinner()
}

function showSymbols() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'apple') {
            document.getElementById('apple-' + i).classList.remove('d-none');
        }
        if (fields[i] == 'grapes') {
            document.getElementById('grapes-' + i).classList.remove('d-none');
        }
    }
}

function showWinner() {
    let winner;
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
    }


    if (winner) {
        console.log('Gewonnen:', winner);
    }
}