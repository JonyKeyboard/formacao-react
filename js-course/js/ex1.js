console.log("O arquivo 'ex1.js' esté funcionando");

var nome = 'Jony';
var ano_atual = 2022;
var nasc = 1993;

console.log("Olá eu me chamo " + nome + ", tenho " + (ano_atual - nasc) + " anos e estou estudando javascript");

var aluno = "Toinho";
var matricula = "12345";
var nota1 = 9;
var nota2 = 9;


console.log("O aluno " + aluno + ", matricula " + matricula + ", obteve a média final " + (nota1 + nota2)/2);

var num_tel = "999430150";

if(num_tel.length == 9){
    console.log("Resultado do teste: true");
}else{
    console.log("Resultado do teste: false");
}

console.log(Math.pow(32,6));