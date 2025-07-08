# Project Documentation: Weather Motion

This document provides a detailed overview of the `Weather Motion` project, intended to give the Gemini CLI agent a deep understanding of the project context for future interactions.

## 1. Project Name

Weather Motion

## 2. Project Purpose

A frontend website built with React, designed to display real-time weather data alongside dynamic, animated visual representations of the corresponding weather conditions (sunny, cloudy, rainy, snowy). The project aims to provide an engaging and intuitive user experience by combining actual weather information with interactive visual effects.

## 3. Current Project State

*   **Framework:** React (initialized with `create-react-app`).
*   **UI Library:** Ant Design is installed and integrated for UI structure and components, including `Layout`, `Header`, `Content`, `Button`, `Spin`, and `Typography`.
*   **Real-time Data Integration:** The application automatically attempts to fetch real-time weather data upon loading.
    *   It uses the browser's `navigator.geolocation` API to get the user's current coordinates.
    *   The coordinates are then passed to a `fetchWeatherByCoords` function in `src/services/weatherService.js` to retrieve data from a weather API.
    *   The UI displays the user's city name, temperature, and a description of the weather.
*   **State Management:** The main `App.js` component manages the application's core state, including:
    *   `loading`: A boolean to show a spinner while fetching data.
    *   `error`: Stores error messages (e.g., geolocation denied, API failure).
    *   `currentWeather`: An object containing the fetched weather data.
    *   `weatherType`: A string that determines which visual effect to display. This is automatically set based on the API response (e.g., 'clear' -> 'sunny') but can also be manually changed by the user via buttons.
*   **Visual Weather Display:**
    *   The `WeatherDisplay.js` component is responsible for rendering the visual effects.
    *   It uses a `switch` statement to render different components (`Rain.js`, `Snow.js`) or CSS classes based on the `weather` prop passed from `App.js`.
*   **Styling:** CSS is used for custom styling and animations. All `px` units in the main CSS files have been converted to `rem` for better responsiveness.
*   **Roadmap:** A detailed `ROADMAP.md` file exists, outlining a one-month plan for feature enhancement, UI/UX improvements, and further API integration.

## 4. Key Technologies Used

*   **Frontend:** React.js
*   **UI Framework:** Ant Design
*   **Styling:** CSS (with `rem` units for responsiveness)
*   **API:** Browser Geolocation API and a weather data API (via `weatherService.js`).

## 5. Implementation Details & Data Flow

1.  **Initialization:** The `App` component mounts and triggers a `useEffect` hook.
2.  **Geolocation:** It requests the user's location via `navigator.geolocation`.
3.  **API Call:** On success, it calls `fetchWeatherByCoords` with the user's latitude and longitude.
4.  **State Update:** The fetched data is stored in the `currentWeather` state. The `weatherType` state is determined by parsing the main weather description from the API response.
5.  **Rendering:**
    *   The UI displays the textual weather information from `currentWeather`.
    *   The `weatherType` is passed as a prop to `WeatherDisplay`, which renders the corresponding visual effect.
6.  **Error Handling:** The application displays specific error messages if geolocation is denied/unavailable or if the weather API call fails.

## 6. Known Issues / Next Steps (Refer to `ROADMAP.md` for detailed plan)

The `ROADMAP.md` file provides a comprehensive plan. Key next steps include:

*   **Performance Optimization:** Improve the particle generation mechanism for rain and snow effects.
*   **UI Enhancement:** Further integrate Ant Design components like `Space` and `Card` for better layout and aesthetics.
*   **UX Improvement:** Implement smooth visual transitions between weather types and add a manual city search input.
*   **Responsive Design:** Enhance responsiveness for mobile and tablet devices.
*   **Feature Expansion:** Add a multi-day weather forecast and a Celsius/Fahrenheit toggle.

## 7. Important Notes for Agent

*   Always refer to `ROADMAP.md` for the planned development trajectory and priorities.
*   When making changes, adhere to existing project conventions, including the use of Ant Design components and `rem` units in CSS.
*   Be mindful of performance, especially concerning the particle animations in `Rain.js` and `Snow.js`.