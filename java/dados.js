window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const cpf = urlParams.get('email');
    const numero = urlParams.get('numero');
    const endereço = urlParams.get('mensagem');
    document.getElementById('name').textContent = name;
    document.getElementById('email').textContent = cpf;
    document.getElementById('numero').textContent = numero;
    document.getElementById('mensagem').textContent = endereço;
}