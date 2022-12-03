async function getGIF(weather) {
	try {
		const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=ekXLfmy8SXYal69CoD65HEjmmOZDu7Fh&s=${weather}`, {mode: 'cors'});
		const imgData = await response.json();
		return imgData.data.images.original.url;
	} catch (error) {
		console.log(error);
	};
};

export default getGIF;