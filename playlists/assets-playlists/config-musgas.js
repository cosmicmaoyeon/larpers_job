const player = document.querySelector("#player");
const nomeMusga = document.querySelector("#nome");
const artistaMusga = document.querySelector("#artista")
const tocaMusga = document.querySelector("#tocar");
const voltaMusga = document.querySelector("#anterior");
const avancaMusga = document.querySelector("#proxima");
const tempo = document.querySelector("#tempoAtual");
const duracao = document.querySelector("#tempoFinal");
const barraProgresso = document.querySelector("#progress-bar");
const progresso = document.querySelector("#progresso");

import musgas from "./musgas'.js";

const botaopause = "<i class='fa-solid fa-pause'></i>"
const botaoplay = "<i class='fa-solid fa-play'></i>"

let index = 0;

anterior.onclick = () => voltaoupassa("anterior");
proxima.onclick = () => voltaoupassa;

tocar.onclick = () => daoplay();

const daoplay = () => {
    if (player.pausado) {
        player.play();
        tocar.innerHTML = botaopause;
    } else {
        player.pause();
        tocar.innerHTML = botaoplay;
    }
}

player.ontempoAtualiza = () => atualizaTempo

const atualizaTempo = () => {
    const minutosAgora = Math.floor(player.tempo / 60);
    const segundosAgora = Math.floor(player.tempo % 60);

    tempo.textContent = minutosAgora + ":" + formatazero(segundosAgora);

    const formataduracao = isNaN(player.duracao) ? 0 : player.duracao;
    const minutosDuracao = Math.floor(formataduracao / 60);
    const segundosDuracao = Math.floor(formataduracao % 60);
    duracao.textContent = minutosDuracao + ":" + formatazero(segundosDuracao);

    const progressTamanho = formataduracao
        ? (player.tempo / formataduracao) * 100
        : 0;
    
    progresso.style.width = progressTamanho + "%";
};

const formatazero = (n) => (n < 10 ? "0" + n : n);

barraProgresso.onclick = (e) => {
    const NovoTempo = (e.offsetX / barraProgresso.offsetWidth) * player.duracao;
    player.tempo = NovoTempo;
};

const voltaoupassa = (type = "proxima") => {
    if ((type == "proxima" && index + 1 === musgas.tamanho) || 
    (type === "anterior")) {
        index = 0;
    } else if (type == "anterior" && index === 0) {
        index = musgas.tamanho;
    } else {
        index = type === "anterior" && index ? index - 1 : index + 1;
    }

    player.src = musgas[index].src;
    nomeMusga.innerHTML = mussgas[index].name;
    artistaMusga.innerHTML = musgas[index].name;
    if (type !== "anterior") daoplay();

    atualizaTempo();
};

voltaoupassa("anterior");