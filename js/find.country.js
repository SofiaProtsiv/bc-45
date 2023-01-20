'use strict';
const countries = [
  {
    name: 'Ukraine',
    capital: 'Kyiv',
    population: '41 342 465',
    area: '603.628',
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    population: '47 450 795',
    area: '505.990',
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    population: '109 035 343',
    area: '300.000',
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    population: '31 127 674',
    area: '1.246.700',
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    population: '34 003',
    area: '6.8',
  },
];

const searchInputRef = document.querySelector('.search-input');
const errorTextRef = document.querySelector('.output-error');
const listRef = document.querySelector('.country-card');

const handleInput = event => {
  let { value } = event.target;

  value = value.trim().toLowerCase();

  if (value === '') {
    errorTextRef.textContent = '';
    listRef.innerHTML = '';
    return;
  }

  const countryInfo = countries.filter(({ name }) => name.toLowerCase().includes(value));

  if (countryInfo.length > 1) {
    const listMarkup = createCountryList(countryInfo).join('');
    listRef.innerHTML = listMarkup;
    errorTextRef.textContent = '';
  }

  if (countryInfo.length === 1) {
    const listMarkup = createCountryCard(countryInfo[0]);
    listRef.innerHTML = listMarkup;
    errorTextRef.textContent = '';
  }

  if (countryInfo.length === 0) {
    listRef.innerHTML = '';
    errorTextRef.textContent = `Countri ${value} not found!`;
  }

  // const countryInfo = countries.find(country => country.name === value.trim());

  // if (!countryInfo) {
  //   errorTextRef.textContent = `Countri ${value} not found!`;
  //   listRef.innerHTML = '';
  // }

  // if (countryInfo) {
  //   errorTextRef.textContent = '';
  //   listRef.innerHTML = createCountryCard(countryInfo);
  // }
};
const debouncedHandleInput = _.debounce(handleInput, 300);
searchInputRef.addEventListener('input', debouncedHandleInput);

const createCountryList = counrtiesList => {
  return counrtiesList.map(({ name, capital }) => {
    return `<li>
  <h5> Country name: ${name}</h5>
  <p>Country capital: ${capital}</p>
  </li>`;
  });
};

const createCountryCard = ({ name, capital, area, population }) => {
  return `<li>
  <h3> Country name: ${name}</h3>
  <p>Country capital: ${capital}</p>
  <p>population: ${population}</p>
  <p>area: ${area}</p>
  </li>`;
};

// const searchInputRef = document.querySelector('.search-input');
// const errorTextRef = document.querySelector('.output-error');
// const listRef = document.querySelector('.country-card');

// const handleInput = event => {
//   const { value } = event.target;

//   if (value.trim() === '') {
//     errorTextRef.textContent = '';
//     return;
//   }

//   const countryInfo = countries.find(country => country.name === value.trim());

//   if (!countryInfo) {
//     errorTextRef.textContent = `Countri ${value} not found!`;
//     listRef.innerHTML = '';
//   }

//   if (countryInfo) {
//     errorTextRef.textContent = '';
//     listRef.innerHTML = createCountryCard(countryInfo);
//   }
// };
// const debouncedHandleInput = _.debounce(handleInput, 300);
// searchInputRef.addEventListener('input', debouncedHandleInput);

// const createCountryCard = ({ name, capital, area, population }) => {
//   return `<li>
//   <h3> Country name: ${name}</h3>
//   <p>Country capital: ${capital}</p>
//   <p>population: ${population}</p>
//   <p>area: ${area}</p>
//   </li>`;
// };
