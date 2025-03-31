import { dateFns ,format, addDays } from "date-fns";

export function calculateFutureDate(daysToAdd) {
  const presentDay = new Date();
  const futureDate = addDays(presentDay, daysToAdd);

  return format(futureDate, "yyyy-MM-dd");
}

export function formRequest({
  location = "ethiopia",
  days = 1,
  tempMetric = "fahrenheit",
}) {
  const futureDate = calculateFutureDate(days - 1);
  const presentDay = format(new Date(), "yyyy-MM-dd");
  const request = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${presentDay}/${futureDate}?unitGroup=metric&include=days&key=R87Q72NMLGRSHRQ26EG96AN2J&contentType=json`;

  return request;
}

export function toggleTemperature(temperature, currentUnit) {
  if (currentUnit === "C") {
    // Convert Celsius to Fahrenheit
    const fahrenheit = (temperature * 9) / 5 + 32;
    return { temperature: fahrenheit, unit: "F" };
  } else if (currentUnit === "F") {
    // Convert Fahrenheit to Celsius
    const celsius = ((temperature - 32) * 5) / 9;
    return { temperature: celsius, unit: "C" };
  }
}

export async function resolvePromisesToArray(promise) {
  const resolvedArray = await promise;
  
}