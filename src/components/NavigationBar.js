import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../App.css';


function NavigationBar() {
const [search, userCity] = useState("");



const searchPressed = (event) => {
  event.preventDefault();
  // console.log("Search pressed");

  console.log(event);

};

  return (
    <Container>
      <Navbar>
        <Container>
          <Navbar.Brand>WEATHER.APP</Navbar.Brand>
          <Form className="d-flex" onSubmit={searchPressed}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(input) => userCity(input.target.value)}
              
            />
            <Button variant="outline-success"
            type="submit"
            >Search</Button>
          </Form>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavigationBar;



// 