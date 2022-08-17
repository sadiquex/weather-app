const country = document.getElementById("city");
const temperature = document.getElementById("temperature");
const weatherCondition = document.getElementById("weather-condition");
const userLocation = document.getElementById("user-location");
const humidity = document.getElementById("humidity");
const button = document.querySelector(".btn");
const api_key = "96bb9fc34f6665bc2248a84f52fbf685";

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${api_key}`,
      { mode: "cors" }
    );
    const data = await response.json();
    // console.log(data);

    const { main, weather } = data;

    temperature.innerHTML = `the temperature in ${location} is ${main.temp}°C`;
    weatherCondition.innerHTML = `the weather contains ${weather[0].description}`;
    humidity.innerHTML = `${location} is ${main.humidity}% humid`;
  } catch (error) {
    // alert(error);
    // if (userLocation.value === "") {
    //   alert("Type something");
    // } else{
    alert(`${location} not found`);

    // }
  }
}
// userLocation.addEventListener("input", (e) => {
//   e.preventDefault();
//   // console.log(e.key)
//   // const userTyped = e.target.value;
//   // console.log(userLocation.value);
//   if (e.key === "Enter") {
//     getWeather(userLocation.value);
//   }
// });

button.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(userLocation.value);

  getWeather(userLocation.value);

  userLocation.value = "";
});
