function initCarousel() {
  const inner = document.querySelector('.carousel__inner');
  const slides = inner.children;

  const prev = document.querySelector('.carousel__arrow_left');
  const next = document.querySelector('.carousel__arrow_right');

  let currentIndex = 0;
  const slideWidth = inner.offsetWidth;

  prev.style.display = 'none';

  next.addEventListener('click', () => {
    currentIndex++;

    inner.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

    prev.style.display = '';

    if (currentIndex === slides.length - 1) {
      next.style.display = 'none';
    }
  });

  prev.addEventListener('click', () => {
    currentIndex--;

    inner.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

    next.style.display = '';

    if (currentIndex === 0) {
      prev.style.display = 'none';
    }
  });
}

