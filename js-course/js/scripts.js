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

var paragrafos = document.getElementsByTagName("p");

console.log(paragrafos);