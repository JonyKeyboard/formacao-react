// toLowerCase e toUpperCase

var frase = "Esta é a frase que vamos manipular";

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(frase.toLocaleLowerCase());

//trim

var nome = "        Jony       ";

var nomeTrim = nome.trim();

console.log(nomeTrim);

// split

console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(","));

// lastIdexOf

var fraseDois = "Eu quero a ultima palavra teste do teste";

console.log(fraseDois.lastIndexOf("teste"));