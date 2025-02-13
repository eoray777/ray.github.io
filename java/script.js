function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const numero = document.getElementById('numero').value;
    const mensagem = document.getElementById('mensagem').value;
    window.location.href = `dados.html?name=${encodeURIComponent(name)}&cpf=${encodeURIComponent(email)}&numero=${encodeURIComponent(numero)}&mensagem=${encodeURIComponent(mensagem)}`;
}
