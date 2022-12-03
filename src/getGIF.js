async function getGIF(weather) {
	try {
		const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=ekXLfmy8SXYal69CoD65HEjmmOZDu7Fh&s=${weather}`, {mode: 'cors'});
		const imgData = await response.json();
		if (imgData.meta.status === 200) {
			return imgData.data.images.original.url;
		} else {
			console.log(imgData.meta.msg);
		}
	} catch (error) {
		console.log(error);
	};
};

export default getGIF;