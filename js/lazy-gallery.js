const galleryImgRef = document.querySelectorAll('img');

const lasyLoad = targets => {
  const options = {
    rootMargin: '100px',
    threshold: 0.8,
  };

  const onEntry = (entries, observer) => {
    entries.forEach(({ isIntersecting, target }) => {
      //   // animation variant 1
      if (isIntersecting) {
        target.src = target.dataset.src;
        target.classList.add('appear');
        observer.unobserve(target);
      }

      //   // animation variant 2
      // target.src = target.dataset.src;
      // target.classList.toggle('appear', isIntersecting);
    });
  };

  // Спостерігач
  const imgObserver = new IntersectionObserver(onEntry, options);

  targets.forEach(target => imgObserver.observe(target));
};

lasyLoad(galleryImgRef);
