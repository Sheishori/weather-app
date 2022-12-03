async function getWeatherData(location) {
	try {
		const APIData = await getWeatherAPIData(location);
		if (APIData.cod === 200) {
			const weatherData = processWeatherData(APIData);
			return weatherData;
		} else {
			return APIData.message;
		}
	} catch (error) {
		console.log(error);
	};
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
		city: APIData.name,
		country: APIData.sys.country,
		main: APIData.weather[0].main,
		weather: APIData.weather[0].description,
		tempC: Math.round(APIData.main.temp - 273.15),
		tempF: Math.round(1.8 * (APIData.main.temp - 273.15) + 32),
		pressure: APIData.main.pressure,
		humidity: APIData.main.humidity,
		wind: Math.round((APIData.wind.speed * 3600) / 1000),
	};
	return weatherData;
};

export default getWeatherData;
