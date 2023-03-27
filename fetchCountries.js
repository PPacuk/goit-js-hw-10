export { fetchCountries };
const fetchCountries = country => {
  const url = `https://restcountries.com/v3.1/name/${country}`;
  const countryInfo = document.querySelector('.country-info');
  const countryList = document.querySelector('.country-list');
  fetch(url)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      return resp.json();
    })
    .then(data => {
      const countryNumber = data.map(e => e.name.official).length;
// console.log(countryNumber);
      if (countryNumber > 10) {
        
      } else {
        data.map(e => {
          const countryLiEl = `<li><img src='${e.flags.svg}', height="20px", border='1px'> ${e.name.official}</li>`;
            //  countryList.innerHTML = countryLiEl.repeat(countryNumber);
          console.log(countryLiEl);
          const setCountryList = (countryNumber, countryLiEl) => {
            return countryList.innerHTML = countryNumber + countryLiEl
          }
return setCountryList(countryNumber, countryLiEl);
        });
      }
      data.map(e => {
        const lang = e.languages;

        countryInfo.innerHTML = `
            <ul><li><img src='${e.flags.svg}', height="20px", border='1px'> ${
          e.name.official
        }</li>
            <li>${e.capital}</li>
            <li>${e.population}</li>
            <li>${Object.values(lang)}</li></ul>
            `;
      });
    })

    .catch(console.error);
};
