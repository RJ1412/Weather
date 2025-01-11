const url = 'https://cities-temperature.p.rapidapi.com/weather/v1/current?location=hubli';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c72d82d52cmsh561d06c18d9f311p1c66ffjsnf2290bb223a4',
		'x-rapidapi-host': 'cities-temperature.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}