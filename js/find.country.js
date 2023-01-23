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
  const inputValue = event.target.value.toLowerCase();

  const countryInfo = countries.filter(({ name }) => name.toLowerCase().includes(inputValue));

  if (inputValue === '') {
    errorTextRef.textContent = '';
    return;
  }

  if (countryInfo.length > 1) {
    listRef.innerHTML = createCountryList(countryInfo);
    errorTextRef.textContent = '';
  }

  if (countryInfo.length === 1) {
    listRef.innerHTML = createCountryCard(countryInfo[0]);
    errorTextRef.textContent = '';
  }

  if (countryInfo.length === 0) {
    errorTextRef.textContent = `Countri ${inputValue} not found!`;
  }
};

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

const debouncedInput = _.debounce(handleInput, 1000);
searchInputRef.addEventListener('input', debouncedInput);
