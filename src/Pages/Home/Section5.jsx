import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import user1 from '../../assets/user/images.jpeg';
import user2 from '../../assets/user/images 2.jpeg';
import user3 from '../../assets/user/image3.jpg';
import user4 from '../../assets/user/image4.webp';
import '../../Style.css/Section5.css';

function Section5() {
  return (
    <section className='blog_section'>
      <Container>
        <Row>
          <Col md={12}>
            <Carousel indicators={false} controls={true} interval={4000} pause="hover">
              {/* Testimonial 1 */}
              <Carousel.Item>
                <div className='testimonial_item text-center'>
                  <div className='user_img'>
                    <img src={user1} className='img-fluid' alt="user1" />
                  </div>
                  <p>
                    "Etiam sapien sem at sagittis congus augue massa varius
                    sodales sapien undo tempus dolor egestas magna suscript magna
                    tempus aliquet porta sodales augue suscript luctus neque"
                  </p>
                  <div className='item_rating mb-2'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                  </div>
                  <h5>BY AMELTE NEWLOVE</h5>
                </div>
              </Carousel.Item>

              {/* Testimonial 2 */}
              <Carousel.Item>
                <div className='testimonial_item text-center'>
                  <div className='user_img'>
                    <img src={user2} className='img-fluid' alt="user2" />
                  </div>
                  <p>
                    "This fast food site is incredibly user-friendly.
                    I placed an order within minutes, and the delivery was faster than expected!
                    The burger was still hot, fries were crispy, and the packaging was eco-friendly.
                    I’m definitely ordering again!"
                  </p>
                  <div className='item_rating mb-2'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                  </div>
                  <h5>BY EMILY JOHNSON</h5>
                </div>
              </Carousel.Item>

              {/* Testimonial 3 */}
              <Carousel.Item>
                <div className='testimonial_item text-center'>
                  <div className='user_img'>
                    <img src={user3} className='img-fluid' alt="user3" />
                  </div>
                  <p>
                    "Excellent service! The online menu is clear with mouth-watering images.
                    I appreciated the nutritional information being listed.
                    The customer service even called to confirm a special dietary request.
                    That level of care isn’t common — well done."
                  </p>
                  <div className='item_rating mb-2'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                  </div>
                  <h5>BY CHLOE CAPBELL</h5>
                </div>
              </Carousel.Item>

              {/* Testimonial 4 */}
              <Carousel.Item>
                <div className='testimonial_item text-center'>
                  <div className='user_img'>
                    <img src={user4} className='img-fluid' alt="user4" />
                  </div>
                  <p>
                    "I love how the site offers localized menus and lets me customize ingredients.
                    Smooth payment process and super fast checkout
                    The sushi rolls and spicy fries combo? 10/10. Keep it up!"
                  </p>
                  <div className='item_rating mb-2'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                  </div>
                  <h5>BY MICHAEL SCOTT</h5>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section5;
