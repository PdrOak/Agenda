var nome = document.querySelector("#nome");
var data = document.querySelector("#data");
var hora = document.querySelector("#hora");

var botaoMarcaHorario = document.querySelector("#botaoMarcaHorario");
botaoMarcaHorario.addEventListener("click", function(event) {
	event.preventDefault();

	var form = document.querySelector("#marcandoHorario");

	var nome = form.nome.value;
	var data = form.data.value;
	var hora = form.hora.value;

	console.log(nome);
	console.log(data);
	console.log(hora);
})

