import { HashRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import WeatherCard from './components/WeatherCard';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useState } from 'react';
import { ApiClient } from "./apiClient";

function App() {

  const client = new ApiClient();

  const [location, changeLocation] = useState("Sheffield")
  // need to figure out dynamic changing, rather than hardcoding at some point
  const [lat, changeLat] = useState("")
  const [lon, changeLon] = useState("")
  const [key] = useState("5b3e4dfb3379ee3cc89e90a04b8e31b3")
  const [apiIndex, iterateApiIndex] = useState("0")

  const [weather, changeWeather] = useState({
    id: "",
    date: "",
    icon: "",
    description: "",
    max_temp: "",
    min_temp: "",
    wind_dir: "",
    wind_speed: "",
  });

  // calls Geocoding API based on inputed location value and api key
  const getLocation = async () => {
    const input = await client.fetchLocation(location, key)
    const city = input[0]
    changeLat(city.lat)
    changeLon(city.lon)
    console.log(location, lat, lon)
    // lat and lon only defined after getLocation() has fully run!!!!

  }
  // calls 5 Day weather forecast API based on inputed latitude and longitude with an API key
  const getWeather = async () => {
    const input = await client.fetchWeather(lat, lon, key)
    updateWeather(input, 0)
    console.log(weather)
  }

  const updateWeather = (input, index) => {
    changeWeather({
      // map over the object list instead of calling the specific indexes?
      id: input.list[index].weather[0].id,    
      date: interpretDate(input.list[index].dt_txt),
      icon: convertIcon(input.list[index].weather[0].icon),
      description: input.list[index].weather[0].description,
      max_temp: input.list[index].main.temp_max,
      min_temp: input.list[index].main.temp_min,
      wind_dir: rotateWindIcon(input.list[index].wind.deg),
      wind_speed: input.list[index].wind.speed
    })
  }

  const interpretDate = (date) => {
    const dateSlice = new Date(date).toString().slice(0,10);
    return dateSlice
  }

  const convertIcon = (icon) => {
    const image = `http://openweathermap.org/img/wn/${icon}@2x.png`
    return image
  }
  
  const rotateWindIcon = (direction) => {   

    // call wind direciton arrow in here 

    // const image = "./resources/arrow.svg";
    // image.style.transform = "rotate"(direction)
    // return image
  }

  return (
    <Container>
      <NavigationBar/>
      <div className="App">
        <h1 className=''> Weather App</h1>
        <h2> Location</h2>
        <h3> Sheffield</h3>
        <p> Here goes some cards to show the weather for the location</p>
      </div>
      <button onClick={() => getLocation()}>get location data</button>
      <button onClick={() => getWeather()}>get weather data</button>
      <WeatherCard
        weather={({
          id: weather.id,
          date: weather.date,
          image: weather.icon,
          description: weather.description,
          minTemp: weather.min_temp,
          maxTemp: weather.max_temp,
          windSpeed: weather.wind_speed,
          windDirection: weather.wind_dir
        })} />
    </Container>
  );  
}

export default App;

