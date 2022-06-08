
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()

var msg = document.getElementById('msg')
var sds = document.getElementById('sauda')
var imagem = document.getElementById('imagem')
var btMais = document.querySelector('#mais');
var btMenos = document.querySelector('#menos');

trocaFundo()

mensagem()

btMais.addEventListener('click',() => {
    hora ++
    if (hora == 24) {
        hora = 0
    }
    mensagem()
    trocaFundo()
})

btMenos.addEventListener('click',() => {
    hora --
    if (hora == -1) {
        hora = 23
    }
    mensagem()
    trocaFundo()
})

function trocaFundo() {

    if (hora >= 0 && hora < 12) {
        imagem.src = 'img/manha.png'
        document.body.style.background = '#E6D8D2'
        sds.innerHTML = 'Bom Dia'
    } 
    
    else if (hora >= 12 && hora <= 18) {
        imagem.src = 'img/tarde.png'
        document.body.style.background = '#A7ADBB'
        sds.innerHTML = 'Boa Tarde'
    } 
    
    else {
        imagem.src = 'img/noite.png'
        document.body.style.background = '#1F404D'
        sds.innerHTML = 'Boa Noite'
    }
}

function mensagem() {

    if (hora == 0 || hora == 1) {
        msg.innerHTML = `Agora é ${hora} hora e ${minutos} minutos`
    } 
    else {
        msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos `
    }
}