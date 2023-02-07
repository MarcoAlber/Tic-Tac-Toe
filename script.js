let fields = [];
let currentCasket = 'apple';
let gameOver = false;

function fillCasket(id) {
    if (!fields[id] && !gameOver) {
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
        showSymbols();
        showWinner();
    }
}

function restart() {
    gameOver = false;
    fields = [];
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('restartButton').classList.add('d-none');

    for (let i = 0; i < 8; i++) {

        document.getElementById('line-' + i).style.opacity = '0';
        document.getElementById('line-' + i).classList.remove('animateLines');
    }

    document.getElementById('line-0').style.transform = 'scaleX(0)';
    document.getElementById('line-1').style.transform = 'scaleX(0)';
    document.getElementById('line-2').style.transform = 'scaleX(0)';
    document.getElementById('line-3').style.transform = 'rotate(90deg) scaleX(0)';
    document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(0)';
    document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(0)';
    document.getElementById('line-6').style.transform = 'rotate(45deg) scaleX(0)';
    document.getElementById('line-7').style.transform = 'rotate(135deg) scaleX(0)';

    for (let i = 0; i < 9; i++) {
        document.getElementById('apple-' + i).classList.add('d-none');
        document.getElementById('grapes-' + i).classList.add('d-none');
    }
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
        document.getElementById('line-0').classList.add('animateLines');
        document.getElementById('line-0').style.transform = 'scaleX(1)';
        document.getElementById('line-0').style.opacity = '1';
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-1').classList.add('animateLines');
        document.getElementById('line-1').style.transform = 'scaleX(1)';
        document.getElementById('line-1').style.opacity = '1';
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-2').classList.add('animateLines');
        document.getElementById('line-2').style.transform = 'scaleX(1)';
        document.getElementById('line-2').style.opacity = '1';
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-5').classList.add('animateLines');
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
        document.getElementById('line-5').style.opacity = '1';
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-4').classList.add('animateLines');
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
        document.getElementById('line-4').style.opacity = '1';
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-3').classList.add('animateLines');
        document.getElementById('line-3').style.transform = 'rotate(90deg) scaleX(1)';
        document.getElementById('line-3').style.opacity = '1';
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-6').classList.add('animateLines');
        document.getElementById('line-6').style.transform = 'rotate(45deg) scaleX(1)';
        document.getElementById('line-6').style.opacity = '1';
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-7').classList.add('animateLines');
        document.getElementById('line-7').style.transform = 'rotate(135deg) scaleX(1)';
        document.getElementById('line-7').style.opacity = '1';
    }

    if (fields[0] && fields[1] && fields[2] && fields[3] && fields[4] && fields[5] && fields[6] && fields[7] && fields[8]) {
        gameOver = true;
        setTimeout(function () {
            document.getElementById('gameOver').classList.remove('d-none');
            document.getElementById('restartButton').classList.remove('d-none');
        }, 1000)
    }

    if (winner) {
        gameOver = true;
        setTimeout(function () {
            document.getElementById('gameOver').classList.remove('d-none');
            document.getElementById('restartButton').classList.remove('d-none');
        }, 1000)
    }

}