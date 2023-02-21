import { HashRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import WeatherCard from './components/WeatherCard';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container>
      <NavigationBar />
      <div className="App">
        <h1 className=''> Weather App</h1>
        <h2> Location</h2>
        <h3> Sheffield</h3>
        <p> Here goes some cards to show the weather for the location</p>
      </div>
      <WeatherCard />
    </Container>
  );
}

export default App;

App()
