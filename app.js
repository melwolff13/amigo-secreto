let amigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    
    if (amigo == '') { 
        alert('Por favor, insira um nome.');
    } else { 
        amigos.push(amigo);
        let listaAmigos = document.getElementById('listaAmigos'); 
        listaAmigos.innerHTML = '';
        // executa a função atualizarLista para cada elemento de amigos
        amigos.forEach(amigo => atualizarLista(amigo));
    } limparCampo();
}

// adiciona o nome do amigo à lista visível do usuário
function atualizarLista(amigo) {
    let novoAmigo = document.createElement('li');
    novoAmigo.textContent = amigo;
    listaAmigos.appendChild(novoAmigo);
}

function limparCampo() {
    let amigo = document.querySelector('input');
    amigo.value = '';
}