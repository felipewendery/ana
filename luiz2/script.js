const imagens = [
    "imagens2/casal1.jpg",
    "imagens2/casal2.jpg",
    "imagens2/casal3.jpg",
    "imagens2/casal4.jpg",
    "imagens2/casal5.jpg",
    "imagens2/casal6.jpg",
    "imagens2/casal7.jpg",
    "imagens2/casal8.jpg"
];

let index = 0;
const imagem = document.querySelector(".imagem");

// Configura a primeira imagem corretamente
imagem.style.backgroundImage = `url(${imagens[index]})`;
imagem.style.backgroundSize = "cover"; 
imagem.style.backgroundPosition = "center";
imagem.style.transition = "opacity 1s"; // Garante a transição suave

function trocarImagem() {
    imagem.style.opacity = "0"; // Some a imagem

    setTimeout(() => {
        index = (index + 1) % imagens.length; // Avança no array sem repetir
        imagem.style.backgroundImage = `url(${imagens[index]})`;
        imagem.style.opacity = "1"; // Aparece suavemente
    }, 1000); // Tempo da transição
}

// Troca a imagem a cada 3 segundos
setInterval(trocarImagem, 3000);
