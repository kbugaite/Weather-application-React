import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <Container>
      <Navbar>
        <Container>
          <Navbar.Brand>WEATHER.APP</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavigationBar;