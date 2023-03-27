import { fetchCountries } from '../fetchCountries';
import './css/styles.css';

const _ = require('lodash')
const DEBOUNCE_DELAY = 300;
const inputCountry = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

const renderCountriesList = countries => {
  console.log(countries);
  const markup = countries
    .map(country => {
      return `<li><img src='${
        country.flags.svg
      }', height="20px", border='1px'> ${country.name.official}</li>
            <li>${country.capital}</li>
            <li>${country.population}</li>
            <li>${Object.values(country.languages)}</li>`;
    })
    .join('');
  countryList.innerHTML = markup;
};

const inputHandler = (countryName) => {
  fetchCountries(countryName.currentTarget.value)
    .then(countries => renderCountriesList(countries))
    .catch(error => console.log(error));
};

inputCountry.addEventListener('input', inputHandler);

// const test = () => {
//   console.log('hello')
// }

// const debounced = _.debounce(test, 5000)
// console.log(debounced())