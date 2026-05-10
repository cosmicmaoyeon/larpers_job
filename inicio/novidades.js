window.onload = function(){
const musicas = [
{
    nome: "Baby",
    descricao: "Pop do momento, lançado pelo artista novato Justin Bieber. Está no topo de todas as paradas musicais.",
    imagem: "https://i.scdn.co/image/ab67616d0000b273629dc9e2e3bc20bbd7d92e4a",
    artista: "Justin Bieber",
    fotoArtista: "https://pbs.twimg.com/media/G1qiuGtWcAAMBYs.jpg",
    tags: ["Pop", "R&B", "Teen Pop"],
    descricaoArtista: "Artista canadense que está se tornando um fenômeno global. Apesar de ter estreado recentemente, já conquistou uma base de fãs enorme e é conhecido por suas músicas complexas e instrospectivas."
},

{
    nome: "Waiting To Fly",
    descricao: "Hip Hop emocionante que representa um grande marco na carreira do artista YUNG LIXO e subiu rapidamente nas paradas por conta de seu instrumental cativante e letras intensas.",
    imagem: "https://i.scdn.co/image/ab67616d0000b27339021beae61ff9bfc5135b4b",
    artista: "YUNG LIXO",
    fotoArtista: "https://i.scdn.co/image/ab6761610000e5eb36b5bda390573b5fec4231c5",
    tags: ["Hip Hop", "Rap"],
    descricaoArtista: "Victor Schiavon é um rapper, youtuber e produtor musical brasileiro. Também conhecido por seu codenomes YUNG LIXO e GEMAPLYS."

},

{
    nome: "Sign Of The Times",
    descricao: "Música tocante com letra emocionante que narra a história de uma mãe que morre durante o parto, usando seus momentos finais para incentivar seu filho a continuar forte.",
    imagem: "https://i.scdn.co/image/ab67616d0000b273cf4c6008624aaa58c5ea049a",
    artista: "Harry Styles",
    fotoArtista: "https://i.scdn.co/image/ab6761610000e5ebe309f8c3056a59f20d0968ca",
    tags: ["Pop Rock", "Soft Rock", "Rock"],
    descricaoArtista: "Ex-membro da banda One Direction, Harry Styles é um artista solo que tem conquistado o mundo com seu estilo único e músicas cativantes. Ele é conhecido por sua voz suave e letras profundas, e tem uma base de fãs leal que o apoia em cada lançamento."
},

{
    nome: "First Love / Late Spring",
    descricao: "Rock suave e emocionante sobre a sensação de medo causada pela primeira paixão.",
    imagem: "https://i.scdn.co/image/ab67616d0000b27350f8ace2690355fa20e58227",
    artista: "Mitski",
    fotoArtista: "https://i.scdn.co/image/ab6761610000e5eb16eec86fff40fa5ef0b57cef",
    tags: ["Indie Rock", "Alternative Rock"],
    descricaoArtista: "Mitski é uma cantora e compositora japonesa-americana conhecida por suas letras introspectivas e emotivas. Sua música combina elementos de indie rock, folk e pop, criando um som único que ressoa com muitos ouvintes."

},
{
    nome: "Good Thing",
    descricao: "K-pop chiclete que conquistou não só o público coreano como o mundo inteiro.",
    imagem: "https://i.scdn.co/image/ab67616d0000b2739f745ef389e3ab7c3b54c6b3",
    artista: "i-dle",
    fotoArtista: "https://i.scdn.co/image/ab6761610000e5eb16051e1b5d6dd8a45b8633e4",
    tags: ["K-pop", "Electropop"],
    descricaoArtista: "i-dle é um grupo feminino de K-pop formado pela Cube Entertainment. Possuem uma grande jornada na carreira da música e se reinventam a cada novo lançamento."
}

];

let atual = 0;
const capa = document.getElementById("capa");
const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");
const tags = document.getElementById("tags");
const fotoArtista = document.getElementById("foto-artista");
const nomeArtista = document.getElementById("nome-artista");
const descricaoArtista = document.getElementById("descricao-artista");

function mostrarMusica(){
    let musica = musicas[atual];
    capa.src = musica.imagem;
    nome.innerText = musica.nome;
    descricao.innerText = musica.descricao;
    fotoArtista.src = musica.fotoArtista;
    nomeArtista.innerText = musica.artista;
    descricaoArtista.innerText = musica.descricaoArtista;
    tags.innerHTML = "";
    musica.tags.forEach(tag => {
        tags.innerHTML += `<span>${tag}</span>`;
    });
}
window.proxima = function(){

    atual++;
    if(atual >= musicas.length){

        atual = 0;
    }

    mostrarMusica();
}
window.anterior = function(){
    atual--;
    if(atual < 0){

        atual = musicas.length - 1;
    }
    mostrarMusica();
}

mostrarMusica();

}


const listaMusicas = [
{
    nome: "Beauty and a Beat",
    artista: "Justin Bieber",
    descricao: "Pop lançado em 24 de outubro de 2012. Composto por: Max Martin, Zedd, Savan Kotecha e Nicki Minaj",
    imagem: "https://i.scdn.co/image/ab67616d0000b273f1d02a6cec967f8b6b78f76e"
},

{
    nome: "Billie Jean",
    artista: "Michael Jackson",
    descricao: "Pop, misturando elementos de R&B, Synth-funk e pós-disco lançado em 30 de novembro de 1982. Composto por: Michael Jackson e Jerry Hey",
    imagem: "https://i.scdn.co/image/ab67616d0000b27332a7d87248d1b75463483df5"
},

{
    nome: "SWIN",
    artista: "BTS",
    descricao: "K-pop lançado em 20 de março de 2026. Composto por: James Essien, Sean Foreman, Tyler Spry, Jamison Baken, Ryan Tedder, RM, Kirsten Spencer, Derrick Milano e Pdogg.",
    imagem: "https://i.scdn.co/image/ab67616d00001e02dfa17fad7f190c901603270e"
},

{
    nome: "Babydoll",
    artista: "Dominic Fike",
    descricao: "Rock Indie lançado em 16 de outubro de 2018. Composto por: Dominic Fike",
    imagem: "https://i.scdn.co/image/ab67616d00001e024a42166d927b3acce345c5c0"
},

{
    nome: "Beat It",
    artista: "Michael Jackson",
    descricao: "Fusão de Pop e Rock lançado em 29 de novembro de 1982. Composto por: Michael Jackson e Quincy Jones",
    imagem: "https://i.scdn.co/image/ab67616d0000b27332a7d87248d1b75463483df5"
},

{
    nome: "drop dead",
    artista: "Olivia Rodrigo",
    descricao: "Considerado um Pop rock, Synth-pop e Soft rock lançado em 17 de abril de 2026. Composto por: Olivia Rodrigo, Amy Allen e Dan Nigro.",
    imagem: "https://i.scdn.co/image/ab67616d0000b273c25b53f0a34aa1bb4f77cb3e"
},

{
    nome: "Don't Stop 'Til You Get Enough",
    artista: "Michael Jackson",
    descricao: "Disco e Funk lançado em 10 de julho de 1979. Composto por: Michael Jackson e Greg Phillinganes.",
    imagem: "https://i.scdn.co/image/ab67616d0000b2732b74bf21c7e4f56758610949"
},

{
    nome: "Dracula - JENNIE Remix",
    artista: "Tame Impala",
    descricao: "Remix da música 'Dracula' Nu-Disco e Dance-Pop do artista Tame Impala, lançado em 6 de feveireiro de 2026. Composto por: JENNIE, Kevin Parker, Sarah Aarons e Carly Gibert.",
    imagem: "https://i.scdn.co/image/ab67616d0000b273c7c031ce9d06b131f8563676"
},

{
    nome: "back to friends",
    artista: "Sombr",
    descricao: "Rock alternativo lançado em 27 de dezembro de 2024. Composto por: sombr",
    imagem: "https://i.scdn.co/image/ab67616d0000b2737fd4049ad3b037358cf809ef"
},

{
    nome: "End of Beginning",
    artista: "Djo",
    descricao: "Indie-pop e Synth-pop lançado em 16 de setembro de 2022. Composto por: Djo e Adam Thein.",
    imagem: "https://i.scdn.co/image/ab67616d0000b273fddfffec51b4580acae727c1"
}

];
function mostrarInfo(index){

    const musga = listaMusicas[index];
    document.getElementById("mini-capa").src = musga.imagem;
    document.getElementById("mini-nome").innerText = musga.nome;
    document.getElementById("mini-artista").innerText = musga.artista;
    document.getElementById("mini-desc").innerText = musga.descricao;
}

mostrarInfo(0);