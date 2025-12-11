import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/navbar.css';

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="/" id='BColor'>Főoldal</Nav.Link>
            <Nav.Link href="/konyvek" id='BColor'>Könyv</Nav.Link>
            <Nav.Link href="/beszur" id='BColor'>Beszúrás</Nav.Link>
            <Nav.Link href="/torol" id='BColor'>Törlés</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;