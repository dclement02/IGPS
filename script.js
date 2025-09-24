document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btnSaludo');
    const mensaje = document.getElementById('mensaje');

    btn.addEventListener('click', function() {
        mensaje.textContent = '¡Hola! Has hecho clic en el botón.';
    });
});
