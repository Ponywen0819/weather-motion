document.addEventListener('DOMContentLoaded', () => {
    const weatherContainer = document.getElementById('weatherContainer');
    const sunnyBtn = document.getElementById('sunnyBtn');
    const rainyBtn = document.getElementById('rainyBtn');
    const snowyBtn = document.getElementById('snowyBtn');
    const cloudyBtn = document.getElementById('cloudyBtn');

    function setWeather(weatherType) {
        weatherContainer.className = 'weather-container'; // Reset classes
        weatherContainer.classList.add(weatherType);
    }

    sunnyBtn.addEventListener('click', () => setWeather('sunny'));
    rainyBtn.addEventListener('click', () => setWeather('rainy'));
    snowyBtn.addEventListener('click', () => setWeather('snowy'));
    cloudyBtn.addEventListener('click', () => setWeather('cloudy'));

    // Set initial weather to sunny
    setWeather('sunny');
});