import Card from 'react-bootstrap/Card';
import arrow from '../resources/arrow.svg';
// import arrow from './resources/arrow.svg';

function WeatherCard(props) {
  const weather = props.weather;

  return (
    <Card>
      <div key={weather.id}>
        <Card.Body>
          <Card.Title>
            <h1>{weather.date}</h1>
          </Card.Title>
          <Card.Text>
            <img id="icon" src={weather.image} />
            <div id="description">{weather.description}</div>
            <div>
              <div id="minTemp">{weather.minTemp}</div>
              <div id="maxTemp">{weather.maxTemp}</div>
            </div>
            <div id="windSpeed">{weather.windSpeed}</div>
            <img src = { arrow } 
            // add wind direction arrow icon here AFTER it has been rotated
            // style={[
            //   {
            //     transform: [{ rotate: `${weather.windDirection}deg` }],
            //   }, ]} 
              />
            <div id="windDirection">{weather.windDirection}</div>
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}

export default WeatherCard;