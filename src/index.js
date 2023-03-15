import './css/styles.css';
const debounce = require('lodash.debounce');
import {fetchCountries} from './fetchCountries/fetchCountries'

const DEBOUNCE_DELAY = 300;

const inputEl = document.getElementById('search-box');
const countryListEl = document.querySelector('.country-list')

function renderCountries(e) {
  e.preventDefault();
 const countries = fetchCountries(e.target.value);
  console.log(e.target.value);
  if(countries) {
    drawCountries(e.target.value)
  }

};

function drawCountries(data) {
  const markup = data.map(({name, capital, flag, languages, population}) => {
    return `<h1>${name.oficial}</h1>
    <li>${capital}</li>
    `
  }).join('')
  countryListEl.insertAdjacentHTML('afterbegin', markup)
}

inputEl.addEventListener('input', debounce(renderCountries, DEBOUNCE_DELAY))


