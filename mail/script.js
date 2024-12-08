function sendMail() {
    // Prevent the default form submission (which causes the redirect)
    event.preventDefault();
    
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_c3x6rvr", "template_t0md69s", parms)
        .then(function(response) {
            // Clear the form fields after the email is sent
            document.getElementById("name").value = '';
            document.getElementById("email").value = '';
            document.getElementById("message").value = '';

            alert("Email enviado com sucesso!!");

            
        }, function(error) {
            alert("Erro ao enviar o email: " + error);
        });
}