let fields = [];
let currentCasket = 'apple';

function fieldCasket(id) {
    if(currentCasket == 'apple') {
        currentCasket = 'grapes';
    }
    else {
        currentCasket = 'apple';
    }
    fields[id] = currentCasket;
console.log(fields);
showSymbols();
}

function showSymbols() {
    for (let i = 0; i < fields.length; i++) {
        if(fields[i] == 'apple') {
            document.getElementById('apple-' + i).classList.remove('d-none');
        }
        if(fields[i] == 'grapes') {
            document.getElementById('grapes-' + i).classList.remove('d-none');
        }
        
    }
}