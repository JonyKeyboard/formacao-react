// Aula 10 - Trabalhando com o DOM

// document.getElementById("caixa_amarela").innerHTML = '<h1>' + 'Caixa amarela' + '</h1>';

// var caixa_azul = document.getElementById("caixa_azul").innerHTML;

// document.getElementById("caixa_azul").innerHTML = '<h1>'+ caixa_azul +'</h1>';

// Aula 11 - Funções

// function soma_numeros() {
//     var x = 5;
//     var y = 2;
//     var soma = x + y;
//     console.log(soma);
// }

// soma_numeros();

// function soma_args(num1, num2) {
//     var soma = num1 + num2;
//     return soma;
// }

// console.log(soma_args(2,3));

function valor_imc(peso,altura) {
    var imc = peso / (altura * altura);
    return imc;
}

var meu_peso = parseFloat(document.getElementById("peso").innerHTML);
var minha_altura = parseFloat(document.getElementById("altura").innerHTML);

var meu_imc = valor_imc(meu_peso,minha_altura);

document.getElementById("peso").innerHTML = meu_peso;
document.getElementById("altura").innerHTML = minha_altura;
document.getElementById("imc").innerHTML = meu_imc.toFixed(2);
