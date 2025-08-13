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

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Quantidade de amigos insuficiente para sortear. Digite dois ou mais nomes.');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSecreto = amigos[indiceAleatorio];      
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSecreto}`;
    }
}

function limparCampo() {
    let amigo = document.querySelector('input');
    amigo.value = '';
}
