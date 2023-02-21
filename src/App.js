import { HashRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import WeatherCard from './components/WeatherCard';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useState } from 'react';
import { ApiClient } from "./apiClient";

function App() {

  const client = new ApiClient();
 
  // const [lat, changeLat] = useState("53.3806626")
  // const [lon, changeLon] = useState("-1.4702278")
  

  const [location, changeLocation] = useState("Sheffield")
  // need to figure out dynamic changing, rather than hardcoding at some point
  const [lat, changeLat] = useState("")
  const [lon, changeLon] = useState("")
  const [key] = useState("5b3e4dfb3379ee3cc89e90a04b8e31b3")

  
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
    

  }
  return (
    <Container>
      <NavigationBar />
      <div className="App">
        <h1 className=''> Weather App</h1>
        <h2> Location</h2>
        <h3> Sheffield</h3>
        <div> Here goes some cards to show the weather for the location</div>
      </div>
      <button onClick={() => getLocation()}>get location data</button>
      <button onClick={() => getWeather()}>get weather data</button>
      <WeatherCard
        weather={({
          id: "Mon",
          date: "Mon 23Feb",
          image: ".svg",
          description: "rainy",
          minTemp: "8C",
          maxTemp: "15C",
          windSpeed: "8mph",
        })} />
    </Container>
  );
}



export default App;

