function Fecha(){
    var f=new Date();
    return(f.getDate() + "/" + f.getMonth() + "/" + f.getFullYear());
}

function MarcaE(Marca){
    for (i = 0; i < Marca.length; i++) 
    {
        if (Marca[i].checked) 
        {
            return Marca[i].value;
        }	
    }
}

function ValidarSeleccionado(btnSeleccionado){
    if(btnSeleccionado === "1" || btnSeleccionado === "2")
    {
        document.getElementById("idCheck").style.display = 'block';
    }
    if(btnSeleccionado === "3" || btnSeleccionado === "4" || btnSeleccionado === "5"){
        document.getElementById("idCheck").style.display = 'none';
        document.getElementById("dtpFechaFinal").style.display = 'none';
        document.frmExamen.chkRangoFechas.checked = 0;
    }

    if(document.frmExamen.chkRangoFechas.checked){
        document.getElementById("dtpFechaFinal").style.display = 'block';
    } else {
        document.getElementById("dtpFechaFinal").style.display = 'none';
    }
}
function ValidarSeleccionadoRadio(){
        document.getElementById("SelecAmbas").style.display = 'block';
}

function ValidarSeleccionadoRadioIngreso_Salida(){
        document.getElementById("SelecAmbas").style='display:none;';
}

function validarTodo(form){
    var xCedula = document.getElementById("txtCedula").value
    var xNombre = document.getElementById("txtNombre").value
    if(xNombre.length == 0)
    {
        alert("Debe digitar el nombre");
        txtNombre.focus();
    }
    
    else{
        if(xCedula.length == 0)
        {
            alert("Debe digitar la cedula");
            txtCedula.focus();
        }else{
            resumen();
        } 
    }  
}
function Limpiar(){
    document.getElementById("SelecAmbas").style.display = 'none';
    document.getElementById("dtpFechaFinal").style.display = 'none';
    document.getElementById("idCheck").style.display = 'none';
}

function cargarCombo(){    
var justificaciones = new Array ("Vacaciones", "Incapacidad/Licencia", "Llegada Tardia", "Capacitacion", "Permiso");
    for( var i = 0; i < justificaciones.length; i++) {
    document.write( "<option value='"+ (i+1) +"'> "+justificaciones[i]+"");
    }	
                    
}

function resumen(){
    var xCedula = document.getElementById("txtCedula").value
    var xNombre = document.getElementById("txtNombre").value
    var indiceJus = document.frmExamen.cboJUS.selectedIndex  
    var xSistemaPorJus = document.frmExamen.cboJUS.options[indiceJus].text
    var JustDetallada =document.getElementById("DescripcionId").value
    var Archivo= document.getElementById("Subir").value
    var xFechaInicial = document.getElementById("dtpFechaInicial").value
    var xFechaFinal = document.getElementById("dtpFechaFinal").value
    var xCheckRango = document.getElementById("idchkRangoFechas")
    var FechaInicial =  xFechaInicial.substring(8,10) + "/" + xFechaInicial.substring(5,7) + "/" + xFechaInicial.substring(0,4);
    var FechaFinal =  xFechaFinal.substring(8,10) + "/" + xFechaFinal.substring(5,7) + "/" + xFechaFinal.substring(0,4);
    var formulario = document.forms[0];
    
    document.write("Resumen" + "<br>");
    document.write("Nombre: " + xNombre + "<br>");
    document.write("Cedula: " + xCedula + "<br>");
    document.write("Fecha: " + Fecha() + "<br>");
    document.write("Justificacion: "+ xSistemaPorJus + "<br>");
    if(xCheckRango.checked){
        document.write("Inicio del tiempo a justificar: " + FechaInicial + "<br>");
        document.write("Fin del tiempo a justificar: " + FechaFinal + "<br>");
    } else{ 
        document.write("Fecha a justificar: " + FechaInicial + "<br>");
    }
    document.write("Marca Omitida: " + MarcaE(formulario.Marca) + "<br>");
    if(MarcaE(formulario.Marca) == "Ambas"){
        document.write("Nombre del Archivo Adjunto: " + Archivo + "<br>");
    }      
    document.write("Detalle de Justificacion: " + JustDetallada + "<br>");
}

function nombre() {
    
}