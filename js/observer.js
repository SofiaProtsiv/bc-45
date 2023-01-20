// 📌❗️🤓 Intersection Observer API

// Налаштування
let options = {
  root: document.querySelector('.scroll-list'),
  // root - елемент, який виступає в ролі області перегляду для target (предок цільового елемента або null для viewport)
  rootMargin: '5px',
  // rootMargin - відступи навколо root (margin у CSS, за умовчанням всі відступи дорівнюють 0)
  threshold: 0.5,
  // threshold - число або масив чисел, що вказує допустимий відсоток перетину target та root
};

// Функція зворотного виклику. Виклик callback повертає об'єкт, що містить запис про зміни, що відбулися з цільовим елементом:
let callback = (entries, observer) => {
  entries.forEach(entry => {
    // entry - те, що змінюється
    entry.target; // Елемент, перетин якого з коренем перетину змінився.
    entry.isIntersecting; // чи ціль в області видимості: true чи false
    entry.intersectionRatio; // число для відношення intersectionRect до boundingClientRect.
    entry.time; // DOMHightResTimeStamp, що вказує, коли відбувся перетин.
    entry.rootBounds; // DOMRectReadOnly для кореня спостерігача перетину.
    entry.boundingClientRect; // DOMRectReadOnly для цілі спостерігача перетину.
    entry.intersectionRect; // DOMRectReadOnly для видимої частини цілі спостерігача перетину.
  });
};

// Спостерігач
let observer = new IntersectionObserver(callback, options);

// Далі створюється цільовий елемент, за яким спостерігає спостерігач:
let target = document.querySelector('.item');
observer.observe(target);
