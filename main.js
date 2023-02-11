const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
const flag = document.querySelector(".flag")

btn.addEventListener("click", ()=> {
  let countryName = search.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL)
  fetch(finalURL)
  .then((response) => response.json())
  .then((data) => {
    flag.innerHTML = `
    <img src="${data[0].flags.svg}" class="flag-img">
    <h2>${data[0].name.common}</h2>
    <h3>
    Capital:
    <span>
    ${data[0].capital}
    </span>
    </h3>

    <h3>
    Continent:
    <span>
    ${data[0].region}
    </span>
    </h3>

    <h3>
    Population:
    <span>
    ${data[0].population}
    </span>
    </h3>

    <h3>
    Currencies:
    <span>
    ${data[0].currencies[Object.keys(data[0].currencies)].name}
    </span>
    </h3>

    <h3>
    Common Languages:
    <span>
    ${Object.values(data[0].languages)}
    </span>
    </h3>
    `
  }).catch(() => {
    if(countryName.length == 0){
      flag.innerHTML =
      `<h1>The input field cannot be empty</h1>`
    } else {
      flag.innerHTML =
      `<h1>Enter a valid country name</h1>`
    }
  });
});
