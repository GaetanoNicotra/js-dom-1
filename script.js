// Richiamo gli elementi del DOM 
const spenta = document.querySelector('.spenta')

const accesa = document.querySelector('.accesa')

const button = document.getElementById('button')

let isAccesa = false;

// scrivo la funzione che si verifica al click del bottone
button.addEventListener('click', function () {
    console.log('Hai cliccato il bottone', isAccesa)
    // se è spenta, accendila
    if (isAccesa == false) {
        spenta.classList.add('d-none')
        accesa.classList.remove('d-none');
        isAccesa = true;

    }
    // se è accesa, spegnila
    else {
        spenta.classList.remove('d-none')
        accesa.classList.add('d-none');
        isAccesa = false;
    }
})