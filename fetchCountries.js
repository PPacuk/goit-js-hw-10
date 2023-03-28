export { fetchCountries };
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const countryInfo = document.querySelector('.country-info');

const fetchCountries = name => {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  ).then(resp => {
    if (!resp.ok) {
      Notify.failure('Oops, there is no country with that name');
      countryInfo.innerHTML = '';
      throw new Error(resp.status);
    }
    return resp.json();
  });
};
