import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Burger from '../../assets/section image.png'

function Section() {
  return (
    <section className="hero_section py-5"> {/* ✅ Correct class used */}
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="mb-5 mb-lg-0">
            <div style={{ position: 'relative' }}>
              <img
                  src={Burger}
                  className="img-fluid"
                  style={{ maxWidth: '700px', width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                  alt="Hero"/>
              <div className="price_badge position-absolute top-0 start-0 bg-danger text-white p-3">
                <div className="badge_text text-center">
                  <h2 className="mb-1">Only</h2>
                  <h3 className="mb-0">RS.20 + 5% GST</h3>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text">
              <h1 className="text-white">New Burger</h1>
              <h2 className="text-white">With Onion and Cheese</h2>
              <p className="text-white pt-2 pb-4">
                Welcome to the world of delicious fast food made with quality and care.
                We use fresh ingredients and premium meats to serve tasty burgers,
                crispy fried chicken, cheesy pizzas, and more. 
              </p>
              <Link to="/" className="btn btn-warning fw-bold px-4 py-2">
                ORDER NOW
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section;
