// array do passo 1
let amigos = [];

// adicionar amigos
function adicionarAmigo () {
    let campo = document.getElementById("amigo");
    let nome = campo.value.trim();

    // garantia de não estar vazio
    if (nome === "") {
    alert("Insira um nome");
    return;
    }

    // adicionando array
    amigos.push(nome);

    // limpando campo
    campo.value = "";

    // atualizando lista
    atualizarLista();
}

// selecionando lista no HTML
function atualizarLista () {
let lista = document.getElementById("listaAmigos");
 
    // limpa antes de adicionar
    lista.innerHTML = "";

    // percorre array e adiciona cada nome
    for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    // valida se há amigos na lista
    if (amigos.length === 0) {
        alert("Não há amigos para sortear.");
        return;
    }

    // gerando índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // nome sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}