// imports
// import { retrieveAPIData } from "../components/data.js";

export const search = document.querySelector(".search-bar");
export const toggleTemp = document.querySelector(".toggle-temp");
export const toggleDays = document.querySelector(".days-selector");
export const searchForm = document.querySelector(".search-container");
export const toggleSwitch = document.querySelector(".toggle-switch");
export const toggleContainer = document.querySelector(".toggle-container");
export const cardContainer = document.querySelector(".card-container");

export async function displayData(data) {
  const processedData = await data;
  cardContainer.innerHTML = "";
  console.log(processedData);

  processedData.forEach((day) => {
    const icon = getWeatherIcon(day.icon);
    // console.log(icon);
    const html = `
      <div class="weather-card">
        <div class="location">${day.address}</div>
        <img src="../assets/images/rain.svg" alt="weather-icon" class="weather-icon">
        <div class="temperature">${day.temperature}</div>
        <div class="weather-description">${day.conditions}</div>
        <div class="weather-info">
            <div class="info-item">
                <strong>Humidity</strong>
                <p>${day.humidity}%</p>
            </div>
            <div class="info-item">
                <strong>Wind</strong>
                <p>${day.windspeed} mph</p>
            </div>
            <div class="info-item">
                <strong>Feels Like</strong>
                <p>${day.feelslike}°F</p>
            </div>
        </div>
    </div>
    `;

    cardContainer.innerHTML += html;
  });
}

function getWeatherIcon(weatherCondition) {
  let icon;
  switch (weatherCondition) {
    case "cloudy":
      icon = "../assets/images/cloudy.svg";
      break;
    case "sunny":
      icon = "../assets/images/sunny.svg";
      break;
    case "rain":
      icon = "../assets/images/rain.svg";
      break;
    case "thunderstorms":
      icon = "../assets/images/thunderstorm.svg";
      break;
    case "snow":
      icon = "../assets/images/snow.svg";
      break;
    case "fog":
      icon = "../assets/images/fog.svg";
      break;
    case "windy":
      icon = "../assets/images/windy.svg";
      break;
    case "partially Cloudy":
      icon = "../assets/images/partial cloudy.svg";
      break;
  }

  return icon;
}
