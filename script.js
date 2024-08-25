// Seleciona o modal e os elementos de imagem
var modal = document.getElementById("image-modal");
var modalImg = document.getElementById("modal-img");
var closeBtn = document.getElementsByClassName("close")[0];
var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");
var images = []; // Array para armazenar URLs das imagens
var currentIndex = 0; // Índice da imagem atual

// Função para mostrar o modal com a primeira imagem
function showModal(imageUrls) {
    images = imageUrls.split(','); // Divide a string em um array de URLs
    currentIndex = 0; // Inicia com a primeira imagem
    modal.style.display = "block";
    modalImg.src = images[currentIndex]; // Exibe a primeira imagem
}

// Adiciona evento de clique para cada link de produto
document.querySelectorAll('.product-link').forEach(function(link) {
    link.onclick = function(event) {
        event.preventDefault(); // Previne comportamento padrão do link
        showModal(this.getAttribute('data-images')); // Passa URLs das imagens para a função showModal
    }
});

// Fecha o modal quando o botão de fechar é clicado
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Função para mostrar a imagem anterior
prevBtn.onclick = function() {
    if (currentIndex > 0) {
        currentIndex--;
        modalImg.src = images[currentIndex];
    } else {
        currentIndex = images.length - 1; // Vai para a última imagem se estiver na primeira
        modalImg.src = images[currentIndex];
    }
}

// Função para mostrar a próxima imagem
nextBtn.onclick = function() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        modalImg.src = images[currentIndex];
    } else {
        currentIndex = 0; // Volta para a primeira imagem se estiver na última
        modalImg.src = images[currentIndex];
    }
}

// Fecha o modal quando o usuário clica fora da imagem
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
