const spenta = document.querySelector("spenta")

const button = document.getElementById('button')

button.addEventListener('click' , function(){
    console.log('CLICCATO')
    spenta.classList.add('spenta')
})