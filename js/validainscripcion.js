$(document).ready(function () {
   cargarVista();

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

    $(".formulario_inscripcion").submit(function(e){
       validar(e);        
});
});

function cargarVista(){
    var traerDato= JSON.parse(localStorage.getItem('form'));
    var texto= "Inscripción al curso de "+traerDato.idiomas+" en la sede "+traerDato.sedes;
     texto+= " en "+traerDato.provincias+" modalidad "+traerDato.modalidad;
    $("#parrafoLS").text(texto);
    // <p>Incripcion al curso de idiomas en la sede ESTABLECIMIENTO en EL HORARIO</p>
}

function validar(e){
    let error=false;
    var regexemail= /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    /*var regextel= /^[0-9]{3}\-[0-9]{4}-[0-9]{4}$||^[0-9]{3}\-[0-9]{8}$/;*/
    $("#mensaje").empty();
    $(".formulario_inscripcion input").removeClass();
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
    if(!$("#miemail").val().match(regexemail)){
        error=true;
        $("#mensaje").append("<p>El campo Email debe tener mail válido</p>");
        $("#miemail").addClass("error");
    }
    if($("#telefono").val()==""){
        error=true;
        $("#mensaje").append("<p>El campo teléfono no tiene un formato valido</p>");
        $("#telefono").addClass("error");
    }
    if($("#provincia").val()==""){
        error=true;
        $("#mensaje").append("<p>El campo provincia es obligatorio</p>");
        $("#provincia").addClass("error");
    }
    if($("#cuidad").val()==""){
        error=true;
        $("#mensaje").append("<p>El campo cuidad es obligatorio</p>");
        $("#cuidad").addClass("error");
    }
}
if (error){
    e.preventDefault();
}




