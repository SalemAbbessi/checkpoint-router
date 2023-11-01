import React from 'react';
import Navbare from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ReactStars from 'react-rating-stars-component';

import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbar({getTitle,getrate}) {
  const ratingChanged = (newRating) => {
    getrate(newRating);
  };
  return (
    <Navbare expand="lg" bg="light">
 <Container fluid>
        <Navbare.Brand href="#">Navbar scroll</Navbare.Brand>
        <Navbare.Toggle aria-controls="navbarScroll" />
        <Navbare.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor='#ffd700'/>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={e=>getTitle(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          
          </Form>
        </Navbare.Collapse>
      </Container>
    </Navbare>

  );
}

export default Navbar