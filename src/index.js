import getWeatherData from './getWeatherData';
import getGIF from './getGIF';

const img = document.querySelector('img');
const city = document.getElementById('city');
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
	city.textContent = `${weatherData.city}, ${weatherData.country}`;
	weather.textContent = weatherData.weather;
	temp.textContent = weatherData.temp;
	pressure.textContent = `Pressure: ${weatherData.pressure}`;
	humidity.textContent = `Humidity: ${weatherData.humidity}`;
	wind.textContent = `Wind: ${weatherData.wind}`;
	img.src = await getGIF(weatherData.main);
};

setHTML();