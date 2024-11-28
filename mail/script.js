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
            alert("Email enviado com sucesso!");
        }, function(error) {
            alert("Erro ao enviar o email: " + error);
        });
}