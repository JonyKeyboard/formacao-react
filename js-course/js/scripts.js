// Aula 24 - BOM

// window.onmousemove = function(e) {

// //     if(e.pageY < 5){
// //         alert('Não perca os descontos exclusivos na seção de promoções');
// //     }
// // }

// // Aula 25 - localStorage

// // localStorage.setItem("nome","João");

// // console.log(localStorage);

// // localStorage.removeItem("nome");

// // console.log(localStorage);

// document.getElementById("enviar-nome").onclick = function (){

//     //guardar o nome digitado em localStorage
//     var nome = document.getElementById("nome-usuario").value;
//     localStorage.setItem("nome", nome);

//     //esconde o formulario
//     document.getElementById("name-field").style.display = "none";

//     //atualizar e mostrar mensagem de boas vindas
//     document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem?";
//     document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
//     document.getElementById("welcome-area").style.display = "initial";

// };

// if(localStorage.nome) {
    
//     //esconde o formulario
//     document.getElementById("name-field").style.display = "none";

//     //atualizar e mostrar mensagem de boas vindas
//     document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem?";
//     document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
//     document.getElementById("welcome-area").style.display = "initial";

// }

// document.getElementById("not-me").onclick = function(){

//     //remover chave do localStorage
//     localStorage.removeItem("nome");
//     //esconder mensagem de boas vindas
//     document.getElementById("welcome-area").style.display = "none";
//     //mostrar formulário
//     document.getElementById("name-field").style.display = "initial";

// };

// aula 26 data e hora

// var data_hoje = new Date();

// console.log(data_hoje.getDate);

// var data_nascimento = "1980-03-01";

// var ano_nascimento = new Date(data_nascimento).getFullYear();
// var ano_atual = new Date().getFullYear();
// var idade = ano_atual - ano_nascimento;

// console.log(idade);

// var data = new Date();

// data = data.getTime();

// var anos = data / 31536000000;

// console.log(Math.floor(anos));

// var envio = new Date("2018-03-20");
// envio = envio.getTime();
// var entrega = new Date("2018-04-06");
// entrega = entrega.getTime();

// var dias = (entrega - envio) / 86400000;

// document.getElementById("dias_entrega").innerHTML = dias;

// aula 27 - Métodos de tempo

// console.log('Mensagem 1');

// window.setTimeout(function(){
//     console.log('Mensagem 2');
// }, 3000);

// document.getElementById("mostrar-loader").onclick = function() {

//     document.getElementById("spinner-loader").style.display = "initial";

//     window.setTimeout(function(){
//         document.getElementById("spinner-loader").style.display = "none";
//     },5000);

// };

// var count = 0;

// var inter = window.setInterval(function(){
//     console.log(count);
//     count++;
//     if (count >= 10){
//         window.clearInterval(inter);
//     }
// }, 1000);

// Desafio Relógio

// window.setInterval(function (){

//     var hora_atual = new Date();

//     var horas = hora_atual.getHours();
//     var minutos = hora_atual.getMinutes();
//     var segundos = hora_atual.getSeconds();

//     function format_time (time) {
//         if (time >= 0 && time <= 9){
//             var formatted_time = time.toString();
//             formatted_time = "0" + formatted_time;
//         } else {
//             var formatted_time = time.toString();
//         }
//         return formatted_time;
//     }

//     document.getElementById("relogio").innerHTML = format_time(horas) + ":" + format_time(minutos) + ":" + format_time(segundos);
// });

// aula 28 - Switch

// function valor_pedagio(categoria){

//     switch(categoria) {

//         case '1':
//             return 11.22;
//             break;
//         case '2':
//             return 22.44
//             break;
//         case '3':
//             return 25.00
//             break;
//         case '4':
//             return 28.10
//             break;
//         default:
//             return 'categoria nao encontrada!';
//     }
// }

// var categoria_veiculo = "3";
// console.log(valor_pedagio(categoria_veiculo));

// var categoria_veiculo = "5";
// console.log(valor_pedagio(categoria_veiculo));

// aula 29 - Break e continue

// var x = 0;

// while(x < 10){
//     console.log(x);
//     x++;

//     if(x==5){
//         break;
//     }
// }

// var lista = [1,5,9,33,56,89,100,122,145,189,190,199,205,290];

// for( a = 0; a < lista.length ; a++){
    
//     if(lista[a] == 190){
//         console.log('Valor encontrado');
//         break;
//     }
//     console.log(lista[a]);
// }

// var num=0;

// while (num < 20){

//     if(num == 3){
//         num++;
//         continue;
//     }

//     console.log(num);
//     num++;
// }

//aula 30 - formularios
//document.getElementById("mostrar_opcao").onclick = function () {

    // var campo_select = document.getElementById("options");
    // var indice_selecionado = campo_select.options.selectedIndex;
    // var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    // document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;

//     var valor_selecionado = document.getElementById("options").value;
//     document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;

// };

// // radio buttons
// document.getElementById("mostrar_radio").onclick = function () {

//     var radio = document.getElementsByName("genero");
    
//     var radio_selected;
    
//     for (var a = 0;  a < radio.length; a++) {
//         if (radio[a].checked) {
//             radio_selected = radio[a].value;
//             break;
//         }
//     }
    
//     document.getElementById("radio_selecionado").innerHTML = radio_selected;

// };
// check boxes

// document.getElementById("mostrar_check").onclick = function(){


//     var check = document.getElementsByName("interesse");

//     document.getElementById("check_selecionado").innerHTML = "";

//     for(var b=0; b < check.length; b++) {
//         if(check[b].checked){
//             document.getElementById("check_selecionado").innerHTML += '<li>'+ check[b].value +'</li>';
//         }
//     }

// };

// document.getElementById("mostrar_data").onclick = function () {

//     var data_select = document.getElementById("data_evento").value;
//     var data_completa = new Date(data_select);
//     document.getElementById("data_selecionada").innerHTML = data_completa;

// };

document.getElementById("escolaridade").onchange = function () {

    var campo_select = document.getElementById("escolaridade");
    var indice_selecionado = campo_select.options.selectedIndex;
    var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    document.getElementById("escolaridade_selecionada").innerHTML = valor_selecionado;

};

var check = document.getElementsByName("lanche");

for (var a = 0;  a < check.length; a++) {

    check[a].onchange = function () {

        document.getElementById("check_selecionado").innerHTML = "";
        
        for (var b = 0;  b < check.length; b++) {
            
            if (check[b].checked) {
                document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
            }
        }
    }  
}
