window.onload = function () {
    boton_inicio.addEventListener('click', validar_formulario);
}

var boton_inicio = document.getElementById("boton_Enviar");

// function cambiarColor() {
//     var body = document.getElementById("el_body");
//     body.style.backgroundColor = "red";
// }

function validar_formulario() {
    var inputNombre = document.getElementById('inputNombre');
    var ayudaNombre = document.getElementById('alerta_nombre');

    if (inputNombre.value == "") {
        inputNombre.classList.add('is-invalid');
        ayudaNombre.style.display = "block";
    }

}