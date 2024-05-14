document.addEventListener("DOMContentLoaded", function() {
    // Captura el formulario
    const form = document.getElementById('clienteForm');

    // Maneja el evento de envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que se envíe el formulario

        // Captura los valores del formulario
        const numeroCuenta = document.getElementById('numeroCuenta').value;
        const nombreCompleto = document.getElementById('nombreCompleto').value;
        const dui = document.getElementById('dui').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        const edad = document.getElementById('edad').value;
        const direccion = document.getElementById('direccion').value;
        const estadoFamiliar = document.getElementById('estadoFamiliar').value;

        // Crea un objeto cliente
        const nuevoCliente = {
            numeroCuenta: numeroCuenta,
            nombreCompleto: nombreCompleto,
            dui: dui,
            fechaNacimiento: fechaNacimiento,
            edad: edad,
            direccion: direccion,
            estadoFamiliar: estadoFamiliar
        };

        // Obtiene los clientes existentes del almacenamiento local (si los hay)
        let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

        // Agrega el nuevo cliente al array
        clientes.push(nuevoCliente);

        // Guarda los clientes actualizados en el almacenamiento local
        localStorage.setItem('clientes', JSON.stringify(clientes));

        // Muestra un mensaje de éxito
        alert('Usuario registrado exitosamente');

        // Opcional: redirige a la página de "Ver clientes"
        window.location.href = 'ListaClientes.html';
    });
});
