$(function(){

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

    $("#animar").click(function(){

        $("#quadrado")
            .animate({width: '+=20px'},500)
            .animate({height: '+=20px'},500, 
                function() {
                    $("#quadrado").css('background-color', 'green')
                }
            )
            .animate({borderRadius: '20px'});
    });

});