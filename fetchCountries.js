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
        //  data.map(e => console.log(Object.values(e.name)));
          
          data.map(e => {
            //   const countryEl = document.createElement('li');
              data.map(e => console.log(e.name.common))
            //   countryList.innerHTML = `
            // <ul><li><img src='${e.flags.svg}', height="20px", border='1px'> ${e.name.official
            //       }</li></ul>`;
              
        });
          
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
      })}
    )

    .catch(console.error);
};
