// Aula 16 - Eventos

// document.getElementById("click-me").onclick = function () {
//     alert("Você clicou no botão");
// }
// document.getElementById("hover-me").onmouseover = function () {
//     alert("Você passou o cursor no botão");
// }
// document.getElementById("leave-me").onmouseout = function() {
//     alert('Você passou o cursor por cima do botão e depois saiu');
// };
// Aula 17 - Manipulação CSS
// document.onkeydown = function() {
//     alert('Você apertou a tecla: ' + event.keyCode);
// };

// function button_clicked() {
//     alert("Você clicou no botão");
// }

// botao = document.getElementById("botao_cor");
// botao.onclick = function() {
//     botao.style["background-color"] = "purple";
//     botao.style.transform = "translateX(100px)";
// }

// Aula 18 - Outros métodos getElement

// var exemplo = document.getElementsByClassName("exemplo");

// exemplo[0].innerHTML = "teste1";

// console.log(exemplo);

// var paragrafos = document.getElementsByTagName("p");

// console.log(paragrafos);

// Aula 19 - Loops for e for in

// for (var a = 0; a < 5; a++) {
//     console.log(a);
// }
// console.log('-------------------');

// var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];

// for (var b = 0; b < alunos.length ; b++) {
//     console.log(alunos[b]);
// }

// console.log('-------------------');
// var carro = {
//     'Ano': 2018,
//     'Modelo': 'Fox',
//     'Cilindradas': '1.8',
//     'Combustível': 'Gasolina'
// }

// for (var prop in carro) {
//     console.log( prop + ': ' + carro[prop] );
// }

// var elementos = document.getElementsByClassName("exemplo");   

// for (var a = 0; a < elementos.length ; a++) {
//     elementos[a].style.color = "orange";
//     elementos[a].style['font-weight'] = "bold";
// }

// Aula 20 - Loops while e do/while

// var count = 0;

// while (count < 5) {
//     console.log(count);
//     count++;
// }
// var count = 10;
    
// do {
//     console.log(count);
//     count++;
// } while (count < 5);

// Aula 21 - Condicionais

// var idade = 18;

// if (idade < 18) {
//     console.log('Menor de 18');
// } else if (idade == 18) {
//     console.log('Tem 18 anos');
// } else {
//     console.log('Maior de 18');
// }

// nota = 7;
// faltas = 3;

// Resolução com and:

// if (nota >= 7 && faltas <= 4) {
//     console.log( 'O aluno foi aprovado' );
// } else {
//     console.log( 'O aluno foi reprovado' );
// }

// // Resolução com or:

// if (nota < 7 || faltas > 4) {
//     console.log( 'O aluno foi reprovado' );
// } else {
//     console.log( 'O aluno foi aprovado' );
// }

// var nome = "";

// if (nome) {
//     console.log(nome);
// } else {
//     console.log("Nome não informado");
// }

// Aula 22 - Aninhamento de loops e condicionais (nesting)

// var socio = false;
// var idade = 25;

// if (socio || idade >= 65) {
//     console.log('O ingresso é grátis');
// } else {

//     if (idade < 18) {
//         console.log('O ingresso custa: R$ 6,00');
//     } else {
//         console.log('O ingresso custa: R$ 12,00');
//     }
// }

var funcionarios = [
    {
        'nome': 'Carlos Henrique da Silva',
        'idade': 45,
        'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
    },
    {
        'nome': 'Maria Helena Pereira',
        'idade': 32,
        'filhos': ['João Pedro Pereira de Souza']
    },
    {
        'nome': 'José Feliciano Maia',
        'idade': 39,
        'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
    }
];
    
var list_element = document.getElementById("filhos");

for (var a = 0 ; a < funcionarios.length ; a++) {
    if (funcionarios[a].filhos) {
        
        var lista_filhos = funcionarios[a].filhos;
        
        for (var b = 0 ; b < lista_filhos.length ; b++) {
            list_element.innerHTML += '<li>' + lista_filhos[b] + ' - Filho(a) de ' + funcionarios[a].nome + '</li>';
        }
    }
}
