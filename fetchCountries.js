export { fetchCountries };
const fetchCountries = name => {
  return fetch(`https://restcountries.com/v3.1/all?fields=${name},flags,capital,population,languages`).then(
    resp => {
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      return resp.json();
    }
  );
};
