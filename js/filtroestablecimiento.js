let sedes=[
    {
        "provincia":"Buenos Aires",
        "establecimiento":"Buenos Aires",
        "direccion":"Av. Rivadavia 14580"
    },
    {
        "provincia":"Buenos Aires",
        "establecimiento":"La Costa",
        "direccion":"Hipólito Yrigoyen 2196"
    },
    {
        "provincia":"Cordoba",
        "establecimiento":"Rio Cuarto",
        "direccion":"Colón 243"
    },
    {
        "provincia":"La Pampa",
        "establecimiento":"Santa Rosa",
        "direccion":"9 de Julio 1 "
    },
    {
        "provincia":"Santa Fe",
        "establecimiento":"Rosario",
        "direccion":"Pasco 1160"
    }
    
];

$(document).ready(function () {   

    $("#filtrar").click(function(){
        filtrar();
    });

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
});
function filtrar(){
    //obtengo los selects val()
    const provincia=$("#provincia").val();
    const establecimiento=$("#establecimiento").val();
    
    //filtro array
    let filtrando=sedes.filter(sedes=>sedes.provincia==provincia&&sedes.establecimiento==establecimiento);
    
    //vaciar section cursos empty()
    $("#sedes").empty();

    //recorre array y llena datos  append()
    filtrando.forEach(sede=>{
        $("#sedes").append(`
            <article>
                <p>Provincia:${sede.provincia}</p>
                <p>Establecimiento:${sede.establecimiento}</p>
                <p>Direccion:${sede.direccion}</p><br>
            </article>
        `);
    });
}