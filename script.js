document.addEventListener('DOMContentLoaded', () => {
    const weatherContainer = document.getElementById('weatherContainer');
    const sunnyBtn = document.getElementById('sunnyBtn');
    const rainyBtn = document.getElementById('rainyBtn');
    const snowyBtn = document.getElementById('snowyBtn');
    const cloudyBtn = document.getElementById('cloudyBtn');

    function clearWeatherElements() {
        const weatherElements = weatherContainer.querySelector('.weather-elements');
        weatherElements.innerHTML = ''; // Clear any existing weather elements
    }

    function createRaindrops() {
        clearWeatherElements();
        const weatherElements = weatherContainer.querySelector('.weather-elements');
        const numberOfRaindrops = 100; // Adjust as needed for density

        for (let i = 0; i < numberOfRaindrops; i++) {
            const raindrop = document.createElement('div');
            raindrop.classList.add('raindrop');
            raindrop.style.left = `${Math.random() * 100}%`;
            raindrop.style.animationDelay = `${Math.random() * 5}s`;
            raindrop.style.animationDuration = `${0.5 + Math.random() * 0.5}s`; // Vary duration for speed
            weatherElements.appendChild(raindrop);
        }
    }

    function setWeather(weatherType) {
        weatherContainer.className = 'weather-container'; // Reset classes
        weatherContainer.classList.add(weatherType);
        clearWeatherElements(); // Clear elements before setting new weather

        if (weatherType === 'rainy') {
            createRaindrops();
        }
    }

    sunnyBtn.addEventListener('click', () => setWeather('sunny'));
    rainyBtn.addEventListener('click', () => setWeather('rainy'));
    snowyBtn.addEventListener('click', () => setWeather('snowy'));
    cloudyBtn.addEventListener('click', () => setWeather('cloudy'));

    // Set initial weather to sunny
    setWeather('sunny');
});