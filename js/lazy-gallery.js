const galleryImgRef = document.querySelectorAll('img');

const lasyLoad = targets => {
  const options = {
    rootMargin: '100px',
    threshold: 0.3,
  };

  const onEntry = (entries, observer) => {
    entries.forEach(({ target, isIntersecting }) => {
      // variant 1
      target.src = target.dataset.src;
      target.classList.toggle('appear', isIntersecting);

      // variant 2
      // if (isIntersecting) {
      //   target.src = target.dataset.src;
      //   target.classList.add('appear');

      //   observer.unobserve(target);
      // }
    });
  };

  // Спостерігач
  const imgObserver = new IntersectionObserver(onEntry, options);

  targets.forEach(target => imgObserver.observe(target));
};

lasyLoad(galleryImgRef);
