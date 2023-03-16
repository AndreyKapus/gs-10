import './css/styles.css';
const debounce = require('lodash.debounce');
import {fetchCountries} from './fetchCountries/fetchCountries'

const DEBOUNCE_DELAY = 300;

const inputEl = document.getElementById('search-box');
const countryListEl = document.querySelector('.country-list')

function renderCountries(e) {
  e.preventDefault();
  let inputValue = e.target.value

 fetchCountries(inputValue).then(checkData).catch(error => console.error(error));

 if(inputEl === '') {
    countryListEl.innerHTML;
 }
};

function drawCountries(data) {
  const markup = data.map(({name, flags}) => {
    return `
      <div><img style='width: 40px' src='${flags.svg}'/><span>${name.official}</span></div>
    `
  }).join('');
  countryListEl.insertAdjacentHTML('afterbegin', markup)
}

function drawOneCountries(data) {
  const markup = data.map(({name, capital, flags, languages, population}) => {
    return `
    <li>
    <div>${name.official}</div>
    <div>${capital}</div>
    <img style="width: 30px; margin-right: 20px" src='${flags.svg}' />
    <div>${Object.values(languages)}</div>
    <div>Population:${population}</div>
    </li>
    `
  }).join('')
  countryListEl.insertAdjacentHTML('afterbegin', markup)
}

function checkData(data) {
  if(data.lenght > 1) {
    drawCountries(data)
  }
   drawOneCountries(data)

}

inputEl.addEventListener('input', debounce(renderCountries, DEBOUNCE_DELAY))


