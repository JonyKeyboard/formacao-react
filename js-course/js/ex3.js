//F = (9 * C / 5) + 32

function celsiusToFahrenheit(celsius_num) {
    var fahrenheit = (9 * (celsius_num / 5)) + 32;
    return fahrenheit;
}

document.getElementById("converter").onclick = function() {
    
    var num1 = parseFloat(document.getElementById("temp_celsius").value);
    var num2 = celsiusToFahrenheit(num1);

    document.getElementById("temp_fahr").innerHTML = num2.toFixed(2);
};

// --------------------------------------------------------------------------------

var ano_inicio = 1930;
var ano_fim = 2018;

while(ano_inicio <= ano_fim){
    document.getElementById("anos_copa").innerHTML += '<li>' + ano_inicio + '</li>'; 
    ano_inicio += 4;
}

// --------------------------------------------------------------------------------


//CORRIGIR--------------------------------------------
document.getElementById("calcular").onclick = function() {
    
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var n_faltas = document.getElementById("n_faltas").value;

    var media = (nota1 + nota2) / 2;
    var min_presenca = 20 * 0.7;

    console.log(media);
    console.log(min_presenca);

    if(media < 6.5 && n_faltas > min_presenca){
        console.log('Reprovado por média e falta')
    }



    // console.log(nota1);
    // console.log(nota2);
    // console.log(n_faltas);
};

