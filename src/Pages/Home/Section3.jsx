import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/fastfoodenjoy person.jpeg";
import PromotionImage1 from "../../assets/fastfoodenjoy person1.jpg";
import PromotionImage2 from "../../assets/fastfoodenjoy2.jpeg";
import '../../Style.css/Section3.css';

function Section3() {
  return (
    <>
      <section className='promotion_section'> {/* ✅ Fixed typo here */}
        <Container>
          <Row className='align-items-center'>
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              {/* Optional: wrap images in a div and give a custom class if layout needs better control */}
              <div className="promotion_images">
                <img src={PromotionImage} className='img-fluid mb-3' alt="Enjoying fast food" />
                <img src={PromotionImage1} className='img-fluid mb-3' alt="Burger delight" />
                <img src={PromotionImage2} className='img-fluid' alt="Group enjoying burger" />
              </div>
            </Col>
            <Col lg={6} className='px-5'>
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                Sempre lacus cursus porta primis risus tempus and sagittis ipsum mauris lectus
                laoreet purus ipsum tempor enim ipsum porta justo integer ultrice aligula lectus 
                aenean magna and pulvinar purus at pretium gravida
              </p>
              <ul>
                <li>
                  <p>
                    Fringilla risus, lectus mauris orci actor purus euismod
                    pretium purus pretium ligula rutrum tempor sapien
                  </p>
                </li>
                <li>
                  <p>Quaerat sodales sapien euismod purus blandit</p>
                </li>
                <li>
                  <p>Nemo ipsam egestas volute turpis dolores ut aliquam Quaerat
                    sodales sapien undo pretium a purus mauris
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className='bg_parallax_scroll'></section>
    </>
  );
}

export default Section3;
