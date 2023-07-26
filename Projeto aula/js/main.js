$(document).ready(function(){

    $(`#telefone`).mask(`(00) 00000-0000`);

    $('form').validate({ //O plugin validate trabalha com nome e não com ID então no html da para notar que colocamos alem do id a tag name.//
        rules: {
            nome: {
            required: true
            }, 
            email:{
                required: true,
                email: true
            }, 
            telefone: {
                required: false
            },
            mensagem: {
                required:false
            }
        }, 
        messages : {
            nome: 'Por favor, insira seu nome', 
            email: 'Por favor, insira seu email', 
        }, 
        submitHandler: function(form){
            console.log(form);
        }, 
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert (`Existem ${camposIncorretos} campos incorretos no formulario`)
            }
        }
    });
});