import countries from "../database/countries";
import createCountryCard from "./createCountryCard";
import debounce from "lodash.debounce";
import createCountryList from "../templates/createCountryList.hbs";
import API from "./fetch";

const api = new API();
console.log(api.getData("SofiaProtsiv"));

const searchInputRef = document.querySelector(".search-input");
const errorTextRef = document.querySelector(".output-error");
const listRef = document.querySelector(".country-card");

export default function handleInput(event) {
  const inputValue = event.target.value.toLowerCase();

  const countryInfo = countries.filter(({ name }) =>
    name.toLowerCase().includes(inputValue)
  );

  if (inputValue === "") {
    errorTextRef.textContent = "";
    return;
  }

  if (countryInfo.length > 1) {
    listRef.innerHTML = createCountryList(countryInfo);
    errorTextRef.textContent = "";
  }

  if (countryInfo.length === 1) {
    listRef.innerHTML = createCountryCard(countryInfo[0]);
    errorTextRef.textContent = "";
  }

  if (countryInfo.length === 0) {
    errorTextRef.textContent = `Countri ${inputValue} not found!`;
  }
}

const debouncedInput = debounce(handleInput, 1000);
searchInputRef.addEventListener("input", debouncedInput);
