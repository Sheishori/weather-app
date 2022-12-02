import getWeatherData from './getWeatherData';

const city = document.getElementById('city');
const country = document.getElementById('country');
const weather = document.getElementById('weather');
const temp = document.getElementById('temp');
const pressure = document.getElementById('pressure');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

const input = document.getElementById('location');
const button = document.querySelector('button');

button.addEventListener('click', (e) => {
	e.preventDefault();
	setHTML(input.value);
});

async function setHTML(location) {
	const weatherData = await getWeatherData(location);
	city.textContent = weatherData.city;
	country.textContent = weatherData.country;
	weather.textContent = weatherData.weather;
	temp.textContent = weatherData.temp;
	pressure.textContent = weatherData.pressure;
	humidity.textContent = weatherData.humidity;
	wind.textContent = weatherData.wind;
};

setHTML();