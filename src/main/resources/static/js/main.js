//variable temporal de una fila a editar
var filaEdit;

$('#formAddPersona').submit(function(event) {
	event.preventDefault();
	//objeto persona
    var obj = {}
    obj["id"] = $("#id").val() ;
    obj["nombre"] = $("#nombre").val();
    obj["apellidos"] = $("#apellidos").val();
    obj["telefono"] = $("#telefono").val();
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "",
        data: JSON.stringify(obj),        
        contentType: 'application/json; charset=utf-8',
        dataType : 'json',
        success: function (response) {
            //cerrar modal
            $("#modalAddPersona").modal('toggle');
            //limpiar form
            $("#formAddPersona").trigger("reset");
            //agregar a la tabla
            $('#tabla-personas tbody:last-child').append(
            		'<tr> <td class="id">'+response.id+'</td> <td class="nombre">'+response.nombre+'</td> <td class="apellidos">'+response.apellidos+'</td> <td class="telefono">'+response.telefono+
            		'</td> <td><button class="btn btn-sm btn-warning editPersona"><i class="fas fa-edit"/></button></td>'+
            		'<td><button class="btn btn-sm btn-danger deletePersona"><i class="fas fa-trash-alt"/></button></td> </tr>');
            //se agrega funcion deletePersona al evento click
            $("#tabla-personas tbody tr:last-child td").find("button.deletePersona").click(deletePersona);
            //se agrega funcion editPersona al evento click
            $("#tabla-personas tbody tr:last-child td").find("button.editPersona").click(editPersona);
            //mensaje alerta
            $('#alerta').find("strong").find("span").text("agregada");
            //mostrar alerta
            $('#alerta').show();
            //ocultar alerta en 3 segundos
            $('#alerta').delay(3000).fadeOut(450);
            
        },
        error: function (error) {
            console.log(error);
        }
    });
});

$('#formEditPersona').submit(function(event) {
	event.preventDefault();
    var id =  $("#idEdit").val();
    //objeto persona
    var obj = {}
    obj["id"] = id ;
    obj["nombre"] = $("#nombreEdit").val();
    obj["apellidos"] = $("#apellidosEdit").val();
    obj["telefono"] = $("#telefonoEdit").val();
    $.ajax({
        type: "PUT",
        url: "/"+id,
        data: JSON.stringify(obj),        
        contentType: 'application/json; charset=utf-8',
        dataType : 'json',
        success: function (response) {
            //cerrar modal
            $("#modalEditPersona").modal('toggle');
            //limpiar form
            $("#formEditPersona").trigger("reset");
            //edita los campos de la fila que se quiere actualizar
            filaEdit.find(".id").text(response.id);
            filaEdit.find(".nombre").text(response.nombre);
            filaEdit.find(".apellidos").text(response.apellidos);
            filaEdit.find(".telefono").text(response.telefono);
            //mensaje alerta
            $('#alerta').find("strong").find("span").text("modificada");
            //mostrar alerta
            $('#alerta').show();
            //ocultar alerta en 3 segundos
            $('#alerta').delay(3000).fadeOut(450);
            
        },
        error: function (error) {
            console.log(error);
        }
    });
});

function deletePersona(){
	var fila = $(this).parents("tr");
	 var id = $(this).parent().siblings(".id").text();
	 $.ajax({
	        type: "DELETE",
	        enctype: 'multipart/form-data',
	        url: "/"+id,
	        data: null,
	        processData: false,
	        contentType: false,
	        success: function (response) {
	        	//quitar registro
	            fila.remove();
	            //mensaje alerta
	            $('#alerta').find("strong").find("span").text("eliminada");
	            //mostrar alerta
	            $('#alerta').show();
	            //ocultar alerta en 3 segundos
	            $('#alerta').delay(3000).fadeOut(450);
	            
	        },
	        error: function (error) {
	            console.log(error);
	        }
	 })
}

function editPersona(){
	 var id = $(this).parent().siblings(".id").text();
	 var nombre = $(this).parent().siblings(".nombre").text();
	 var apellidos = $(this).parent().siblings(".apellidos").text();
	 var telefono = $(this).parent().siblings(".telefono").text();
	 $("#idEdit").val(id);
	 $("#nombreEdit").val(nombre);
	 $("#apellidosEdit").val(apellidos);
	 $("#telefonoEdit").val(telefono);
	 $("#modalEditPersona").modal('toggle');
	 filaEdit = $(this).parents("tr");
}

$(document).ready(function(){
	 $(".deletePersona").click(deletePersona);
	 $(".editPersona").click(editPersona);
});

