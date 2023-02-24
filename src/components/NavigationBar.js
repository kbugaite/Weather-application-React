import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../App.css';

function NavigationBar(props) {

  const searchClicked = (event) => {
    // prevent page reload
    event.preventDefault();

  };

  return (
    <Container>
      <Navbar className="nav p-2">
        <Container>
          <h3>WEATHER.APP</h3>
          <Form className="d-flex" onSubmit={searchClicked}  >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              id="userCity" />
            <Button className="btn"
              onClick={() => {
                props.setLocation(document.getElementById("userCity").value)
              }}
              variant="outline-success"
              type="button">
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavigationBar;