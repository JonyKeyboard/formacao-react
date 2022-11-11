// Aula 3 - variáveis

// var latitude = 40.87663;
// var longitude = -8.08373;

// console.log(latitude);
// console.log(longitude);

// Aula 4 - String

// var nome = "João";  // podem ser usadas aspas duplas
// var sobrenome = 'Gomes';  // ou aspas simples
// var cpf = '111.111.111-11';  
// var telefone = "998887655";
// var ddd = '21';
// var email = 'joao@gmail.com';
// var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";

// console.log('Nome completo: ' + nome + ' ' + sobrenome);
// console.log(ddd + ' ' + telefone);
// console.log('Primeira letra do nome: ' + nome[0]);

// console.log('Numero de caracteres telefone: ' + telefone.length);

// Aula 5 - Numeros

// var num1 = 20;
// var num2 = 3;

// var soma = num1 + num2;
// var subtracao = num1 - num2;
// var divisao = num1 / num2;
// var multiplicacao = num1 * num2;

// var media = (num1 + num2) / 2;

// console.log('A média é: ' + media);

// //converter o tipo de uma variável

// console.log(Math.pow(2,4));

// var ddd = 21;
// var telefone = 998887655;

// /* Se quisermos montar o telefone completo usando concatenação, podemos ter problemas já que as variáveis são do tipo número. 
// Neste caso devemos convertê-las antes de montar o telefone. 
// Para isso, usamos o método toString, que recebe entre parênteses a valor ou variável que queremos converter.*/

// var ddd_string = ddd.toString();
// var tel_string = telefone.toString();

// var telefone_completo = ddd_string + tel_string;

// console.log(telefone_completo); // retorna '21998887655'

// Aula 6 - Tipos de dados Booleanos

// var teste = 65 < 60;

// console.log(teste);

// Aula 7 - Tipos de dados

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

// function valor_imc(peso,altura) {
//     var imc = peso / (altura * altura);
//     return imc;
// }

// var meu_peso = parseFloat(document.getElementById("peso").innerHTML);
// var minha_altura = parseFloat(document.getElementById("altura").innerHTML);

// var meu_imc = valor_imc(meu_peso,minha_altura);

// document.getElementById("peso").innerHTML = meu_peso;
// document.getElementById("altura").innerHTML = minha_altura;
// document.getElementById("imc").innerHTML = meu_imc.toFixed(2);

//Aula 12 - Arrays

// var alunos = ["João", "Maria", "José"];
// var num_primos = [2, 3, 5, 7, 11, 13];

// console.log(alunos.length);
// console.log(num_primos[2]);
// console.log(num_primos[10]);

// var grupos = [ 
//     [ "João" , "Maria" ],
//     [ "Pedro" , "Joana", "André", "Júlio" ],
//     [ "Carolina" , "Helena", "Marcelo" ]
// ];

// console.log(grupos.length);
// console.log(grupos[1][1]);

//Aula 13 - Objetos

// var funcionario = {
//     'nome': 'Pedro Souza Gomes',
//     'ano_nasc': 1972,
//     'cpf': '111.111.111.11',
//     'cargo': 'Analista de Sistemas'
// };

// console.log(funcionario['nome']);
// console.log(funcionario.ano_nasc);

// funcionario.cargo = "Gerente de TI";
// funcionario.cnh = "135123215335";

// console.log(funcionario);

// var cursos = [
//     {
//         'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
//         'avaliacoes': 680,
//         'alunos': 2300,
//         'categorias': ['programacao', 'tecnologia']
//     },

//     {
//         'titulo': 'Aprenda PHP e faça sites dinâmicos',
//         'avaliacoes': 180,
//         'alunos': 350,
//         'categorias': ['desenvolvimento web', 'programacao']
//     },

//     {
//         'titulo': 'Excel do Zero ao Avançado',
//         'avaliacoes': 420,
//         'alunos': 1800,
//         'categorias': ['produtividade', 'gestão']
//     }
    
// ];

// console.log(cursos[1].categorias[0]);

// var aluno = {
//     'nome': 'Maria',
//     'sobrenome': 'Pereira',
//     'ano_nasc' : 1993,
//     'nome_completo': function() {
//         var nomeCompleto = this.nome + ' ' + this.sobrenome;
//         return nomeCompleto;
//     },
//     'idade' : function (anoAtual) {
//         var sua_idade =  anoAtual - this.ano_nasc;
//         return sua_idade;
//     }
// };

// console.log(aluno.nome_completo());
// console.log(aluno.idade(2022));
