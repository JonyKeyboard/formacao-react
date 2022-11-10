var num1 = parseInt(document.getElementById("num_1").innerHTML);
var num2 = parseInt(document.getElementById("num_2").innerHTML);

console.log(num1);

document.getElementById("resultado").innerHTML = "<strong>"+(num1+num2)+"</strong>";

//--------------------------------------------------------------------------------------

//F = (9 * C / 5) + 32

function celsiusToFahrenheit(celsius_num) {
    var fahrenheit = (9 * (celsius_num / 5)) + 32;
    return fahrenheit;
}

var num1 = parseFloat(document.getElementById("caixa_azul").innerHTML);

var num2 = celsiusToFahrenheit(num1);

document.getElementById("caixa_amarela").innerHTML = num2.toFixed(2);

//--------------------------------------------------------------------------------------

var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
]; 


var novos_grupos = grupos.slice(-2)
novos_grupos.push(["Mariana", "Felipe", "Carla"]);

console.log(novos_grupos);

//--------------------------------------------------------------------------------------

var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrelas': 4,
    'total_aval' : function () {
        var tot_aval = this.n_aval_1_estrelas + this.n_aval_2_estrelas + this.n_aval_3_estrelas + this.n_aval_4_estrelas + this.n_aval_5_estrelas;
        return tot_aval;
    },
    'media_aval' : function () {
        var med_aval = (( 5 * this.n_aval_5_estrelas ) + ( 4 * this.n_aval_4_estrelas ) + ( 3 * this.n_aval_3_estrelas ) + ( 2 * this.n_aval_2_estrelas ) + ( 1 * this.n_aval_1_estrelas ));
        return med_aval/this.total_aval();
        //console.log(med_aval);
    }
}

document.getElementById("categoria_principal").innerHTML = curso.categoria[0];

document.getElementById("total_aval").innerHTML = curso.total_aval();

document.getElementById("media_aval").innerHTML = parseFloat(curso.media_aval());

console.log(curso.media_aval());

//--------------------------------------------------------------------------------------

var pessoa = {
    'nome' : 'Stanley',
    'sobrenome' : 'Jony',
    'email' : '1jony2jony@gmailcom'
}

function criar_tabela(person) {
    var tabelaHTML = '<div class="tableBox">';
    tabelaHTML +=       '<table>';
    tabelaHTML +=           '<tr><th>Nome Completo</th><th>Email</th></tr>';
    tabelaHTML +=           '<tr><td>'+ person.nome + '' + person.sobrenome + '</td><td>'+ person.email +'</td></tr>';
    tabelaHTML +=       '</table>';
    tabelaHTML +=    '</div>';

    return tabelaHTML;
}

document.getElementById("tabela").innerHTML = criar_tabela(pessoa);

