// slide.js
function initializeSlider() {
    let cont = 1;

    // Inicializa o estado do rádio
    document.getElementById('radio1').checked = true;

    // Função para mudar a imagem
    function proximaImg() {
        cont++;
        if (cont > 2) {
            cont = 1;
        }
        document.getElementById('radio' + cont).checked = true;
    }

    // Configura o intervalo
    setInterval(proximaImg, 5000);
}

// Exporta a função para inicializar o slider
export default initializeSlider;
