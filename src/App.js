import NavigationBar from './components/NavigationBar';
import WeatherCard from './components/WeatherCard';
import './App.css';
import Container from "react-bootstrap/Container";
import { useState, useEffect } from 'react';
import { ApiClient } from "./apiClient";
import { v4 as uuidv4 } from "uuid";

function App() {

  const client = new ApiClient();

  const [location, changeLocation] = useState("Sheffield")
  const [lat, changeLat] = useState("53.3806626")
  const [lon, changeLon] = useState("-1.4702278")
  const [key] = useState("5b3e4dfb3379ee3cc89e90a04b8e31b3")

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

  // calls Weather API to get weather data, extract list and filter out unwanted arrays
  const getWeather = async () => {
    const input = await client.fetchWeather(lat, lon, key)
    const inputArray = input.list;
    const totalWeather = inputArray.filter((data /*alex dont delete*/, index) => (
      index % 8 == 0))
    updateWeather(totalWeather)
    console.log(weather)
  }

  // shortens recieved API date to more readable format
  const interpretDate = (date) => {
    const dateSlice = new Date(date).toString().slice(0, 10);
    return dateSlice
  }
  // adds recieved API icon id to lookup url
  const convertIcon = (icon) => {
    const image = `http://openweathermap.org/img/wn/${icon}@2x.png`
    return image
  }

  // filters out unwanted data from recieved API and updates weather object
  const updateWeather = (input) => {
    const forecastData = input.map(item => {
      return {
        id: uuidv4(),
        date: interpretDate(item.dt_txt),
        icon: convertIcon(item.weather[0].icon),
        description: item.weather[0].description,
        max_temp: item.main.temp_max,
        min_temp: item.main.temp_min,
        wind_dir: item.wind.deg,
        wind_speed: item.wind.speed
      }
    })
    changeWeather(forecastData)
  }

  //////////////// AUTO TRIGGER \\\\\\\\\\\\\\\\\

  useEffect(() => {
    getLocation();
    getWeather();
  }, [location, lat, lon]);


  return (
    <>
      <Container>
        <NavigationBar
          setLocation={location => changeLocation(location)}
        />
        <div className="App">

        </div>

        <div className='content p-4'>
          <div>
            {(typeof weather[0] != 'undefined') ? (
              <div>
                <div>
                  <h3> Current location: {location}</h3>
                </div>
                <div className="card-cont d-flex flex-row">
                  <WeatherCard weather={weather[0]} />
                  <WeatherCard weather={weather[1]} />
                  <WeatherCard weather={weather[2]} />
                  <WeatherCard weather={weather[3]} />
                  <WeatherCard weather={weather[4]} />
                </div>
              </div>
            ) : (
              <div>
                <p>Use the search bar in the top right to get the weather for a different location.</p>
              </div>
            )}
          </div>
        </div>


      </Container>
    </>
  )
}

export default App;
