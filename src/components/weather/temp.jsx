//https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=7c2358fb0753a77040f77505fe047943
import React, { useState, useEffect } from "react";
import "./style.css";
import WeatherCard from "./weatherCard";

const Temp = () => {
  // const apiCall;
  const [searchValue, setsearchValue] = useState("Gurgaon");
  const [tempInfo, settempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=7c2358fb0753a77040f77505fe047943`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const weatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      settempInfo(weatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            className="searchTerm"
            placeholder="search..."
            autoFocus
            id="search"
            type="search"
            value={searchValue}
            onChange={(e) => {
              setsearchValue(e.target.value);
            }}
          />
          <button
            className="searchButton"
            type="button"
            value
            onClick={() => {
              getWeatherInfo();
            }}
          >
            Search
          </button>
        </div>
      </div>
      {/* out temp card */}
      <WeatherCard {...tempInfo} />
    </>
  );
};

export default Temp;
