const track = document.querySelector('.js-experts__slider');
const slides = document.querySelectorAll('.js-experts__slider-container');
let slideWidth = slides[0].clientWidth;
let currentIndex = 0;
let autoScrollInterval;

function getVisibleSlidesCount() {
  return window.innerWidth <= 374 ? 1 : 3;
}


function updateSlideWidth() {
  slideWidth = slides[0].clientWidth;
}


function updateSliderPosition() {
  track.style.transition = 'transform 0.3s ease-in-out';
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    moveSlide(1);
  }, 3000);
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}


function moveSlide(step) {
  stopAutoScroll();
  const visibleSlides = getVisibleSlidesCount();
  const maxIndex = slides.length - visibleSlides;

  currentIndex += step;

  if (currentIndex > maxIndex) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = maxIndex;
  }

  updateSliderPosition();
  startAutoScroll();
}

document.querySelector('.js-experts__slider-btn.left').addEventListener('click', () => {
  moveSlide(-1);
});

document.querySelector('.js-experts__slider-btn.right').addEventListener('click', () => {
  moveSlide(1);
});


window.addEventListener('resize', () => {
  updateSlideWidth();
  updateSliderPosition();
});

updateSlideWidth();
updateSliderPosition();
startAutoScroll();
