// налаштування
const options = {
  threshold: 0.5,
};

// колбек функція для new IntersectionObserver
const changeNav = (entries, observer) => {
  entries.forEach(entry => {
    // перевіряємо, чи елемент пересікає область за якою ми спостерігаємо більше аніж на 50%
    console.log(entry.intersectionRect);
    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
      // видаляємо активний клас з елемента меню
      document.querySelector('.active').classList.remove('active');

      // отримуємо ID секції, яка зараз нам показується
      let id = entry.target.id;

      // звертаємося до посилання меню, у якого href дорівнює ID секції
      document.querySelector(`[href="#${id}"]`).classList.add('active');
    }
  });
};

// 1 стврюємо спостерігача
const observer = new IntersectionObserver(changeNav, options);

// 2 передаємо всі секції обсерверу щоб він за ними стежив
const sections = document.querySelectorAll('section');
sections.forEach(section => {
  observer.observe(section);
});
