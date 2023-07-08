import React from 'react'
import logo from './component/assets/img/RK logo.png'
import './component/css/index.css'
import {Container, Nav, Navbar, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary header">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
          <div className="hamburger-menu">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link>
                  <Link to="/" className="hover-underline-animation">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to="/abouts" className="hover-underline-animation">
                    About Us
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/services" className="hover-underline-animation">
                    Services
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/clientreview" className="hover-underline-animation">
                    Our Client
                  </Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to="/product" className="hover-underline-animation">
                    Product
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contact" className="hover-underline-animation">
                    Contact
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button className="book-btn">Book on Engineer</Button>
          </div>
        </Container>
      </Navbar>
    </>
  )
}
