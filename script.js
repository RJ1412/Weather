// const url = 'https://cities-temperature.p.rapidapi.com/weather/v1/current?location=';
// const Kcity = 'Kolkata'
// const Pcity = 'Paris'
// const Mcity = 'Melbourne'
// const SFcity = 'Seoul'
// const LA = 'Osaka'
// const L = 'London'
// const T = 'Tokyo'
// const B = 'Berlin'

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'c72d82d52cmsh561d06c18d9f311p1c66ffjsnf2290bb223a4',
// 		'x-rapidapi-host': 'cities-temperature.p.rapidapi.com'
// 	}
// };

// // const options = {
// // 	method: 'GET',
// // 	headers: {
// // 		'x-rapidapi-key': '45f50b2f57msh40cad88b7f3150bp1f4353jsnde9351a2365e',
// // 		'x-rapidapi-host': 'cities-temperature.p.rapidapi.com'
// // 	}
// // };


// fetch(url + Kcity, options)
// 	.then(response => response.json())
// 	.then(response => {
// 		console.log(response)
// 		tempk.innerHTML = response.temperature
// 		desck.innerHTML = response.description
// 		hum.innerHTML = response.humidity
// 		windk.innerHTML = response.wind_speed
// 	})
// 	.catch(error => {
// 		console.error(error);
// 	});



// fetch(url + Pcity, options)
// 	.then(response => response.json())
// 	.then(response => {
// 		console.log(response)
// 		tempp.innerHTML = response.temperature
// 		descp.innerHTML = response.description
// 		hump.innerHTML = response.humidity
// 		windp.innerHTML = response.wind_speed
// 	})
// 	.catch(error => {
// 		console.error(error);
// 	});



// fetch(url + Mcity, options)
// 	.then(response => response.json())
// 	.then(response => {
// 		console.log(response)
// 		tempm.innerHTML = response.temperature
// 		descm.innerHTML = response.description
// 		humm.innerHTML = response.humidity
// 		windm.innerHTML = response.wind_speed
// 	})
// 	.catch(error => {
// 		console.error(error);
// 	});



// fetch(url + SFcity, options)
// 	.then(response => response.json())
// 	.then(response => {
// 		console.log(response)
// 		tempsf.innerHTML = response.temperature
// 		descsf.innerHTML = response.description
// 		humsf.innerHTML = response.humidity
// 		windsf.innerHTML = response.wind_speed
// 	})
// 	.catch(error => {
// 		console.error(error);
// 	});



// fetch(url + LA, options)
// 	.then(response => response.json())
// 	.then(response => {
// 		console.log(response)
// 		templa.innerHTML = response.temperature
// 		descla.innerHTML = response.description
// 		humla.innerHTML = response.humidity
// 		windla.innerHTML = response.wind_speed
// 	})
// 	.catch(error => {
// 		console.error(error);
// 	});



// fetch(url + L, options)
// 	.then(response => response.json())
// 	.then(response => {
// 		console.log(response)
// 		templ.innerHTML = response.temperature
// 		descl.innerHTML = response.description
// 		huml.innerHTML = response.humidity
// 		windl.innerHTML = response.wind_speed
// 	})
// 	.catch(error => {
// 		console.error(error);
// 	});



// fetch(url + T, options)
// 	.then(response => response.json())
// 	.then(response => {
// 		console.log(response)
// 		tempT.innerHTML = response.temperature
// 		descT.innerHTML = response.description
// 		humT.innerHTML = response.humidity
// 		windT.innerHTML = response.wind_speed
// 	})
// 	.catch(error => {
// 		console.error(error);
// 	});


// fetch(url + B, options)
// 	.then(response => response.json())
// 	.then(response => {
// 		console.log(response)
// 		tempB.innerHTML = response.temperature
// 		descB.innerHTML = response.description
// 		humB.innerHTML = response.humidity
// 		windB.innerHTML = response.wind_speed
// 	})
// 	.catch(error => {
// 		console.error(error);
// 	});



// const getWeather = (city) => {
// 	cityName.innerHTML = city
// 	fetch(url + city, options)
// 		.then(response => response.json())
// 		.then(response => {
// 			console.log(response)
// 			temperature.innerHTML = response.temperature
// 			description.innerHTML = response.description
// 			humidity.innerHTML = response.humidity
// 			wind_speed.innerHTML = response.wind_speed
// 		})
// 		.catch(error => {
// 			console.error(error);
// 		});
// }

// submit.addEventListener("click", (e) => {
// 	e.preventDefault()
// 	getWeather(city.value)
// })

// getWeather("Delhi")



const apiKey = '064c8f81a42dd813f138f824d96a7f37'; // Replace with your OpenWeatherMap API Key


document.getElementById('submit').addEventListener('click', () => {
  const city = document.getElementById('city').value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    alert('Please enter a city name.');
  }
});

function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      alert('City not found!');
    });
}

function displayWeather(data) {
  document.getElementById('cityName').textContent = data.name;
  document.getElementById('temperature').textContent = data.main.temp;
  document.getElementById('description').textContent = data.weather[0].description;
  document.getElementById('wind_speed').textContent = data.wind.speed;
  document.getElementById('humidity').textContent = data.main.humidity;

  // Display weather icon
  const weatherIcon = data.weather[0].icon;
  document.getElementById('weatherIcon').className = `fa-solid ${getWeatherIconClass(weatherIcon)}`;
}

function getWeatherIconClass(icon) {
  const iconMap = {
    '01d': 'fa-sun',
    '01n': 'fa-moon',
    '02d': 'fa-cloud-sun',
    '02n': 'fa-cloud-moon',
    '03d': 'fa-cloud',
    '03n': 'fa-cloud',
    '04d': 'fa-cloud',
    '04n': 'fa-cloud',
    '09d': 'fa-cloud-showers-heavy',
    '09n': 'fa-cloud-showers-heavy',
    '10d': 'fa-cloud-sun-rain',
    '10n': 'fa-cloud-moon-rain',
    '11d': 'fa-bolt',
    '11n': 'fa-bolt',
    '13d': 'fa-snowflake',
    '13n': 'fa-snowflake',
    '50d': 'fa-smog',
    '50n': 'fa-smog',
  };
  return iconMap[icon] || 'fa-cloud';
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  darkModeToggle.innerHTML = body.classList.contains('dark-mode')
    ? '<i class="fa-solid fa-sun"></i> Light Mode'
    : '<i class="fa-solid fa-moon"></i> Dark Mode';
});
