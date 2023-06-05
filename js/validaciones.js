var validForm= false;

$(document).ready(function () {

    $("a.desplegable").click(function(){
        if($('.menu').is(":visible")){
            $('.menu').slideUp();
        }else{
          $('.menu').slideDown();
        }
      });
      $(window).resize(function(){
          if($(this).width()>768){
              $(".menu").show();
          } else{
              $(".menu").hide();
          }
      });

    $("#form").submit(function(e){
        validar(e);
        if(!validForm){
            e.preventDefault();
            $(".modal").show();
        } 
    });   
    
    $("#cerrar").click(function(){
        $(".modal").fadeOut();
        validForm= true;
        $("#form").submit();
     });
    
});


function validar(e){
    let error=false;
    var regexemail= /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/; //variable validacion mail
    //const numeroTelefono = $("#telefono").val();
    var regextel= /^[0-9]{3}\-[0-9]{4}-[0-9]{4}$||^[0-9]{3}\-[0-9]{8}$/;

    $("#mensaje").empty();
    $("#form input").removeClass();
    if($("#nombre").val()==""){
        error=true;
        $("#mensaje").append("<p>El campo nombre es obligatorio</p>");
        $("#nombre").addClass("error");
    }
    if($("#apellido").val()==""){
        error=true;
        $("#mensaje").append("<p>El campo apellido es obligatorio</p>");
        $("#apellido").addClass("error");
    }
    if($("#consultas").val().length>longitudMax){
        error=true;
        $("#mensaje").append("<p>El campo debe contener menos de 1000 caracteres</p>");
        $("#consultas").addClass("error");
    }
    if(!$("#miemail").val().match(regexemail)){
        error=true;
        $("#mensaje").append("<p>El campo Email debe tener mail válido</p>");
        $("#miemail").addClass("error");        
    }
    if(!$("#telefono").val().match(regextel)){
        error=true;
        $("#mensaje").append("<p>El campo teléfono no tiene un formato valido</p>");
        $("#telefono").addClass("error");        
    }
    
    if (error){
        e.preventDefault();
    }
}
var longitudMax = 1000; 
$(function(){
   
    var charsActuales = $("#consultas").val().length;
    $("#restantes").html(longitudMax + " caracteres permitidos");//agrega la linea de conteo
    
    $("#consultas").keyup(function(){    
        var charsRestantes = longitudMax - $("#consultas").val().length;
        $("#restantes").html(charsRestantes + " caracteres restantes");
    })//caracteres restantes    
})
$(function(){
    $("#consultas").keyup(function(){
        var charsNuevos = $("#consultas").val().length;
        $("#contador").html(charsNuevos + " caracteres ingresados");
    })    //cuenta caracteres
})


