var get_num = '';
var resultado = '';
var resultado_final = '';
var sinal = '';

document.getElementById('0').addEventListener('click', function() {
    get_num += '0'
    get_num = get_num.substr(0, 8)
    document.getElementById('display').innerHTML = get_num;
})

document.getElementById('1').addEventListener('click', function() {
    get_num += '1'
    get_num = get_num.substr(0, 8)
    document.getElementById('display').innerHTML = get_num;
})

document.getElementById('2').addEventListener('click', function() {
    get_num += '2'
    get_num = get_num.substr(0, 8)
    document.getElementById('display').innerHTML = get_num;
})

document.getElementById('3').addEventListener('click', function() {
    get_num += '3'
    get_num = get_num.substr(0, 8)
    document.getElementById('display').innerHTML = get_num;
})

document.getElementById('4').addEventListener('click', function() {
    get_num += '4'
    get_num = get_num.substr(0, 8)
    document.getElementById('display').innerHTML = get_num;
})

document.getElementById('5').addEventListener('click', function() {
    get_num += '5'
    get_num = get_num.substr(0, 8)
    document.getElementById('display').innerHTML = get_num;
})

document.getElementById('6').addEventListener('click', function() {
    get_num += '6'
    get_num = get_num.substr(0, 8)
    document.getElementById('display').innerHTML = get_num;
})

document.getElementById('7').addEventListener('click', function() {
    get_num += '7'
    get_num = get_num.substr(0, 8)
    document.getElementById('display').innerHTML = get_num;
})

document.getElementById('8').addEventListener('click', function() {
    get_num += '8'
    get_num = get_num.substr(0, 8)
    document.getElementById('display').innerHTML = get_num;
})

document.getElementById('9').addEventListener('click', function() {
    get_num += '9'
    get_num = get_num.substr(0, 8)
    document.getElementById('display').innerHTML = get_num;
})

document.getElementById('ponto').addEventListener('click', function() {
    // precisa criar a logica do ponto

    get_num += '.'
    get_num = get_num.substr(0, 8)
    document.getElementById('display').innerHTML = get_num;
})

document.getElementById('on').addEventListener('click', function() {
    get_num = ''
    document.getElementById('display').innerHTML = '';
})

document.getElementById('sign').addEventListener('click', function() {
    get_num = get_num * -1
    document.getElementById('display').innerHTML = get_num;
})

document.getElementById('dividido').addEventListener('click', function() {
    sinal = '/'
    resultado = get_num + sinal;
    get_num = ''
    document.getElementById('display').innerHTML = '';
})

document.getElementById('por').addEventListener('click', function() {
    sinal = '*'
    resultado = get_num + sinal;
    get_num = ''
    document.getElementById('display').innerHTML = '';
})

document.getElementById('mais').addEventListener('click', function() {
    sinal = '+'
    resultado = get_num + sinal;
    get_num = ''
    document.getElementById('display').innerHTML = '';
})

document.getElementById('menos').addEventListener('click', function() {
    sinal = '-'
    resultado = get_num + sinal;
    get_num = ''
    document.getElementById('display').innerHTML = '';
})

document.getElementById('raiz').addEventListener('click', function() {
    resultado = get_num;
    get_num = get_num.substr(0, 8)
    var raiz = Math.sqrt(resultado)
    raiz = raiz.toString();
    raiz = raiz.substr(0, 8)
    get_num = ''
    document.getElementById('display').innerHTML = raiz;
})

document.getElementById('igual').addEventListener('click', function() {
    resultado += get_num;
    resultado_final = eval(resultado)
    valor = resultado_final;
    resultado_final = resultado_final.toString();
    resultado_final = resultado_final.substr(0, 8);
    document.getElementById('display').innerHTML = resultado_final;
    get_num = '';
    resultado = '';
})


// alterando o estilo das teclas