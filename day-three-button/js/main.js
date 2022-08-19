const ball = document.querySelector('.ball');
const body = document.querySelector('body');


ball.addEventListener('click', function () {
    body.classList.toggle('active');
    ligarDesligar();
});

function ligarDesligar(){

    var imagem = document.getElementById('lamp').src;
    var imagem_ligado = 'https://www.w3schools.com/js/pic_bulbon.gif';
    var imagem_desligado = 'https://www.w3schools.com/js/pic_bulboff.gif';
    
    if(imagem == imagem_ligado){
    	document.getElementById('lamp').src = imagem_desligado;
    }else{
    	document.getElementById('lamp').src = imagem_ligado;
    }
}
