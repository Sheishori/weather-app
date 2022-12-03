import getWeatherData from './getWeatherData';
import getGIF from './getGIF';

function render() {
	const img = document.querySelector('img');
	const city = document.getElementById('city');
	const weather = document.getElementById('weather');
	const temp = document.getElementById('temp');
	const pressure = document.getElementById('pressure');
	const humidity = document.getElementById('humidity');
	const wind = document.getElementById('wind');
	const input = document.getElementById('location');
	const searchButton = document.getElementById('search');
	const switchButton = document.getElementById('switch');
	let weatherData = '';
	let tempUnit = 'C';
	
	// add weather information to proper divs
	async function setWeather(location) {
		weatherData = await getWeatherData(location);
		// display error if occured and clear weather divs
		if (!weatherData.city) {
			city.textContent = weatherData.charAt(0).toUpperCase() + weatherData.slice(1);
			clearWeather();
			switchButton.style.display = 'none';
			img.src = await getGIF('shrug');
			return;
		};
		switchButton.style.display = 'inline-block';
		city.textContent = `${weatherData.city}, ${weatherData.country}`;
		weather.textContent = weatherData.weather.charAt(0).toUpperCase() + weatherData.weather.slice(1);
		setTemperature();
		pressure.textContent = `Pressure: ${weatherData.pressure} hPa`;
		humidity.textContent = `Humidity: ${weatherData.humidity}%`;
		wind.textContent = `Wind: ${weatherData.wind} km/h`;
		img.src = await getGIF(weatherData.main);
	};

	function setTemperature() {
		if (tempUnit === "C") {
			temp.textContent = `${weatherData.tempC}°C`;
		} else {
			temp.textContent = `${weatherData.tempF}°F`;
		}
	};

	// clear weather divs in case of an error
	function clearWeather() {
		weather.textContent = '';
		temp.textContent = '';
		pressure.textContent = '';
		humidity.textContent = '';
		wind.textContent = '';
	};

	function switchUnit() {
		tempUnit = (tempUnit === "C") ? "F" : "C";
		setTemperature();
	};

	switchButton.addEventListener('click', switchUnit);

	searchButton.addEventListener('click', (e) => {
		e.preventDefault();
		setWeather(input.value);
	});

	setWeather();
};

export default render;
