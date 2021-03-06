function initCarousel() {
  // ваш код...
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const slides = document.querySelector('.carousel__inner');
  const slide = document.querySelector('.carousel__slide');
  //const slidesCount = document.querySelectorAll('.carousel__inner').length;
  let offset = slides.offsetWidth;
  let activeSlide = 1;
  arrowLeft.style.display = 'none';
  let position = 0;

  function changeSlideRight() {
    position = position - offset;
    slides.style.transform = `translateX(${position}px)`;
    arrowLeft.style.display = '';
    activeSlide++;
    if (activeSlide >= 4) {
      activeSlide = 4;
      arrowRight.style.display = 'none';
    }
  }

  function changeSlideLeft() {
    position = position + offset;
    slides.style.transform = `translateX(${position}px)`;
    arrowRight.style.display = '';
    activeSlide--;
    if (activeSlide <= 0) {
      activeSlide = 0;
      arrowLeft.style.display = 'none';
    }
  }

  arrowRight.addEventListener('click', () => {
    changeSlideRight();
  });

  arrowLeft.addEventListener('click', () => {
    changeSlideLeft();
  } )
}
