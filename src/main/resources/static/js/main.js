$('#formAddPersona').submit(function(event) {
	event.preventDefault();
    var formElement = this;
    var formData = new FormData(formElement);
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            //cerrar modal
            $("#modalAddPersona").modal('toggle');
            //limpiar form
            $("#formAddPersona").trigger("reset");
            //agregar a la tabla
            $('#tabla-personas tbody:last-child').append(
            		'<tr> <td>'+response.id+'</td> <td>'+response.nombre+'</td> <td>'+response.apellidos+'</td> <td>'+response.telefono+
            		'</td> <td><button class="btn btn-sm btn-warning editPersona"><i class="fas fa-edit"/></button></td>'+
            		'<td><button class="btn btn-sm btn-danger deletePersona"><i class="fas fa-trash-alt"/></button></td> </tr>');
            //mensaje alerta
            $('#alerta-add').find("strong").find("span").text("agregada");
            //mostrar alerta
            $('#alerta-add').show();
            //ocultar alerta en 3 segundos
            $('#alerta-add').delay(3000).fadeOut(450);
            
        },
        error: function (error) {
            console.log(error);
        }
    });
});

$('#formEditPersona').submit(function(event) {
	event.preventDefault();
    var formElement = this;
    var formData = new FormData(formElement);
    $.ajax({
        type: "PUT",
        enctype: 'multipart/form-data',
        url: "",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            //cerrar modal
            $("#modalEditPersona").modal('toggle');
            //limpiar form
            $("#formEditPersona").trigger("reset");
            //agregar a la tabla
            $('#tabla-personas tbody:last-child').append(
            		'<tr> <td>'+response.id+'</td> <td>'+response.nombre+'</td> <td>'+response.apellidos+'</td> <td>'+response.telefono+
            		'</td> <td><button class="btn btn-sm btn-warning editPersona"><i class="fas fa-edit"/></button></td>'+
            		'<td><button class="btn btn-sm btn-danger deletePersona"><i class="fas fa-trash-alt"/></button></td> </tr>');
            //mensaje alerta
            $('#alerta-add').find("strong").find("span").text("modifcada");
            //mostrar alerta
            $('#alerta-add').show();
            //ocultar alerta en 3 segundos
            $('#alerta-add').delay(3000).fadeOut(450);
            
        },
        error: function (error) {
            console.log(error);
        }
    });
});

$(document).ready(function(){
	 $(".deletePersona").click(function(){
		 var fila = $(this).parents("tr");
		 var id = $(this).parent().siblings(".id").text();
		 var formData = new FormData();
		 formData.append("id", id);
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
		            $('#alerta-add').find("strong").find("span").text("eliminada");
		            //mostrar alerta
		            $('#alerta-add').show();
		            //ocultar alerta en 3 segundos
		            $('#alerta-add').delay(3000).fadeOut(450);
		            
		        },
		        error: function (error) {
		            console.log(error);
		        }
		    });		 
	 });
	 $(".editPersona").click(function(){
		 var id = $(this).parent().siblings(".id").text();
		 var nombre = $(this).parent().siblings(".nombre").text();
		 var apellidos = $(this).parent().siblings(".apellidos").text();
		 var telefono = $(this).parent().siblings(".telefono").text();
		 console.log("editando "+id);
		 $("#idEdit").val(id);
		 $("#nombreEdit").val(nombre);
		 $("#apellidosEdit").val(apellidos);
		 $("#telefonoEdit").val(telefono);
		 $("#modalEditPersona").modal('toggle');
	  
	});
});

