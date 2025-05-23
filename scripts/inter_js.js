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
    var inputEmail = document.getElementById('inputEmail');
    var inputRut = document.getElementById("inputRut");

    if (inputNombre.value == "") {
        inputNombre.classList.add('is-invalid');
    }
    if (inputEmail.value == "") {
        inputEmail.classList.add('is-invalid');
    }
    if (inputRut.value == "") {
        inputRut.classList.add('is-invalid');
    }

}