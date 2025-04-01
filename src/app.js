import "./styles/styles.css";
import {
  fetchWeatherData,
} from "./components/data.js";
import {
  search,
  toggleTemp,
  toggleDays,
  searchForm,
  toggleContainer,
  toggleSwitch,
} from "./components/dom.js";
import {
  calculateFutureDate,
  formRequest,
  toggleTemperature,
} from "./components/util.js";
import { displayData } from "./components/dom.js";
import { format } from "date-fns";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchLocation = search.value;
  const request = formRequest({
    location: searchLocation,
  });
  const weatherData = fetchWeatherData(request);
  displayData(weatherData);
});

toggleDays.addEventListener("input", () => {
  const days = parseInt(toggleDays.value);
  const searchLocation = search.value;
  const request = formRequest({
    location: searchLocation,
    days: days,
  });

  const weatherData = fetchWeatherData(request);
  displayData(weatherData);
});

// toggleTemp.addEventListener("input", () => {
//   const tempValue = toggleTemp.checked;
//   if (!tempValue) {
//     return;
//   }else {

//   }
// });
