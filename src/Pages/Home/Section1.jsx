import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'; // Proper import
import Pizza from '../../assets/Pizza image.png';
import Salad from '../../assets/salad image.png';
import Delivery from '../../assets/delvery image.png';
import '../../Style.css/Section1.css';

const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: "Enjoy our signature pizza made with hand-tossed dough, rich tomato sauce, and 100% mozzarella cheese — baked to perfection."
  },
  {
    image: Salad,
    title: "Quality Foods",
    paragraph: "Fresh ingredients, balanced meals — our quality salads and sides are crafted to support a healthy lifestyle without compromising taste."
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: "Get your favorite meals delivered hot and fast, straight to your door. Freshness guaranteed every time."
  },
];

function Section1() {
  return (
    <>
      <section className='about_section'>
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h3>The Burger Tastes better when you eat it with your Family</h3>
              <p>
                Porta semper lacus cursus, feugiat primis ultrice a ligula risus
                auctor an tempus feugiat dolor lacinia cubilia curae integer
                orci congue and metus integer primis in integer metus.
              </p>
              <Link to="/" className='btnorder_now btn_red'>
                Explore full menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='about_wrapper'>
        <Container>
          <Row className='justify-content-md-center'>
            {mockData.map((cardData, index) => (
              <Col key={index} md={6} lg={4} className="mb-4 mb-md-0">
                <div className='about_box text-center'>
                  <div className='about_icon'>
                    <img src={cardData.image} className="img-fluid" alt={cardData.title} />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section1;
