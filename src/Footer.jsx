import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <footer className='bg-dark text-white py-3'>
        <Container>
            <Row>
                <Col lg={3}>
                <h4>Quick Links</h4>
                <ul>
                    <li>Company Profile</li>
                    <li>About Us</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                    <li>Testimonials</li>
                    <li>Terms & Conditions</li>
                </ul>
                </Col>
            
            
                <Col lg={3}>
                <h4>TOURS IN NEPAL</h4>
                <ul>
                    <li>Best of Nepal Tour</li>
                    <li>Classical Nepal Tour</li>
                    <li>Nepal Hiking Tour</li>
                    <li>Kathmandu Valley Trek</li>
                    <li>Chitwan Safari Tour</li>
                    <li>Yoga / Meditation Tour</li>
                </ul>
                </Col>
            
                <Col lg={3}>
                <h4>TREKS IN NEPAL</h4>
                <ul>
                    <li>Ghorepani Poonhill Trek</li>
                    <li>Annapurna Base Camp Trek</li>
                    <li>Instant Everest Trek</li>
                    <li>Annpaurna Circuit Trek</li>
                    <li>Langtang Valley Trek</li>
                    <li>Everest Base Camp Trek</li>
                </ul>
                </Col>
            
                <Col lg={3}>
                <h4>TREKS IN NEPAL</h4>
                <ul>
                    <li>Thamel, Kathmandu, Nepal</li>
                    <li>Tel: +977-1-4435300 , 4422325</li>
                    <li>Cell: +977-9851093862</li>
                    <li>Email: info@plannepal.com / plannepaltours@gmail.com</li>
                    <li>whatapps/Viber : 9801044333</li>
                    <button className='py-2 bg-warning'><FaEnvelope />Quick Inquiry</button>
                </ul>
                </Col>
            </Row>
        </Container>
        

      </footer>
    </>
  )
}

export default Footer
