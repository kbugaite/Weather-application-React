import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Card';
import arrow from '../resources/arrow.svg';



function WeatherCard(props) {
  // console.log(props)
  const weather = props.weather;
  // console.log(weather)

  return (
    <>
      <Card className="card">
        <div key={weather.id}>
          <Card.Body>
            <Card.Title>
              <h1>{weather.date}</h1>
            </Card.Title>
            <Card.Text>
              <img id="icon" src={weather.icon} alt="weather icon" />
              <p id="description">{weather.description}</p>
              <div>
                <p id="minTemp"> Minimum: {weather.min_temp}°C</p>
                <p id="maxTemp"> Maximum: {weather.max_temp}°C</p>
              </div>
              <p id="windSpeed">Wind speed: {weather.wind_speed} m/s</p>
              <img className="windArrow" src={arrow}
                style={{ transform: `rotate(${weather.wind_dir}deg)` }} />
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </>
  );
}

export default WeatherCard;