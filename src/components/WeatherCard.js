import Card from 'react-bootstrap/Card';

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
            <div id="icon">{weather.image}</div>
            <div id="description">{weather.description}</div>
            <div>
              <div id="minTemp">{weather.minTemp}</div>
              <div id="maxTemp">{weather.maxTemp}</div>
            </div>
            <div id="windSpeed">{weather.windSpeed}</div>
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}

export default WeatherCard;