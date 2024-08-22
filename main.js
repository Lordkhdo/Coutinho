let scrollMouse = 0;
let header = document.getElementById("head");
let ImageLogo = document.getElementById("ImageLogo");
let nameImageLogo = document.getElementById("namelogo");
let butonHeader = document.querySelector('.clicked');
const evento = {
  deltaY:700,
}

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
    if (scrollMouse >= 500) {
        header.classList.add("header");
        ImageLogo.src = 'images/fotologo3_1.png';
        nameImageLogo.textContent = 'COUTO SOLAR';

        if (scrollMouse >= 700) {
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
butonHeader.addEventListener('click',()=>{updateScroll(evento)})

        // slider-----------------------

const carouselSlide = document.querySelector('.carousel-slide');
const slideItems = document.querySelectorAll('.slide-item');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


let counter = 0;
const size = slideItems[0].clientWidth;

function nextSlide() {
  if (counter >= slideItems.length - 1) {
    counter = 0; // Volta para o início
  } else {
    counter++;
  }
  moveSlide();
}

function prevSlide() {
  if (counter <= 0) {
    counter = slideItems.length - 1; // Vai para o final
  } else {
    counter--;
  }
  moveSlide();
}

function moveSlide() {
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Função para mover o slide automaticamente a cada 5 segundos
function autoSlide() {
  setInterval(() => {
    nextSlide();
  }, 10000); // 19000 milissegundos = 19 segundos
}

autoSlide();

let imagem1 = document.querySelector('#img1')
let imagem2 = document.querySelector('#img2')
let imagem3 = document.querySelector('#img3')
let imagem4 = document.querySelector('#img4')


// troca de imagem para a responsividade


if (window.innerWidth <= 1199) {
  const imgs = [
    'img1', 'img2', 'img3', 'img4', 'img5', 'img6'
  ].map(id => document.getElementById(id));
  imgs.forEach(img => { img.style.display = 'none'; });

  const imges = [
    'imge1', 'imge2', 'imge3', 'imge4', 'imge5', 'imge6'
  ].map(id => document.getElementById(id));
  imges.forEach(img => { img.style.display = 'block'; });

} else {
  ;['img1', 'img2', 'img3', 'img4', 'img5', 'img6'].forEach(id => document.getElementById(id).style.display = 'block');
  ;['imge1', 'imge2', 'imge3', 'imge4', 'imge5', 'imge6'].forEach(id => document.getElementById(id).style.display = 'none');
}