import Card from 'react-bootstrap/Card';
import arrow from '../resources/arrow.svg';



function WeatherCard(props) {
  // console.log(props)
  const weather = props.weather;
  // console.log(weather)

  return (
    <>
      <Card className="card">
        <div key={weather.id}>
          <Card.Body className="cardtext">
            <Card.Title>
              <h1>{weather.date}</h1>
            </Card.Title>
            <Card.Text>
              <img id="icon" className="weatherIcon" src={weather.icon} alt="weather icon" />
              <p id="description">{weather.description}</p>
              <div className="cardItemText">
                <span id="minTemp"> Minimum:</span><span>{weather.min_temp}°C</span>
              </div>
              <div className='cardItemText'>
                <span id="maxTemp"> Maximum:</span> <span>{weather.max_temp}°C</span>
              </div>
              <div className='cardItemText'>
                <span id="windSpeed">Wind:</span>
                <div>
                  <img className="windArrow" src={arrow}
                    style={{ transform: `rotate(${weather.wind_dir}deg)` }} />
                  <span style={{ marginLeft: `1em`}}>{weather.wind_speed} m/s</span>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </>
  );
}

export default WeatherCard;