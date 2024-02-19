// const apiKey = "dd245548c802dbae5862083cfd73ca01";
// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const searchBox = document.querySelector(`.search input`);
// const searchBtn = document.querySelector(`.search button`);
// const weatherIcon = document.querySelector(".Weather-icon");

// const chechWeather = async (city) => {
//   const x = await fetch(apiUrl + city + `&appid=${apiKey}`);
//   if (x.status == 404) {
//     document.querySelector(".error").style.display = "block";
//     document.querySelector(".weather").style.display = "none";
//   } else {
//     const res = await x.json();
//     document.querySelector(".city").innerHTML = res.name;
//     document.querySelector(".temp").innerHTML =
//       Math.round(res.main.temp) + "°C";
//     document.querySelector(".humidity").innerHTML =
//       res.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = res.wind.speed + " km/h";

//     if (res.weather[0].main == "Clouds") {
//       weatherIcon.src = "images/clouds.png";
//     }
//     if (res.weather[0].main == "Rain") {
//       weatherIcon.src = "images/rain.png";
//     }
//     if (res.weather[0].main == "Drizzle") {
//       weatherIcon.src = "images/drizzle.png";
//     }
//     if (res.weather[0].main == "Mist") {
//       weatherIcon.src = "images/mist.png";
//     }
//     document.querySelector(".weather").style.display = "block";
//     document.querySelector(".error").style.display = "none";
//   }
// };
// searchBtn.addEventListener(`click`, () => {
//   chechWeather(searchBox.value);
// });