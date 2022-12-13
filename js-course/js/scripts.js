// Aula 24 - BOM

// window.onmousemove = function(e) {

//     if(e.pageY < 5){
//         alert('Não perca os descontos exclusivos na seção de promoções');
//     }
// }

// Aula 25 - localStorage

// localStorage.setItem("nome","João");

// console.log(localStorage);

// localStorage.removeItem("nome");

// console.log(localStorage);

document.getElementById("enviar-nome").onclick = function (){

    //guardar o nome digitado em localStorage
    var nome = document.getElementById("nome-usuario").value;
    localStorage.setItem("nome", nome);

    //esconde o formulario
    document.getElementById("name-field").style.display = "none";

    //atualizar e mostrar mensagem de boas vindas
    document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem?";
    document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
    document.getElementById("welcome-area").style.display = "initial";

};

if(localStorage.nome) {
    
    //esconde o formulario
    document.getElementById("name-field").style.display = "none";

    //atualizar e mostrar mensagem de boas vindas
    document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem?";
    document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
    document.getElementById("welcome-area").style.display = "initial";

}

document.getElementById("not-me").onclick = function(){

    //remover chave do localStorage
    localStorage.removeItem("nome");
    //esconder mensagem de boas vindas
    document.getElementById("welcome-area").style.display = "none";
    //mostrar formulário
    document.getElementById("name-field").style.display = "initial";

};