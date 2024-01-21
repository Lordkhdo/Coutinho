let scrollMouse = 0;
let header = document.getElementById("head")
let ImageLogo = document.getElementById("ImageLogo")
let nameImageLogo = document.getElementById("namelogo")

window.addEventListener('wheel', (event) => {
    // Atualiza o valor acumulado do scroll
    scrollMouse += event.deltaY;

    // Verifica se atingiu o topo da página
    if (scrollMouse < 0) {
        scrollMouse = 0;
    }

    // Verifica se atingiu a base da página (ajuste o valor conforme necessário)
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollMouse > maxScroll) {
        scrollMouse = maxScroll;
    }


    if (scrollMouse >= 400) {
        header.classList.add("header");
        ImageLogo.src =  'images/fotologo3 1.png'
        nameImageLogo.textContent = 'COUTO SOLAR';
        if (scrollMouse >= 600) {
            header.classList.add("muded");
            ImageLogo.src = 'images/fotologo3.jpeg'
            nameImageLogo.textContent = '';

        } else {
            header.classList.remove("muded");
        }
    } else {
        header.classList.remove("header");
    }

    // Exibe o valor atualizado no console
    console.log('Valor do scroll:', scrollMouse);



});