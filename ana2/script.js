const imagens = [
    "imagens2/casal1.jpg",
    "imagens2/casal2.jpg",
    "imagens2/casal3.jpg",
    "imagens2/casal4.jpg",
    "imagens2/casal5.jpg"
];

let index = 0;
const imagem = document.querySelector(".imagem");

function trocarImagem() {
    imagem.style.opacity = "0"; // Começa a desaparecer
    setTimeout(() => {
        index = (index + 1) % imagens.length;
        imagem.style.backgroundImage = `url(${imagens[index]})`;
        imagem.style.opacity = "1"; // A imagem aparece novamente
    }, 1000); // Tempo igual ao da transição
}

setInterval(trocarImagem, 3000);
imagem.style.backgroundImage = `url(${imagens[0]})`; // Inicializa com a primeira imagem
