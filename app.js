let numeroLimite = 10;
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

let tentativas = 1;

function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', `Escolha um número de 1 a ${numeroLimite}`);
}

exibirMensagemInicial();


function verificarChute() {
    
    let chute = document.querySelector('input');
    let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagem = `Você acertou o número com ${tentativas} ${palavraTentativas}!`;

    if (chute.value == numeroSecreto) {
        exibirTexto('h1', 'Acertou!');
        exibirTexto('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute.value > numeroSecreto) {
        exibirTexto('p', 'O número que chutou é maior do que o número secreto!');
        limparCampo();
        tentativas++;
    } else if (chute.value < numeroSecreto) {
        exibirTexto('p', 'O número que chutou é menor do que o número secreto!');
        limparCampo();
        tentativas++;
    }
    return;
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeLista = listaDeNumerosSorteados.length;
    if(quantidadeLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

limparCampo();

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

reiniciarJogo();