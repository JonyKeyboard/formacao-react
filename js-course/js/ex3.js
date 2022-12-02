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

document.getElementById("calcular").onclick = function() {
    
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var n_faltas = parseFloat(document.getElementById("n_faltas").value);

    var media = (nota1 + nota2) / 2;
    var min_presenca = 20 * 0.7;

    if(media < 6.5 && n_faltas > min_presenca){
        document.getElementById("result").innerHTML = "Reprovado por média e falta";
    }else if(media < 6.5){
        document.getElementById("result").innerHTML = "Reprovado por média";
    } else if (n_faltas > min_presenca) {
        document.getElementById("result").innerHTML = "Reprovado por falta";
    } else {
        document.getElementById("result").innerHTML = "Aprovado";
    }
};

//---------------------------------------------------------------------------------

var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
        
    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    }

];

var list_element = document.getElementById("vendas_cursos");
var n_vendas = 0;
var total_vendas = 0;

for (var a = 0 ; a < vendas_cursos.length ; a++){
    
    if(!vendas_cursos[a].reembolso){
        list_element.innerHTML += '<tr>';
        list_element.innerHTML += '<td>' + vendas_cursos[a].aluno + '</td>' + 
                                    '<td>' + vendas_cursos[a].data + '</td>' +
                                    '<td>' + vendas_cursos[a].valor + '</td>';
        list_element.innerHTML += '</tr>';
        n_vendas += 1;
    }
    
    
}

document.getElementById("total_vendas").innerHTML = n_vendas;
