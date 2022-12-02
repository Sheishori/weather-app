async function getWeatherData(location) {
	const APIData = await getWeatherAPIData(location);
	const weatherData = processWeatherData(APIData);
	return weatherData;
};

// get weather data from OpenWeather API with default city being London
async function getWeatherAPIData(location = 'London') {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=31cc72b5a0cd8e85f3b76bb2c36522ed`, {mode: 'cors'});
	const APIData = await response.json();
	return APIData;
};

// take data object from the API and return only needed information
function processWeatherData(APIData) {
	const weatherData = {
		name: APIData.name,
		country: APIData.sys.country,
		weather: APIData.weather[0].description,
		temp: APIData.main.temp,
		pressure: APIData.main.pressure,
		humidity: APIData.main.humidity,
		wind: APIData.wind.speed,
	};
	return weatherData;
};

export default getWeatherData;