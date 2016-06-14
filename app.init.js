app.nuevo = function ()
{

	var $formulario = $("<form>").attr(
			{
				id: "frm-nuevo",
				name: "frm-nuevo",
				class:"form-horizontal"
			}
		);

	$formulario.append(
		$("<div>")
			.attr( { class:"form-group" } )
			.append(
				$("<label>").attr({for:"txtPaterno", class:"col-sm-2 control-label"}).text("Paterno"),
				$("<div>").attr({class:"col-sm-10"}).append(
					$("<input>").attr({type:"text", class:"form-control", id:"txtPaterno", placeholder:"Apellido Paterno", name:"txtPaterno"})
				)
			),
		$("<div>")
			.attr( { class:"form-group" } )
			.append(
				$("<label>").attr({for:"txtMaterno", class:"col-sm-2 control-label"}).text("Materno"),
				$("<div>").attr({class:"col-sm-10"}).append(
					$("<input>").attr({type:"text", class:"form-control", id:"txtMaterno", placeholder:"Apellido Materno", name:"txtMaterno"})
				)
			),
		$("<div>")
			.attr( { class:"form-group" } )
			.append(
				$("<label>").attr({for:"txtNombres", class:"col-sm-2 control-label"}).text("Nombres"),
				$("<div>").attr({class:"col-sm-10"}).append(
					$("<input>").attr({type:"text", class:"form-control", id:"txtNombres", placeholder:"Nombres", name:"txtNombres"})
				)
			),
		$("<div>")
			.attr( { class:"form-group" } )
			.append(
				$("<div>").attr({class:"col-sm-offset-2 col-sm-10"}).append(
					$("<button>").attr({class:"btn btn-primary", id:"btnGuardar", name:"btnGuardar"}).text("Guardar")
				)
			)
	);

	$("#div-contenido2").append(
		$("<h1>").text("Nueva Persona"),
		$formulario
	);


	$("#btnGuardar").on("click", function (e) {
		$.ajax({
			type: "post",
			url: "personas.nuevo.guarda.php",
			data: {
						txtPaterno: $("#txtPaterno").val(),
						txtMaterno: $("#txtMaterno").val(),
						txtNombres: $("#txtNombres").val()
				},
			dataType: 'json',
			success: function (a) {
				if (a.success) {
					$("#div-contenido2").html(
						$("<div>").attr({class:"alert alert-success"}).text("Nueva Persona Guardado Correctamente")
					);
				} else {
					$("#div-contenido2").html(
						$("<div>").attr({class:"alert alert-danger"}).text("No fue posible guardar informacion")
					);
				}
			}
		});
		e.preventDefault();
	});

}
