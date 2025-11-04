import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Optional if routing is used
import 'bootstrap-icons/font/bootstrap-icons.css'; // ✅ Import Bootstrap Icons
import '../../Style.css/Footer.css';

function Footer() {
  return (
    <footer className='bg-dark text-white pt-5 pb-3'>
      <Container>
        <Row>
          <Col sm={6} lg={3} className='mb-4'>
            <div className='text-center'>
              <h5>Location</h5>
              <p>5505 Mohali P1, TDI Business Center</p>
              <p>Developer: Abhishek</p>
              <p>INDIA</p>
            </div>
          </Col>

          <Col sm={6} lg={3} className='mb-4'>
            <div className='text-center'>
              <h5>Working Hours</h5>
              <p>Mon-Fri: 9:00AM - 10:00PM</p>
              <p>Saturday: 10:00AM - 8:30PM</p>
              <p>Sunday: 12:00PM - 5:00PM</p>
            </div>
          </Col>

          <Col sm={6} lg={3} className='mb-4'>
            <div className='text-center'>
              <h5>Order Now</h5>
              <p>Quaerat neque purus ipsum</p>
              <p>
                <a href='tel:9998887564' className='text-white'>
                  999-888-7564
                </a>
              </p>
            </div>
          </Col>

          <Col sm={6} lg={3} className='mb-4'>
            <div className='text-center'>
              <h5>Follow Us</h5>
              <p>Connect with us on social media</p>
              <ul className='list-unstyled d-flex justify-content-center gap-3 mt-3'>
                <li>
                  <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-white'>
                    <i className='bi bi-facebook fs-4'></i>
                  </a>
                </li>
                <li>
                  <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-white'>
                    <i className='bi bi-instagram fs-4'></i>
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-white'>
                    <i className='bi bi-twitter fs-4'></i>
                  </a>
                </li>
                <li>
                  <a href='https://youtube.com' target='_blank' rel='noopener noreferrer' className='text-white'>
                    <i className='bi bi-youtube fs-4'></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <hr className='border-light' />

        <Row className='text-center'>
          <Col>
            <ul className='list-inline mb-2'>
              <li className='list-inline-item'>
                <a href='/' className='text-white'>@ 2025 <strong>DEVLOP BY ABHISHEK</strong>. All Rights Reserved</a>
              </li>
            </ul>
            <ul className='list-inline'>
              <li className='list-inline-item'>
                <a href='/' className='text-white'>About Us</a>
              </li>
              <li className='list-inline-item mx-2'>|</li>
              <li className='list-inline-item'>
                <a href='/' className='text-white'>Terms of Use</a>
              </li>
              <li className='list-inline-item mx-2'>|</li>
              <li className='list-inline-item'>
                <a href='/' className='text-white'>Privacy Policy</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
