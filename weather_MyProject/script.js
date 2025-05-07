const W_search = document.querySelector("#search");
    const citySearch = document.querySelector(".inputField");

    const w_cityName = document.querySelector(".cityName");
    const w_time = document.querySelector(".time");
    const w_clear1 = document.querySelector(".w_clear");
    const w_icon = document.querySelector(".icon");
    const w_temp = document.querySelector(".temp");
    const w_feelsLike = document.querySelector(".feelslike");
    const w_humidity = document.querySelector(".feelslike1");
    const w_wind = document.querySelector(".feelslike2");
    const w_pressure = document.querySelector(".feelslike3");

    let city = "Multan";

    const getCountryName = (code) => {
      return new Intl.DisplayNames(["en"], { type: "region" }).of(code);
    };

    const getDateTime = (dt) => {
      const curDate = new Date(dt * 1000);
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      return formatter.format(curDate);
    };

    citySearch.addEventListener("submit", (e) => {
      e.preventDefault();
      city = W_search.value;
      if (city) {
        getWeatherData();
        W_search.value = "";
      }
    });

    const getWeatherData = async () => {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=da0b530df0a58ea9cf8b1b6e90b7e416&units=metric`;

      try {
        const res = await fetch(weatherUrl);
        const data = await res.json();
        const { main, name, weather, wind, sys, dt } = data;

        w_cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`;
        w_time.innerHTML = getDateTime(dt);
        w_clear1.innerHTML = weather[0].main;
        w_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" style="height:50px; width:50px;" />`;
        w_temp.innerHTML = `${main.temp.toFixed(1)}&#176`;

        w_feelsLike.innerHTML = `<i class="fa-solid fa-hand-holding-droplet"></i> ${main.feels_like.toFixed(1)}&#176`;
        w_humidity.innerHTML = `<i class="fa-solid fa-droplet"></i> ${main.humidity}%`;
        w_wind.innerHTML = `<i class="fa-solid fa-wind"></i> ${wind.speed} m/s`;
        w_pressure.innerHTML = `<i class="fa-solid fa-compress"></i> ${main.pressure} hPa`;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    window.onload = getWeatherData;