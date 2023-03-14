import './css/styles.css';

const DEBOUNCE_DELAY = 300;

function fetchCountries() {
  fetch('https://restcountries.com/v3.1/name/deutschland').then((responce) => {
    return responce.json();
  }).then(data => {
    console.log(data)
    return data;
});
}
fetchCountries()
