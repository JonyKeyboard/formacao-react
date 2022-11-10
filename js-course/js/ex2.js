var num1 = parseInt(document.getElementById("num_1").innerHTML);
var num2 = parseInt(document.getElementById("num_2").innerHTML);

console.log(num1);

document.getElementById("resultado").innerHTML = "<strong>"+(num1+num2)+"</strong>";

//--------------------------------------------------------------------------------------

var num1 = parseFloat(document.getElementById("caixa_azul").innerHTML);

//F = (9 * C / 5) + 32

function celsiusForFahrenheit(celsius_num) {
    var fahrenheit = (9 * (celsius_num / 5)) + 32;
    return fahrenheit;
}

var num2 = celsiusForFahrenheit(num1);

document.getElementById("caixa_amarela").innerHTML = num2.toFixed(2);

//--------------------------------------------------------------------------------------

var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
]; 

grupos.push(grupos[1]);
grupos.push(grupos[2]);
grupos.push(["Mariana", "Felipe", "Carla"]);

console.log(grupos);

//--------------------------------------------------------------------------------------

var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4
}

document.getElementById("categoria_principal").innerHTML = curso.categoria[0];

function totAv(num1,num2,num3,num4,num5) {
    total = num1+num2+num3+num4+num5;
    return total;
}

document.getElementById("total_aval").innerHTML = totAv(curso.n_aval_1_estrela, curso.n_aval_2_estrelas,curso.n_aval_3_estrelas,curso.n_aval_4_estrelas,curso.n_aval_5_estrelas);

function medPond(num1,num2,num3,num4,num5) {
    total = num1+num2+num3+num4+num5;
    mepo = ((1*num1)+(2*num2)+(3*num3)+(4*num4)+(5*num5))/total;

    return mepo;
}

document.getElementById("media_aval").innerHTML = medPond(curso.n_aval_1_estrela, curso.n_aval_2_estrelas,curso.n_aval_3_estrelas,curso.n_aval_4_estrelas,curso.n_aval_5_estrelas);

