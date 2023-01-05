// $(function(){

    // aula 34 = Jquery - Sintaxe

    // $( "#esconder" ).click(function() {
    //     $(".exemplo").hide();
    // });

    // // aula 35 - jquery - manipulacao do conteúdo HTML

    // var conteudo_html = $("#paragrafo-html").html();
    // console.log(conteudo_html);

    // $("#paragrafo-html").html("Mudar conteúdo do parágrafo");
    // conteudo_html = $("#paragrafo-html").html();
    // console.log(conteudo_html);


    // Pegar o valor atual do href:

    // var url_link = $("#paragrafo-link").attr("href");
    // console.log(url_link);

    // Trocar o valor do href:

    // $("#paragrafo-link").attr("href", "http://www.udemy.com");
    // url_link = $("#paragrafo-link").attr("href");
    // console.log(url_link);

    // $("#mudar_imagem").click(function(){
    //     $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
    //     $("#mudar_imagem").hide();
    // });

    // Remover o conteúdo, mantendo o elemento:
    // $("#paragrafo-empty").empty();

    // // Remover o elemento:
    // $("#paragrafo-empty").remove();

    // aula 36 - jQuery - Loop Each

    // var lista = ["HTML","CSS","Javascript", "jQuery", "PHP"];

    //     $.each(lista, function( indice, valor ) {
    //         console.log('O elemento de índice [' + indice + '] tem o valor de ' + valor);
    //     });

    // // Aplicação do loop each em um objeto:

    // var pessoa = {
    //     'nome': 'João Pedro',
    //     'DN': '20/01/1990',
    //     'CPF': '111.111.111-11'
    // };

    // $.each(pessoa, function( chave, valor ) {
    //     console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
    // });

    // var interesses = $("#interesses li");

    //     $.each(interesses, function( chave, valor ) {
    //         console.log($(valor).text());
    //     });

    // aula 37 - jquery - formularios

    // var conteudo_input = $("#campo_nome").val();
    // console.log(conteudo_input);

    // $("#campo_nome").val("José Dias");
    // conteudo_input = $("#campo_nome").val();
    // console.log(conteudo_input);

    // //--
    // var valor_selecionado = $('#options').val();
    // console.log(valor_selecionado);
        
    // var texto_selecionado = $('#options').find(":selected").text();
    // console.log(texto_selecionado);

    // $("#options").change(function(){
    //     var novo_selecionado = $('#options').find(":selected").text();
    //     console.log(novo_selecionado);
    // });

    // var valor_radio_selecionado = $("input[name='genero']:checked").val();
    // console.log(valor_radio_selecionado);

    // var texto_radio_selecionado = $("input[name='genero']:checked").parent('span').text();;
    // console.log(texto_radio_selecionado);

    // $("input[name='genero']").change(function() {

    //     var novo_radio_selecionado = $("input[name='genero']:checked").parent('span').text();;
    //     console.log(novo_radio_selecionado);

    // });


    // $("input[name='interesse']").change(function() {

    //     var checkboxes_selecionados = $("input[name='interesse']:checked");
    //     var textos = [];
        
    //     $.each(checkboxes_selecionados, function( index, value ) {
            
    //         textos.push($(value).parent("span").text());
        
    //     });
        
    //     console.log(textos);
        
    // });

    // aula 37 - jquery - manipulacao de classes

    // // Adicionar classe:
    // $("#adicionar_classe").click(function(){
    //     $("#paragrafo-classes").addClass("styling");
    // });

    // // Remover classe:
    // $("#remover_classe").click(function(){
    //     $("#paragrafo-classes").removeClass("styling");
    // });

    // // Alternar classe:
    // $("#alternar_classe").click(function(){
    //     $("#paragrafo-classes").toggleClass("styling");
    // });

    // aula 38 - jquery - eventos

    // $("#nome").change(function(){

    //     var conteudo = $("#nome").val();

    //     if(conteudo){
    //         $("#confirmar").show();
    //     } else {
    //         $("#confirmar").hide();
    //     }

    // });

    // $("#nome").keyup(function(){

    //     var conteudo = $("#nome").val();

    //     if(conteudo){
    //         $("#confirmar").show();
    //     } else {
    //         $("#confirmar").hide();
    //     }

    // });

    //aula 38 - Jquery - efeitos
    
    // $( "#botao-esconder" ).click(function() {
    //     $(this).hide(2000, function(){
    //         $("#texto-escondido").show();
    //     });
    // });

    // $("#toggle-tab").click(function() {

    //     $("#tab-content").slideToggle();
    //     $("#toggle-tab").toggleClass("flip");
        
    // });

    //aula 39 - Jquery - animate

    // $("#animar").click(function(){

    //     $("#quadrado").animate({
    //         width: '+=20px'
    //     },500);

    //     $("#quadrado").animate({
    //         height: '+=20px'
    //     }),500;

    // });

    //aula 40 - Jquery - metódos em cadeia

//     $("#animar").click(function(){

//         $("#quadrado")
//             .animate({width: '+=20px'},500)
//             .animate({height: '+=20px'},500, 
//                 function() {
//                     $("#quadrado").css('background-color', 'green')
//                 }
//             )
//             .animate({borderRadius: '20px'});
//     });


// Aula 43 - Funções Callback

// function pegar_usuario(callback){

//     window.setTimeout(function(){
//         var u = {
//             'nome': 'João'
//         };
//         callback(u);
//     }, 1000);

// }
        
// pegar_usuario(function(user) {
//     console.log('Olá ' + user.nome + ', como vai?');
// });

// Aula 44 - erros

// function pegar_usuario(){

//     window.setTimeout(function(){
//         var u = {
//             'nome': 'João'
//         };
//         return u;
//     }, 1000);
    
// }
        
// function saudar_usuario(user) {
//     console.log('Olá ' + user.nome + ', como vai?');
// }
        
// var user = {
//     'nome': ""
// }

// try {
    
//     if (!user.nome) {
//         throw 'Nome em branco';
//     } 
    
//     saudar_usuario(user);
    
// } catch (err) {
//     console.log(err);
//     console.log('Olá usuário, como vai?');
// }

// Aula 45 - Operador If Ternário

 // Exemplo com if normal:
//  var nome = "";
//  if (nome) {
//      var mensagem = "Olá " + nome;
//  } else {
//      var mensagem = "Nome não informado";
//  }

// nome = "Jony";
// idade = 29;

// mensagem = (nome && idade) ? "Olá " + nome + ", você tem "+ idade +" anos." 
//     : (!nome && !idade) ? "Nome e idade não informados"
//     : (!idade) ? "Idade não informada"
//     : "Nome não informado";

// console.log(mensagem);

// Aula 46 - Escopo

// function criar_nome() {
//     nome = 'Maria';
//     console.log(nome); 
// }
// criar_nome(); // O console mostrará 'Maria'
// console.log(nome); // O console mostrará 'Maria'

// -----  Escopo Local em blocos
// var x = 0;

// if (x == 0) {
//     let nome = "Mariana";
// }

// console.log(nome); // Este comando gerará um erro,
// // pois a variável nome foi criada no escopo local do bloco.
//------------------
// var a = "teste";

// for (let a = 0; a < 5 ; a++) {
//     console.log(a);
// }

// console.log(a); // O console mostrará "teste"
//-------------------
// const PI = 3.14159;
// PI = 0; // Este comando gerará um erro, pois não se pode alterar o valor de uma constante

// Aula 47 - Namespaces

// var meuWebApp = (function() {

//     var nome= "Felipe";
    
//     return {
//         ver_nome: function() {
//             return nome;    
//         },
//         mudar_nome(novo_nome) {
//             nome = novo_nome;
//         },
//         apagar_nome: function() {
//             nome = null;
//         }
//     };  
// })();   

// console.log( meuWebApp.ver_nome() );
// console.log( meuWebApp.mudar_nome('Marcos') );
// console.log( meuWebApp.apagar_nome() );

// Aula 48 - JSON

// var funcionario = {
//     'nome': "Fernanda Costa",
//     'd_nascimento': '1988-10-01',
//     'CPF': '111.111.111-11'
// };

// var funcionario_json = JSON.stringify(funcionario);
// console.log(funcionario_json);

// O console mostrará: {"nome":"Fernanda Costa","d_nascimento":"1988-10-01","CPF":"111.111.111-11"}
// que é exatamente o nosso objeto em formato string.

// Aula 50 - Ajaz - Request

// var xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         console.log(this.responseText);
//     }
// };

// xhttp.open("GET", "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22");
// xhttp.send();

// Aula 51 - Ajax - Response

// function mostrar_temperatura(dados) {
//     var dados_obj = JSON.parse(dados);
//     console.log('A temperatura em Londres neste momento é de ' + dados_obj.main.temp + " graus Celsius.")
// }

// function tempo_londres(callback) {
//     var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                    
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             callback(this.responseText);
            
//         } 
//     };

//     xhttp.open("GET", "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22");
//     xhttp.send();
// }

// tempo_londres(mostrar_temperatura);

// Aula 52 - Ajax com Jquery

// $.ajax({
//     url : "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22",
//     type: "GET",
//     dataType: "json",
//     success: function(data){
//         console.log(data);
//     },
//     error: function(){
//         console.log("Erro na requisição");
//     }  
// });
// -------------------------------- metodos em cadeia
$.ajax({
    url : "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22",
    type: "GET",
    dataType: "json"
}).done(function(data){
    console.log(data);
}).fail(function(){
    console.log("Erro na requisição");
});


// });