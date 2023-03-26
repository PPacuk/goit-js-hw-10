import { fetchCountries } from '../fetchCountries';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const inputCountry = document.querySelector('#search-box');

const inputHandler = e => {
  fetchCountries(e.currentTarget.value);
};

inputCountry.addEventListener('input', inputHandler);
