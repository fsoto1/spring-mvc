$("#btn-add-persona").click(function() {
  alert( "Handler for .click() called." );
});

$('#formAddPersona').submit(function(event) {
	
/*
	if($('input[type=file]').val() === ""){
		$("#no-file").show();  
		event.preventDefault();
		return;
	}*/
	
    var formElement = this;
    var formData = new FormData(formElement);
    $("#formCertificado").hide();
	$("#certificado-loading").show();
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            console.log(response);
            console.log(response.nombre);
            $('#tabla-personas tbody:last-child').append('<tr> <td>'+response.id+'</td> <td>'+response.nombre+'</td> <td>'+response.apellidos+'</td> <td>'+response.telefono+'</td> </tr>');
            // process response
            /*
            $("#certificado-loading").hide();
            $('#certificado-div').css("display","block");
            $('#checksum').val(response.hash);*/
            
        },
        error: function (error) {
            console.log(error);
            /*
            $("#certificado-loading").hide();
            if(error.status == 409){
            	console.log("409");
            	$("#certificado-duplicado").show();
            }
            else{
            	$("#certificado-error").show();
            }*/
            
            // process error
        }
    });
    event.preventDefault();
});