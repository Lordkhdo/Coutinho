let scrollMouse = 0;
let header = document.getElementById("head");
let ImageLogo = document.getElementById("ImageLogo");
let nameImageLogo = document.getElementById("namelogo");

const updateScroll = (event) => {
    // Atualiza o valor acumulado do scroll
    scrollMouse += event.deltaY;

    // Verifica se atingiu o topo da página
    scrollMouse = Math.max(scrollMouse, 0);

    // Verifica se atingiu a base da página
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollMouse = Math.min(scrollMouse, maxScroll);

    updateHeader();
};

const updateHeader = () => {
    if (scrollMouse >= 400) {
        header.classList.add("header");
        ImageLogo.src = 'images/fotologo3 1.png';
        nameImageLogo.textContent = 'COUTO SOLAR';

        if (scrollMouse >= 600) {
            header.classList.add("muded");
            ImageLogo.src = 'images/fotologo3.jpeg';
            nameImageLogo.textContent = '';
        } else {
            header.classList.remove("muded");
        }
    } else {
        header.classList.remove("header");
    }
};

window.addEventListener('wheel', updateScroll);