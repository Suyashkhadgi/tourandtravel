import React from 'react'
import { Accordion, Carousel, Col, Container, Row, Tab, Tabs } from 'react-bootstrap'

function Home() {
  return (
    <>
      <section>
      <Carousel>
      <Carousel.Item>
        <img className='w-100' src="https://www.plannepal.com/uploads/2022/12/standard/ba71d2935e48626811eaa7f7c84f389c.jpg?ver=1672155708" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='w-100' src="https://www.plannepal.com/uploads/2022/12/standard/ba71d2935e48626811eaa7f7c84f389c.jpg?ver=1672155708" alt="" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='w-100' src="https://www.plannepal.com/uploads/2022/12/standard/ba71d2935e48626811eaa7f7c84f389c.jpg?ver=1672155708" alt="" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </section>

      <section>
        <Container className='py-4'>
            <Row className='g-3'>
                <Col lg={9}>
                <h3 className='bg-success text-white p-1 d-inline-block'>Dear Travellers, Namaste and Welcome
                </h3>
                <p>Plan Nepal Travels & Tours (p.) Ltd. a leading online travel agency in Nepal. A Destination Management Company in Nepal, We are one of key travel agents in Nepal that brings tours of "Incredible Nepal", the country that has mystified the world for centuries. Your tour to Nepal, a colorfully diverse country, will enchant you with the beauty of its Culture, Mountain and Nature. These tours to Nepal will enrich you with its culture, heritage, wildlife, flora & fauna, folklore, festivals, spirituality, philosophy and at the same time surprise you with its modernity. Nepal tour & travel packages also offers the welcoming smile of hospitable people who make it a must experience destination.</p>
                </Col>
                <Col lg={3}>
                <h3 className='bg-success text-white p-1 d-inline-block'>Featured Packages   </h3>
                <ul className='px-5'>
                    <li>Nepal Family Holiday</li>
                    <li>Nepal Vacation Tour</li>
                    <li>Sunrise/Sunset Tour</li>
                    <li>Chitwan Safari Tour</li>
                    <li>Kathmandu Valley Trek</li>
                    <li>Bhutan Tour Package</li>
                    <li>Tibet Tour Package</li>
                </ul>
                </Col>
            </Row>
        </Container>
      </section>


        <section className='py-3 border-top tour'>
            <Container>
                <h3 className='fw-bold py-2 text-center text-success text-uppercase '>Our Specialities</h3>
                <Row className='g-3'>
                    <Col lg={4}>
                    <div className='overflow-hidden position-relative'>
                        <img className='w-100' src="https://www.plannepal.com/assets/img/our-specialities/tour-banner-special.jpg?ver=1465419636" alt="" />
                        <p className='position-absolute bottom-0 start-0 bg-warning p-2 text-white'>Tour in Nepal</p>
                    </div>
                    </Col>
                    <Col lg={4}>
                    <div className='overflow-hidden position-relative'>
                        <img className='w-100' src="https://www.plannepal.com/assets/img/our-specialities/trekking-banner-special.jpg?ver=1465419556" alt="" />
                        <p className='position-absolute bottom-0 start-0 bg-warning p-2 text-white'>TREKKING IN NEPAL</p>
                    </div>
                    </Col>
                    <Col lg={4}>
                    <div className='overflow-hidden position-relative'>
                        <img className='w-100' src="https://www.plannepal.com/assets/img/our-specialities/flight-book.jpg?ver=1465419604" alt="" />
                        <p className='position-absolute bottom-0 start-0 bg-warning p-2 text-white'>FLIGHT BOOKING</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='py-3'>
        <div className="conatiner">
            <h3 className='fw-bold py-3 text-center text-success text-uppercase'>Best selling trips</h3>
            <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 justify-content-center gap-5"
    >
       



      <Tab eventKey="home" title=" NEPAL TOUR">
        <Row>
            <Col lg={4}>
            <div className='overflow-hidden position-relative'>
                <img className='w-100' src="https://www.plannepal.com/uploads/2016/06/thumb/2313845d75957a1459be96c335822d0f.jpg?ver=1464857285" alt="" />
            <h3  className='position-absolute bottom-0 start-0 bg-success p-2 text-white'>Nepal Family Tour</h3>
            </div>
            </Col>
            <Col lg={4}>
            <div className='overflow-hidden position-relative'>
                <img className='w-100' src="https://www.plannepal.com/uploads/2017/04/thumb/0d11d5f96cd2d9cec72fd589a63deb15.jpg?ver=1493264796" alt="" />
            <h3  className='position-absolute bottom-0 start-0 bg-success p-2 text-white'>Kathmandu Everest Helicopter Tour</h3>
            </div>
            </Col>
            <Col lg={4}>
            <div className='overflow-hidden position-relative'>
                <img className='w-100' src="https://www.plannepal.com/uploads/2016/06/thumb/46f253292afc8b66132c97011e209f31.jpg?ver=1464951312" alt="" />
            <h3  className='position-absolute bottom-0 start-0 bg-success p-2 text-white'>Nepal Experience Tour with Trekking</h3>
            </div>
            </Col>
        </Row>
      </Tab>
      <Tab eventKey="profile" title="NEPAL TREKKING">
      <Row>
            <Col lg={4}>
            <div className='overflow-hidden position-relative'>
                <img className='w-100' src="https://www.plannepal.com/uploads/2016/12/thumb/911df2e88cdc886ebd658177d418796d.jpg?ver=1481983932" alt="" />
            <h3  className='position-absolute bottom-0 start-0 bg-success p-2 text-white'>Everest Base Camp Trek</h3>
            </div>
            </Col>
            <Col lg={4}>
            <div className='overflow-hidden position-relative'>
                <img className='w-100' src="https://www.plannepal.com/uploads/2016/06/thumb/5b7cee0447117871a918e6f1e07e72b1.jpg?ver=1465206670" alt="" />
            <h3  className='position-absolute bottom-0 start-0 bg-success p-2 text-white'>Everest Gokyo Trek</h3>
            </div>
            </Col>
            <Col lg={4}>
            <div className='overflow-hidden position-relative'>
                <img className='w-100' src="https://www.plannepal.com/uploads/2016/06/thumb/e5be4640e9fbba019c9c3d0c40e36aec.jpg?ver=1465377817" alt="" />
            <h3  className='position-absolute bottom-0 start-0 bg-success p-2 text-white'>Instant Everest Trek</h3>
            </div>
            </Col>
        </Row>
      </Tab>
      <Tab eventKey="contact" title="ADVENTURE ACTIVITIES" >
      <Row>
            <Col lg={4}>
            <div className='overflow-hidden position-relative'>
                <img className='w-100' src="https://www.plannepal.com/uploads/2016/06/thumb/8b21eb13ff9afee5a8e051f9b2c19bbe.jpg?ver=1464954369" alt="" />
            <h3  className='position-absolute bottom-0 start-0 bg-success p-2 text-white'>Trishuli River Rafting</h3>
            </div>
            </Col>
            <Col lg={4}>
            <div className='overflow-hidden position-relative'>
                <img className='w-100' src="https://www.plannepal.com/uploads/2017/02/thumb/371a4496a00365e9a79dd76304341d57.jpg?ver=1486136539" alt="" />
            <h3  className='position-absolute bottom-0 start-0 bg-success p-2 text-white'>Kathmandu Cycling Tour</h3>
            </div>
            </Col>
            <Col lg={4}>
            <div className='overflow-hidden position-relative'>
                <img className='w-100' src="https://www.plannepal.com/uploads/2016/06/thumb/b308936f5d8e895cfbea63303dcb1204.jpg?ver=1464956053" alt="" />
            <h3  className='position-absolute bottom-0 start-0 bg-success p-2 text-white'>Bunjee Jumping</h3>
            </div>
            </Col>
        </Row>
      </Tab>
      <Tab eventKey="tour" title=" OUTBOUND TOURS" >
      <Row>
            <Col lg={4}>
            <div className='overflow-hidden position-relative'>
                <img className='w-100' src="https://www.plannepal.com/uploads/2016/06/thumb/cfbe584fcc8af820daf5f1403498b4ad.jpg?ver=1465227908" alt="" />
            <h3  className='position-absolute bottom-0 start-0 bg-success p-2 text-white'>4 Days Lhasa City Tour</h3>
            </div>
            </Col>
            <Col lg={4}>
            <div className='overflow-hidden position-relative'>
                <img className='w-100' src="https://www.plannepal.com/uploads/2017/02/thumb/1d5dc477cb0fc00ccf23ded57a59def9.jpg?ver=1486185118" alt="" />
            <h3  className='position-absolute bottom-0 start-0 bg-success p-2 text-white'>5 Nights 6 Days Bhutan Tour</h3>
            </div>
            </Col>
            <Col lg={4}>
            <div className='overflow-hidden position-relative'>
                <img className='w-100' src="https://www.plannepal.com/uploads/2016/06/thumb/0a8b53afcb88d405fe2f26b152fd9df0.jpg?ver=1465225233" alt="" />
            <h3  className='position-absolute bottom-0 start-0 bg-success p-2 text-white'>4 Nights 5 Days Bhutan Tour</h3>
            </div>
            </Col>
        </Row>
      </Tab>
    </Tabs>
        </div>
        </section>

    <section className='py-3'>
        <div className="container">
            <Row>
                <Col lg={7}>
                <h3 className='fw-bold'>Guest Testimonials</h3>
                <img className='w-100' src="https://www.plannepal.com/assets/img/testimonials/clients.jpg" alt="" />
                </Col>
                <Col lg={5}>
                <h3 className='fw-bold'>Why Plan Nepal?</h3>
                <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0">
        <Accordion.Header>12 Years of Experience</Accordion.Header>
        <Accordion.Body>
        We have eperience, knowledge for more than 12 years that will make you come back for more.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Over 150 Holidays Packages</Accordion.Header>
        <Accordion.Body>
        Variations in trip packages is always mesmerizing and a memorable to for the lifetime.so we have done same.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Safety First</Accordion.Header>
        <Accordion.Body>
        We take safety seriously and take all the necessary anticipation so you can have soundlessness of mind and you will have an enjoyable and safe trip in nepal.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Competitive Price</Accordion.Header>
        <Accordion.Body>
        We take safety seriously and take all the necessary anticipation so you can have soundlessness of mind and you will have an enjoyable and safe trip in nepal.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Best Customer Service Experience</Accordion.Header>
        <Accordion.Body>
        Availabe to Answer all the question and supply infromation about holiday,travel arrangment 24/7.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                </Col>
            </Row>

        </div>
    </section>

    </>
  )
}

export default Home
