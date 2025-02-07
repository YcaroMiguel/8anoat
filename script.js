function postarMensagem() {
    let input = document.getElementById('mensagem');
    let mensagens = document.getElementById('mensagens');

    if (input.value.trim() !== '') {
        let novaMensagem = document.createElement('p');
        novaMensagem.textContent = input.value;
        mensagens.appendChild(novaMensagem);
        input.value = '';
    }
}
