export default createCountryCard = ({ name, capital, area, population }) => {
  return `<li>
    <h3> Country name: ${name}</h3>
    <p>Country capital: ${capital}</p>
    <p>population: ${population}</p>
    <p>area: ${area}</p>
    </li>`;
};
