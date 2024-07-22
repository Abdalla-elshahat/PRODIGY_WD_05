const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const apiKey = "bcdae67a3be1c419641c731d8c010697"
const weatherIcon=document.getElementById("img")
weatherIcon.style.display="none"
function getWeatherByInput() {
    const location = document.getElementById('locationInput').value;
    if (location) {
        fetchWeather(location);
    }
    else{
        alert("Please enter a location")
    }
}
async function fetchWeather(location) {
try {
const response= await fetch(apiurl+location+`&appid=${apiKey}`)
if (response.status==404||response.status==400){
    document.getElementById('location').innerHTML="City is not found";
}
const data = await response.json();
displayWeather(data);
console.log(data)
} catch (error) {
    console.error(error);
}
}
function displayWeather(data) {
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const conditionsElement = document.getElementById('conditions');

    locationElement.textContent = `Location: ${data.name}, ${data.sys.country}`;
    temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
    conditionsElement.textContent = `Conditions: ${data.weather[0].description}`;
weatherIcon.style.display="block"
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="https://www.freeiconspng.com/thumbs/cloud-icon/cloud-icon-17.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="https://mohamedrabee3.github.io/WeatherApp/images/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="https://cdn-icons-png.flaticon.com/512/4837/4837678.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="https://www.freepnglogos.com/uploads/rain-png/transparent-download-green-cloud-with-rain-clipart-png-23.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="https://www.pngmart.com/files/12/Vector-Sun-And-Cloud-PNG-Image.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="https://icon2.cleanpng.com/20180703/qok/kisspng-snow-weather-climate-clip-art-5b3bf3d9c9f9d8.0863800715306557058273.jpg";
    }
}