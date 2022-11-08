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

var num1 = 20;
var num2 = 3;

var soma = num1 + num2;
var subtracao = num1 - num2;
var divisao = num1 / num2;
var multiplicacao = num1 * num2;

var media = (num1 + num2) / 2;

console.log('A média é: ' + media);

//converter o tipo de uma variável

console.log(Math.pow(2,4));

var ddd = 21;
var telefone = 998887655;

/* Se quisermos montar o telefone completo usando concatenação, podemos ter problemas já que as variáveis são do tipo número. 
Neste caso devemos convertê-las antes de montar o telefone. 
Para isso, usamos o método toString, que recebe entre parênteses a valor ou variável que queremos converter.*/

var ddd_string = ddd.toString();
var tel_string = telefone.toString();

var telefone_completo = ddd_string + tel_string;

console.log(telefone_completo); // retorna '21998887655'