
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var errorMessage = document.getElementById('errorMessage');

    // Validación simple (puedes personalizar según tus necesidades)
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        errorMessage.textContent = 'Todos los campos son obligatorios';
        return;
    }

    // Lógica para enviar el formulario (puedes agregar AJAX o cualquier otro método según tus necesidades)
    alert('Formulario enviado con éxito!');
}
