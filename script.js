const spenta = document.querySelector('.spenta')

const accesa = document.querySelector('.accesa')

const button = document.getElementById('button')

button.addEventListener('click' , function(){
    console.log('CLICCATO')
    //spenta.classList.add('.')
    accesa.classList.remove('.d-none');
})