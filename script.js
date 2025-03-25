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
        button.innerText = 'SPEGNI LA LAMPADINA'
    }
    // se è accesa, spegnila
    else {
        spenta.classList.remove('d-none')
        accesa.classList.add('d-none');
        isAccesa = false;
        button.innerText = 'ACCENDI LA LAMPADINA'
    }
})


//BONUS

const secondButton = document.querySelector('.secondButton');

const thirdButton = document.querySelector('.thirdButton')

const spenta2 = document.querySelector('.spenta2')

const accesa2 = document.querySelector('.accesa2')

secondButton.addEventListener('click', function () {
    spenta2.classList.add('d-none')
   accesa2.classList.remove('d-none');
})

thirdButton.addEventListener('click', function () {
    accesa2.classList.add('d-none')
   spenta2.classList.remove('d-none');
})