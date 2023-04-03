import { fetchCountries } from '../fetchCountries';
import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { debounce } from 'lodash/debounce';
import { trim } from 'lodash';

const _ = require('lodash');
const DEBOUNCE_DELAY = 300;
const inputCountry = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const renderCountriesList = countries => {
  if (countries.length <= 10 && countries.length !== 1) {
    const markup = countries
      .map(country => {
        return `<li style="font-size:20px; display:flex; gap:15px; margin-bottom:10px"><img src='${country.flags.svg}', width="50px", border='1px'> ${country.name.official}</li>`;
      })
      .join('');
    countryInfo.innerHTML = markup;
    countryList.innerHTML = '';
  } else if (countries.length === 1) {
    const markupList = countries
      .map(country => {
        return `<li style="font-size:45px; font-weight: bold"><img src='${
          country.flags.svg
        }', width="50px", border='1px'> ${country.name.official}</li>
            <li><p><span style = 'font-weight: bold'>Capital: </span>${
              country.capital
            }</p></li>
            <li><p><span style = 'font-weight: bold'>Population: </span>${
              country.population
            }</p></li>
            <li><p><span style = 'font-weight: bold'>Languages: </span>${Object.values(
              country.languages
            )}</p></li>`;
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

const inputHandler = () => {
  if (inputCountry.value.length !== 0) {
    fetchCountries(trim(inputCountry.value))
      .then(countries => renderCountriesList(countries))
      .catch(error => console.log(error));
  } else {
    return (countryInfo.innerHTML = ''), (countryList.innerHTML = '');
  }
};

const debouncedInputHandler = _.debounce(inputHandler, DEBOUNCE_DELAY);

inputCountry.addEventListener('input', debouncedInputHandler);
