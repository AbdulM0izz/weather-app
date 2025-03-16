const inputBox = document.querySelector('.inputBox');
const searchBtn = document.getElementById('searchBtn');
const weatherImg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('wind-speed');
const locationNotFound = document.querySelector('.location-not-found');
const weatherBody = document.querySelector('.weather-body');


let checkWeather = async(city) => {
    const api_key = "e74671c7d6248fa755ac525954787275"; //open weather api key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;


    const weather_data = await fetch(`${url}`).then(response => response.json());
    // console.log(weather_data);

    if (weather_data.cod === "404") {
        locationNotFound.style.display = 'flex';
        weatherBody.style.display = 'none';
        return;
    }

    weatherBody.style.display = 'flex';

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`; //round off to show temp  firsr minus then roud off;

    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    windspeed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch (weather_data.weather[0].main) {
        case `Clouds`:
            weatherImg.src = "assests/cloud.png";
            break;

        case `Clear`:
            weatherImg.src = "assests/clear.png";
            break;

        case `Rain`:
            weatherImg.src = "assests/rain.png";
            break;

        case `Mist`:
            weatherImg.src = "assests/mist.png";
            break;

        case `Snow`:
            weatherImg.src = "assests/snow.png";
            break;
    }

}
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});