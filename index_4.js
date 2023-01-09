const filmoteka = [
  {
    id: 1,
    title: "Duna",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 10,
    actors: [
      "Amelia Gibson",
      "Cameron Clayton",
      "Viola Vasquez",
      "Lula Collins",
      "Victor Nichols",
    ],
    adult: false,
    image: "https://via.placeholder.com/640/480",
  },
  {
    id: 2,
    title: "Venom",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 8,
    actors: [
      "Inez Greer",
      "Barry Curtis",
      "Blanche Rios",
      "Glen Perry",
      "Logan Powers",
    ],
    adult: true,
    image: "https://via.placeholder.com/640/480",
  },
  {
    id: 3,
    title: "Luca",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 9,
    actors: [
      "Marguerite Gibbs",
      "Lora Alvarez",
      "Jorge Simpson",
      "Thomas Hall",
      "Darrell Hunter",
    ],
    adult: false,
  },
  {
    id: 4,
    title: "Free Guy",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 6,
    actors: [
      "Calvin Andrews",
      "Mamie Myers",
      "Madge Townsend",
      "Ralph Kim",
      "Jorge Reese",
    ],
    adult: false,
    image: "https://via.placeholder.com/640/480",
  },
  {
    id: 5,
    title: "Saw",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 7,
    actors: [
      "Adele Marsh",
      "Melvin Burgess",
      "Jesus Reese",
      "Harriet Moreno",
      "Curtis Cox",
    ],
    adult: true,
  },
];

//? Напишіть функцію getAllTitlesOfFilms(films),
//? яка повертає масив з усіма назвами фільмів.
const getAllTitlesOfFilms = function (films) {
  const titles = [];
  for (const { title } of films) {
    // const { title } = film;
    // console.log(title);
    // console.log(film.title)
    // console.log(film);
    // console.log(film.title);
    // titles.push(film.title);
    titles.push(title);
  }
  return titles;
};
console.log(getAllTitlesOfFilms(filmoteka));

//? Напишіть функцію findFilmByName(films, filmTitle),
//? яка шукає фільм за назвою.
const findFilmByName = function (films, filmTitle) {
  //   console.log(filmTitle);
  for (const film of films) {
    const { title } = film;
    // if (film.title === filmTitle) {
    //   return film;
    // }
    if (film.title.includes(filmTitle)) {
      return film;
    }
  }
  return "No film!!!";
};
// const result = findFilmByName(filmoteka, "Venome");
// console.log(result);

console.log(findFilmByName(filmoteka, "Duna"));

//? Напишіть функцію getAdultFilms(films),
//? яка повертає масив усіх дорослих фільмів.
const getAdultFilms = function (films) {
  const adultFilms = [];
  for (const film of films) {
    if (film.adult) {
      adultFilms.push(film);
    }
  }
  return adultFilms;
};
console.log(getAdultFilms(filmoteka));
//? Напишіть функцію getNotAdultFilms(films),
//? яка повертає масив усіх фільмів без обмежень.
const getNotAdultFilms = function (films) {
  const nonAdultFilms = [];

  for (const film of films) {
    if (!film.adult) {
      nonAdultFilms.push(film);
    }
  }
  return nonAdultFilms;
};

console.log(getNotAdultFilms(filmoteka));
const getImagesFilms = function (films) {
  const imagesFilms = [];
};

// console.log(getAllTitlesOfFilms(filmoteka));
// console.log(findFilmByName(filmoteka, 'Stars wars'));
// console.log(findFilmByName(filmoteka, 'Duna'));
// console.log(getAllTitlesOfFilms(filmoteka));
// console.log(findFilmByName(filmoteka, 'Venom'));
// console.log(getAdultFilms(filmoteka));
// console.log(getNotAdultFilms(filmoteka));
// function add(...args) {}
// add(1, 4, 6, 7);
// const animal = { legs: 4, name: 'Mando' };
// const dog = { ...animal, name: 'Kiwi' };
// console.log(dog.hasOwnProperty('legs'));
// console.log(dog);
// console.log(dog);
// getImagesFilms(filmoteka);

// const numbers = [3, 5, 7, 8, 8, 98];

// console.log(Math.max(4, 6, 8, 12));
// console.log(...numbers);
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));
// const someFilm = {
//   id: 6,
//   title: 'Saw',
//   description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//   rating: 7,
//   actors: [
//     'Adele Marsh',
//     'Melvin Burgess',
//     'Jesus Reese',
//     'Harriet Moreno',
//     'Curtis Cox',
//   ],
//   adult: true,
// };
// const data = {
//   totalFilms: 5,
//   filmoteka: [
//     {
//       id: 1,
//       title: 'Duna',
//       description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//       rating: 10,
//       actors: [
//         'Amelia Gibson',
//         'Cameron Clayton',
//         'Viola Vasquez',
//         'Lula Collins',
//         'Victor Nichols',
//       ],
//       adult: false,
//       image: 'https://via.placeholder.com/640/480',
//     },
//     {
//       id: 2,
//       title: 'Venom',
//       description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//       rating: 8,
//       actors: [
//         'Inez Greer',
//         'Barry Curtis',
//         'Blanche Rios',
//         'Glen Perry',
//         'Logan Powers',
//       ],
//       adult: true,
//       image: 'https://via.placeholder.com/640/480',
//     },
//     {
//       id: 3,
//       title: 'Luca',
//       description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//       rating: 9,
//       actors: [
//         'Marguerite Gibbs',
//         'Lora Alvarez',
//         'Jorge Simpson',
//         'Thomas Hall',
//         'Darrell Hunter',
//       ],
//       adult: false,
//     },
//     {
//       id: 4,
//       title: 'Free Guy',
//       description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//       rating: 6,
//       actors: [
//         'Calvin Andrews',
//         'Mamie Myers',
//         'Madge Townsend',
//         'Ralph Kim',
//         'Jorge Reese',
//       ],
//       adult: false,
//       image: 'https://via.placeholder.com/640/480',
//     },
//     {
//       id: 5,
//       title: 'Saw',
//       description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//       rating: 7,
//       actors: [
//         'Adele Marsh',
//         'Melvin Burgess',
//         'Jesus Reese',
//         'Harriet Moreno',
//         'Curtis Cox',
//       ],
//       adult: true,
//     },
//   ],
// };
// const { filmoteka: films = [] } = data;
// console.log(films.push(someFilm));
// console.log(films);

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
  },
};

// const {
//   name: userName,
//   tag,
//   stats: { followers, views, likes: userLikes = 0 },
// } = user;
// const {
//   name: userName,
//   tag,
//   stats: { followers },
// } = user;
// console.log(userName);
// console.log(tag);
// console.log(followers);
// const {
//   name,
//   tag,
//   stats
// } = user;

// console.log(userName); // Jacques Gluke
// console.log(tag); // jgluke
// // console.log(stats); // jgluke
// console.log(followers);
// console.log(views);
// console.log(userLikes);
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308
