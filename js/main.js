const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);
let counter = 0;
let direction = 1;
let autoMoveInterval;

function startAutoMove() {
  autoMoveInterval = setInterval(() => {
    moveSlides(direction);
  }, 2000);
}

function stopAutoMove() {
  clearInterval(autoMoveInterval);
}

function moveSlides(dir) {
  counter += dir;

  if (counter >= totalSlides) {
    counter = 0;
  } else if (counter < 0) {
    counter = totalSlides - 1;
  }

  let offset = -counter * slideWidth;
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(${offset}px)`;
}

slider.addEventListener('mouseenter', stopAutoMove);
slider.addEventListener('mouseleave', startAutoMove);

startAutoMove(); 


function slowScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    
    const offsetTop = element.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });

    return false;
  }
}
