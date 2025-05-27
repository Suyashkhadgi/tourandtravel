import React from 'react'
import { Col, Container, Navbar, Row, Nav, NavDropdown } from 'react-bootstrap'
import { FaFacebook, FaGooglePlusG, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa'

function Header() {
  return (
    <>
      <section className='top py-2 d-none d-lg-block'>
      <Container>
        <Row>
          <Col lg={3} className='offset-lg-2'>
          Agency for Tour & Trekking in Nepal
</Col>
          <Col lg={3}>
          <ul className='d-flex gap-3 justify-content-center'>
            <li><FaFacebook /></li>
            <li><FaTwitter /></li>
            <li><FaGooglePlusG /></li>
            <li><FaInstagram /></li>
            <li><FaPinterestP /></li>
              </ul>
              </Col>
          <Col lg={4}>
          <ul className='d-flex gap-3 justify-content-lg-end'>
            <li> +977-1-4435300</li> 
             <li>info@plannepal.com</li>
          </ul>
          </Col>
        </Row>
      </Container>
      </section>

      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://www.plannepal.com/assets/img/plannepal.gif?ver=1464028232" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#home">Nepal</Nav.Link>
            <Nav.Link href="#home">Tibet</Nav.Link>
            <Nav.Link href="#home">Bhutan</Nav.Link>
            <Nav.Link href="#home">Multi Country</Nav.Link>
            <Nav.Link href="#home">Heli Tour</Nav.Link>
            <Nav.Link href="#home">Day Tours</Nav.Link>
            <Nav.Link href="#home">Contact Us</Nav.Link>
           
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
