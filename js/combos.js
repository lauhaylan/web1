//constantes primer combo
const arregloBsAs =["Buenos Aires","La Costa"];
const arregloStaFe =["Rosario"];
const arregloLaPampa =["Santa Rosa"];
const arregloCba =["Rio Cuarto"];

//constantes segundo combo
const arregloSedeBsAs=["Inglés","Alemán","Portugues","Italiano"];
const arregloSedeLaCosta=["Inglés","Francés"];
const arregloSedeRosario=["Inglés","Francés","Alemán"];
const arregloSedeStaRosa=["Inglés","Francés","Portugues"];
const arregloSedeRioCuarto=["Inglés","Francés","Alemán"];

const arrayPrecioPresencial=["$6000"];
const arrayPrecioVirtual=["$3500"];
const arrayPrecioDual=["$5000"];

$(document).ready(function () {
    mostrarPcia();

    $("#provincias").change(function () { 
        cargarComboPcias($(this).val()); 
               
    });
    $("#sedesI").change(function () {
        alert($(this).val()); 
        cargarComboSedes($(this).val());       
    });

    $("#modalidad").change(function () { 
        cargarComboModa($(this).val())
        });

    

});

function cargarComboPcias(valor){
    const comboPcias= $("#sedesI");
    comboPcias.empty();
    
    
    switch(valor){
        case '1':{
            for (texto of arregloBsAs){
                comboPcias.append(`<option value="${texto}">${texto}</option>`);
            }
            break
        }
        case '2':{
            for (texto of arregloStaFe){
                comboPcias.append(`<option value="${texto}">${texto}</option>`);
            }
            break;
        }
        case '3':{
            for (texto of arregloLaPampa){
                comboPcias.append(`<option value="${texto}">${texto}</option>`);
            }
            break;
        }
        case '4':{
            for (texto of arregloCba){
                comboPcias.append(`<option value="${texto}">${texto}</option>`);
            }   
            break;
        }
    }
}

function cargarComboSedes(valorS){
    const comboSedes= $("#idiomas");
    comboSedes.empty();

    switch(valorS){
        case '1':{
            for (texto of arregloSedeBsAs){
                comboSedes.append(`<option value="${texto}">${texto}</option>`);
            }
        }
        break;
        case '2':{
            for (texto of arregloSedeLaCosta){
                comboSedes.append(`<option value="${texto}">${texto}</option>`);
            }
        }
        break;
        case '3':{
            for (texto of arregloSedeRosario){
                comboSedes.append(`<option value="${texto}">${texto}</option>`);
            }
        }
        break;
        case '4':{
            for (texto of arregloSedeStaRosa){
                comboSedes.append(`<option value="${texto}">${texto}</option>`);
            }
        }
        break;
        case '5':{
            for (texto of arregloSedeRioCuarto){
                comboSedes.append(`<option value="${texto}">${texto}</option>`);
            }
        }
        break;
    }
}

function cargarComboModa(valor){
    const comboModalidad= $("#precio");
    comboModalidad.empty();
    
    switch(valor){
        case '1':{
            for (texto of arrayPrecioPresencial){
                comboModalidad.append(`<option value="${texto}">${texto}</option>`);
            }
            break
        }
        case '2':{
            for (texto of arrayPrecioVirtual){
                comboModalidad.append(`<option value="${texto}">${texto}</option>`);
            }
            break;
        }
        case '3':{
            for (texto of arrayPrecioDual){
                comboModalidad.append(`<option value="${texto}">${texto}</option>`);
            }
            break;
        }
    }
}

function mostrarPcia(){
    let pciaElegida=$("#provincias").val();
    $("#recopilacion").html(pciaElegida);
}