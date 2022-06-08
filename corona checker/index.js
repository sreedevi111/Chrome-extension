const axios = require("axios")   //it pulls data from outside
const api = "https://covid19.mathdro.id/api/countries";

const errors = document.querySelector(".errors");
const loading = document.querySelector(".loading");
const cases = document.querySelector(".cases");
const recovered = document.querySelector(".recovered");
const deaths = document.querySelector(".deaths");
const results = document.querySelector(".result-container");

//before search, result and loading should not be displayed

results.style.display = "none";
loading.style.display = "none";
errors.textContent = "";

//access the form
const form = document.querySelector(".form-data");
//get country name
const country = document.querySelector(".country-name");

//to search by country name
//Async await allows us to stop executing code that is dependent on a response from a server, while we wait for the response from a server.
const searchForCountry = async function (countryName) {
    loading.style.display = "block"; //to display loading
    try {
        const response = await axios.get(`${api}/${countryName}`);  //The try statement defines a code block to run
        loading.style.display = "none"
        cases.textContent = response.data.confirmed.value;
        recovered.textContent = response.data.recovered.value;
        deaths.textContent = response.data.deaths.value;
    } catch (error) {                             //The catch statement defines a code block to handle any error.
        loading.style.display = "none"
        results.style.display = "none"
        errors.textContent = "We have no data for the country you have requested.";
    }
}

// to handle submission

function handleSubmit() {
    searchForCountry(country.value);    //country value india
    console.log(country.value);

};
form.addEventListener("submit", handleSubmit())  //handleSubmit executes when submit event takes place