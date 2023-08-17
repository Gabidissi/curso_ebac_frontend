const form = document.getElementById('formulario');
let campoA = document.getElementById('campo-a');
let campoB = document.getElementById('campo-b');
let formEValido = false;

function validaCampo(valorCampo) { 
    let valorA = campoA.value;
    let valorB = campoB.value; 
    return valorA >= valorB; 
}

form.addEventListener('submit', function(e) { 
    e.preventDefault();


    formEValido = validaCampo() 
    if (formEValido) {
        campoA.value = '';
        campoB.value = '';
        document.querySelector('.success').style.display = 'block';
        //setTimeout(document.querySelector('.success').style.display = 'none', 20000)
        
    } else{
    campoA.style.border = '1px solid red';
    document.querySelector('.error').style.display = 'block';
    }
    
})

campoA.addEventListener('input', function(e){
    console.log(e.target.value);
    formEValido = validaCampo(e.target.value)

    if (!formEValido) {
        campoA.style.border = '1px solid red';
        document.querySelector('.error').style.display = 'block';
    } else {
        campoA.style.border = '';
        document.querySelector('.error').style.display = 'none';
    }
    document.querySelector('.success').style.display = 'none';

});