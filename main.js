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
  }, 19000); // 19000 milissegundos = 19 segundos
}

autoSlide();

let imagem1 = document.querySelector('#img1')
let imagem2 = document.querySelector('#img2')
let imagem3 = document.querySelector('#img3')
let imagem4 = document.querySelector('#img4')


// troca de imagem para a responsividade
console.log(window.innerWidth);


if (window.innerWidth <= 1199) {
  console.log('object');
  document.getElementById('img1').style.display = 'none';
  document.getElementById('img2').style.display = 'none';
  document.getElementById('img3').style.display = 'none';
  document.getElementById('img4').style.display = 'none';
  document.getElementById('img5').style.display = 'none';
  document.getElementById('img6').style.display = 'none';



  document.getElementById('imge1').style.display = 'block';
  document.getElementById('imge2').style.display = 'block';
  document.getElementById('imge3').style.display = 'block';
  document.getElementById('imge4').style.display = 'block';
  document.getElementById('imge5').style.display = 'block';
  document.getElementById('imge6').style.display = 'block';


} else {

  console.log('object22');

  document.getElementById('img1').style.display = 'block';
  document.getElementById('img2').style.display = 'block';
  document.getElementById('img3').style.display = 'block';
  document.getElementById('img4').style.display = 'block';
  document.getElementById('img5').style.display = 'block';
  document.getElementById('img6').style.display = 'block';



  document.getElementById('imge1').style.display = 'none';
  document.getElementById('imge2').style.display = 'none';
  document.getElementById('imge3').style.display = 'none';
  document.getElementById('imge4').style.display = 'none';
  document.getElementById('imge5').style.display = 'none';
  document.getElementById('imge6').style.display = 'none';



}