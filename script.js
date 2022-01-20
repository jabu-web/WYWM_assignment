let weather = {
  apiKey: "c0b76a3c230faeed00d08fb685aebb22",
  fetchWeather: function (city) {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { description } = data.weather[0];
    const { temp } = data.main;

    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".temp").innerHTML = temp + "°C";
    document.querySelector(".description").innerHTML = description;
  },
  search: function () {
    this.fetchWeather(document.querySelector(".searchBar").value);
  },
};

document.querySelector(".searchButton").addEventListener("click", function () {
  weather.search();
});
