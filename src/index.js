const pokemonFetch = fetch('https://pokeapi.co/api/v2/');

console.log(pokemonFetch);

const responceJson = pokemonFetch.then(responce => {
  return responce.json();
})
.then(data => {
 console.log("console.log в втором then", data)
 return data;
})
.catch(error => {console.log(error)})
// console.log("pokedata:", responceJson)