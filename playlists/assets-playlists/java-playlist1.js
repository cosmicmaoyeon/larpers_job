const musgas = [
    {
        letra: "Someone said they left together\nI ran out the door to get her\nShe was holding hands with Trevor\nNot the greatest feeling ever\nSaid: Pull yourself together\nYou should try your luck with Heather\nThen I heard they slept together\nOh, the less I know, the better\nThe less I know, the better\nOh, my love\nCan't you see yourself by my side?\nNo surprise\nWhen you're on his shoulder like every night\nOh, my love\nCan't you see that you're on my mind?\nDon't suppose we could convince your lover to change his mind\nSo goodbye\nShe said: It's not now or never\nWait ten years, we'll be together\nI said: Better late than never\nJust don't make me wait forever\nDon't make me wait forever\nDon't make me wait forever\nOh, my love\nCan't you see yourself by my side?\nI don't suppose you could convince your lover to change his mind\nI was doing fine without you\nTill I saw your face, now I can't erase\nGiving in to all his bullshit\nIs this what you want? Is this who you are?\nI was doing fine without you\nTill I saw your eyes turn away from mine\nOh, sweet darling, where he wants you\nSaid: Come on, Superman, say your stupid line\nSaid: Come on, Superman, say your stupid line\nSaid: Come on, Superman, say your stupid line\n",
        nome: "the Less I Know The Better",
        artista: "Tame Impala",
        capa: "https://akamai.sscdn.co/uploadfile/letras/albuns/e/8/f/1/435571730471495.jpg",
    },
       {
        letra: "madruga said they left together\nI ran out the door to get her\nShe was holding hands with Trevor\nNot the greatest feeling ever\nSaid: Pull yourself together\nYou should try your luck with Heather\nThen I heard they slept together\nOh, the less I know, the better\nThe less I know, the better\nOh, my love\nCan't you see yourself by my side?\nNo surprise\nWhen you're on his shoulder like every night\nOh, my love\nCan't you see that you're on my mind?\nDon't suppose we could convince your lover to change his mind\nSo goodbye\nShe said: It's not now or never\nWait ten years, we'll be together\nI said: Better late than never\nJust don't make me wait forever\nDon't make me wait forever\nDon't make me wait forever\nOh, my love\nCan't you see yourself by my side?\nI don't suppose you could convince your lover to change his mind\nI was doing fine without you\nTill I saw your face, now I can't erase\nGiving in to all his bullshit\nIs this what you want? Is this who you are?\nI was doing fine without you\nTill I saw your eyes turn away from mine\nOh, sweet darling, where he wants you\nSaid: Come on, Superman, say your stupid line\nSaid: Come on, Superman, say your stupid line\nSaid: Come on, Superman, say your stupid line\n",
        nome: "Zombie",
        artista: "The Cranberries",
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIijF5gy5vZXgJUdnFKpx3Ysuj1yWv7QD78Q&s",
    },

];

console.log(musgas[0].letra);
console.log(musgas[0].nome);
console.log(musgas[0].artista);
console.log(musgas[0].capas);

function mostrar(index) {
    
    const musiguinha = musgas[index];
    const titulo = document.getElementById('letra');
    titulo.textContent = musgas[index].letra;
    console.log(titulo);
    const letters = document.getElementById('nome');
    letters.textContent = musgas[index].nome;
    console.log(letters);
    const artist = document.getElementById('artista');
    artist.textContent = musgas[index].artista;
    console.log(artist);
    const capas = document.getElementById('capa');
    capas.src = musgas[index].capa;
    console.log(capas);

    /*
        document.getElementById("letra").innerText = "direita".letra;
    
        document.getElementById("nome").innerText = "painel-controle".nome;
        document.getElementById("artista").innerText = "painel-controle".artista;
        document.getElementById("capa").src = "capa-album".capa;
        */
}

mostrar(0)