const apiKey = 'YOUR_API_KEY';
const city = 'London';

function callAPI() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.querySelector("#weather_city").textContent = data.name || 'N/A';
            document.querySelector("#weather_temperature").textContent = `${data.main.temp}°C` || 'N/A';
            document.querySelector("#weather_condition").textContent = data.weather[0].description || 'N/A';
        })
        .catch(error => console.error('Error fetching data:', error));
}
