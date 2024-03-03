var swiper = new Swiper(".mySwiper",{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides:true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate:15,
        strech:0,
        depth:300,
        modifier:1,
        slideShadow: true,
    },
    loop: true,

});
function validarFormulario() {
    // Obtener los valores de los campos del formulario
    var usuario = document.getElementById('Usuario').value;
    var correo = document.getElementById('Correo').value;
    var telefono = document.getElementById('Telefono').value;
    var contraseña = document.getElementById('contraseña').value;
    var edad = document.getElementById('Edad').value;
    var comentarios = document.getElementById('Comentarios').value;
    //variable para comprobar el telefono
    var regexTelefono = /^\d{10}$/;

    // Validar que todos los campos estén llenos
    if (!usuario || !correo || !telefono || !contraseña || !edad || !comentarios) {
        swal('Error', 'Por favor, llene todos los campos', 'error');
        return;
    }

    // Validar el formato del correo electrónico
    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
        swal('Error', 'Por favor, ingrese un correo electrónico válido', 'error');
        return;
    }
    // Verificar si el número de teléfono coincide con la expresión regular
    if (!regexTelefono.test(telefono)) {
        swal('Error', 'Por favor, ingrese un numero de telefono valido', 'error');
        return;
    }
    // Validar que la edad sea un número positivo
    if (edad < 13 || edad>105 || isNaN(edad)) {
        swal('Error', 'Por favor, ingrese una edad válida (13-105)', 'error');
        return;
    }

    // Si pasó todas las validaciones, mostrar un mensaje de éxito
    swal({
        title: 'Datos',
        text: '¡Datos enviados con éxito!',
        icon: 'success',
    }).then((result) => {
        if (result) {
            window.location.href = "index.html";
        }
    });
}