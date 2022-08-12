const country = document.getElementById("city");
const temperature = document.getElementById("temperature");
const weatherCondition = document.getElementById("weather-condition");
const userLocation = document.getElementById("user-location");
const api_key = "96bb9fc34f6665bc2248a84f52fbf685";

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${api_key}`,
      { mode: "cors" }
    );
    const data = await response.json();
    // console.log(data);
    temperature.innerHTML = `The temparature in ${location} is ${data.main.temp}°C`;
    country.innerHTML = data.sys.country;
    weatherCondition.innerHTML = data.weather[0].description;
  } catch (error) {
    console.log(error);
  }
}

getWeather("Abuja");

userLocation.addEventListener("input", (e) => {
  // console.log(e.key)
  const userTyped = e.target.value;
  console.log(userTyped);
  if (e.key === "Enter") {
    // console.log(userTyped.value)
    e.preventDefault();
  }
});

console.log(userLocation.innerText);
