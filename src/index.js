import { fetchCountries } from '../fetchCountries';
import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { debounce } from 'lodash';

const DEBOUNCE_DELAY = 300;
const inputCountry = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const renderCountriesList = countries => {
  if (countries.length <= 10 && countries.length !== 1) {
    const markup = countries
      .map(country => {
        return `<li><img src='${country.flags.svg}', height="20px", border='1px'> ${country.name.official}</li>`;
      })
      .join('');
    countryInfo.innerHTML = markup;
    countryList.innerHTML = '';
  } else if (countries.length === 1) {
    const markupList = countries
      .map(country => {
        return `<li><img src='${
          country.flags.svg
        }', height="20px", border='1px'> ${country.name.official}</li>
            <li>${country.capital}</li>
            <li>${country.population}</li>
            <li>${Object.values(country.languages)}</li>`;
      })
      .join('');
    countryInfo.innerHTML = '';
    countryList.innerHTML = markupList;
  } else {
    return Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
};

const inputHandler = countryName => {
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
