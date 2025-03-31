export async function retrieveAPIData(request) {
  const response = await fetch(request);
  if (!response.ok) {
    console.error("CONNECTION ERROR: ");
  }
  const data = await response.json();

  return data;
}

export async function fetchWeatherData(request) {
  const data = await retrieveAPIData(request);
  const address = data.resolvedAddress;

  const selectedData = data.days.map((day) => ({
    address,
    date: day.datetime,
    temperature: day.temp,
    feelslike: day.feelslike,
    humidity: day.humidity,
    windspeed: day.windspeed,
    conditions: day.conditions,
    icon: day.icon,
  }));

  return selectedData;
}
