let cursos=[
    {
        "establecimiento":"Buenos Aires",
        "idioma":"ingles",
        "inscripcion":"febrero 2022",
        "horario":"Lu y Ju, mañana"
        
    },
    {
        "establecimiento":"La Costa",
        "idioma":"ingles",
        "inscripcion":"abril 2022",
        "horario":"Ma y Vi, Tarde"
    },
    {
        "establecimiento":"Buenos Aires",
        "idioma":"aleman",
        "inscripcion":"febrero 2022",
        "horario":"Ma y Vi, Tarde"
    },
    {
        "establecimiento":"Buenos Aires",
        "idioma":"portugues",
        "inscripcion":"febrero 2022",
        "horario":"Lu y Ju, mañana"
    },
    {
        "establecimiento":"Buenos Aires",
        "idioma":"italiano",
        "inscripcion":"febrero 2022",
        "horario":"Ma y Vi, Tarde"
    },
    {
        "establecimiento":"La Costa",
        "idioma":"frances",
        "inscripcion":"febrero 2022",
        "horario":"Ma y Vi, Tarde"
    },
    {
        "establecimiento":"Rio Cuarto",
        "idioma":"ingles",
        "inscripcion":"febrero 2022",
        "horario":"Sabados, mañana"
    },
    {
        "establecimiento":"Rio Cuarto",
        "idioma":"frances",
        "inscripcion":"febrero 2022",
        "horario":"Ma y Vi, Tarde"
    },
    {
        "establecimiento":"Rio Cuarto",
        "idioma":"aleman",
        "inscripcion":"febrero 2022",
        "horario":"Sabados, mañana"
    },
    {
        "establecimiento":"Santa Rosa",
        "idioma":"ingles",
        "inscripcion":"febrero 2022",
        "horario":"Ma y Vi, Tarde"
    },
    {
        "establecimiento":"Santa Rosa",
        "idioma":"frances",
        "inscripcion":"febrero 2022",
        "horario":"Lu y Ju, mañana"
    },
    {
        "establecimiento":"Santa Rosa",
        "idioma":"portugues",
        "inscripcion":"abril 2022",
        "horario":"Sabados, mañana"
    },
    {
        "establecimiento":"Rosario",
        "idioma":"ingles",
        "inscripcion":"febrero 2022",
        "horario":"Ma y Vi, Tarde"
    },
    {
        "establecimiento":"Rosario",
        "idioma":"frances",
        "inscripcion":"febrero 2022",
        "horario":"Sabados, mañana"
    },
    {
        "establecimiento":"Rosario",
        "idioma":"aleman",
        "inscripcion":"abril 2022",
        "horario":"Lu y Ju, mañana"
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
    const establecimiento=$("#establecimiento").val();
    const idioma=$("#idioma").val();
    
    //filtro array
    let filtrado=cursos.filter(cursos=>cursos.establecimiento==establecimiento&&cursos.idioma==idioma);
    
    //vaciar section cursos empty()
    $("#cursos").empty();

    //recorre array y llena datos  append()
    filtrado.forEach(curso=>{
        $("#cursos").append(`
            <article>
                <p>Establecimiento:${curso.establecimiento}</p>
                <p>Idioma:${curso.idioma}</p>
                <p>Inscripcion:${curso.inscripcion}</p>
                <p>Horario:${curso.horario}</p><br>
            </article>
        `);
    });
}