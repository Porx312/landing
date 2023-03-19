const carousel = document.querySelector('.carousel');
const carouselContainer = carousel.querySelector('.carousel-container');
const prevBtn = carousel.querySelector('.prev-btn');
const nextBtn = carousel.querySelector('.next-btn');
const carouselImages = carouselContainer.querySelectorAll('.contenedor-cards');

let currentIndex = 0;
const carouselLength = carouselImages.length;
const carouselWidth = carousel.offsetWidth;

carouselContainer.style.width = carouselWidth * carouselLength + 'px';

prevBtn.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = carouselLength - 1;
  } else {
    currentIndex--;
  }
  moveCarousel();
});

nextBtn.addEventListener('click', () => {
  if (currentIndex === carouselLength - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  moveCarousel();
});

function moveCarousel() {
  carouselContainer.style.transform = `translateX(${-currentIndex * carouselWidth}px)`;
}