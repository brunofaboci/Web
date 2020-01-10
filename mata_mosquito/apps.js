var altura = 0
var largura = 0
var vidas = 1
var tempo = 31

var nivel = window.location.search;
nivel = nivel.replace('?', '');

// definir tempo
var criaMoscaTempo = 1500
if (nivel === 'normal') {
    criaMoscaTempo = 1500
} else if (nivel === 'dificil') {
    criaMoscaTempo = 1000
} else if (nivel === 'doido') {
    criaMoscaTempo = 750
}

//capturar as dimensões da tela
function ajustaTela() {
    altura = (window.innerHeight) - 100
    largura = (window.innerWidth) - 100
}

ajustaTela()

var cronometro = setInterval(function() {
    tempo--
    if (tempo < 0) {
        clearInterval(cronometro)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)

// criar posições aleatorias na tela
function randomPosition() {
    //remover o elemento (caso exista)
    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()
        if (vidas > 3) {
            window.location.href = 'end_game.html'
        } else {
            document.getElementById('v' + vidas).src = 'img/coracao_vazio.png'
            vidas++
        }

    }

    var posicaoX = Math.floor(Math.random() * largura)
    var posicaoY = Math.floor(Math.random() * altura)

    // criar o elemento HTML (mosca)
    var mosca = document.createElement('img')
    mosca.src = 'img/mosca.png'
    mosca.className = randomSize() + ' ' + randomSide()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosca)
}

// adiciona uma nova mosca a cada segundo
setInterval(function() {
    randomPosition()
}, criaMoscaTempo)


// criar tamanhos aleatórios para a mosca
function randomSize() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

randomSize()

// criar lados aleatórios para a mosca
function randomSide() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

randomSide()