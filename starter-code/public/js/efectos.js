;function iniciarSlider(){
	  $(".bxslider").bxSlider({
	  	auto: true,
	  	captions: true,
	  	controls: false,
	  	pause: 4000,
	  	randomStart: true,
	  	speed: 800
	});
}
function efectos(){
	$("#boton").on("click",function(enlace){
			enlace.preventDefault();
			$("#mostrar").slideToggle("swing");
		});
}
;function sliderSucursales(){
	  $(".bxslider").bxSlider({
	  	auto: true,
	  	captions: false,
	  	pager:false,
	  	controls: false,
	  	pause: 4000,
	  	randomStart: true,
	  	speed: 800
	});
}
//funciones de contacto.html
function enviarDatos()
{
var opcionesDeEnvio = {
beforeSubmit:antesDeEnviar,
success:cuandoEsEnviado
};
$('#contacto-datos').ajaxForm(opcionesDeEnvio);
}
function antesDeEnviar()
{
$("#precarga").fadeIn("slow");
var nombre,apellido, email,telefono, asunto,clinica, comentarios, mensaje;
nombre = $("#nombre").val();
apellido = $("#apellido").val();
email = $("#email").val();
telefono = $("#telefono").val();
asunto = $("#asunto").val();
clinica = $("#clinica").val();
comentarios = $("#mensaje").val();
mensaje = "La información de tu mensaje es la siguiente:";
mensaje += "\n\nNombre: "+nombre;
mensaje += "\n\nApellido: "+apellido;
mensaje += "\n\nEmail: "+email;
mensaje += "\n\nTeléfono: "+telefono;
mensaje += "\n\nAsunto: "+asunto;
mensaje += "\n\nClínica: "+clinica;
mensaje += "\n\nMensaje: "+comentarios;
alert(mensaje);
}
function cuandoEsEnviado(respuestaDePHP)
{
alert(respuestaDePHP);
$("#precarga").fadeOut("slow");
$("#contacto-datos")[0].reset();
$("#respuesta").addClass("mensaje").fadeIn("slow").append(respuestaDePHP);
} 