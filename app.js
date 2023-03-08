
console.log("HELLO!")

const getCountryByName = (countryName) => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => document.querySelector("country").innerHTML = `Country Name: ${data[0].name.common} <br> Country Population: ${data[0].population} `);

    const countrySection = document.querySelector("#country-section")
    const countryData = document.createElement("country")
    countrySection.append(countryData)   
}

// getCountryByName("Peru");

const getAllCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i <= 300; i++) {
        const countrySection = document.querySelector("#country-section");
        const countryData = document.createElement("country");
        countrySection.append(countryData);
        countryData.innerHTML = `${data[i].name.common} has a population of ${data[i].population}<br>`;
        }
    })
}

getAllCountries();

