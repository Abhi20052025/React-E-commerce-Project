import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import IOSimage from '../../assets/Iosimage.png';
import PlayStoreimage from '../../assets/PlayStoreimages.png';
import fastfoodstallimage from '../../assets/fastfoodstallimage.webp';
import '../../Style.css/Section4.css'; // ✅ Make sure this path is correct

// Brand Images
import brand0 from '../../assets/Brands/brand0.jpg';
import brand1 from '../../assets/Brands/brand1.jpg';
import brand2 from '../../assets/Brands/brand2.jpg';
import brand3 from '../../assets/Brands/brand3.png';
import brand4 from '../../assets/Brands/brand4.png';
import brand5 from '../../assets/Brands/brand5.png';
import brand6 from '../../assets/Brands/brand6.webp';
import brand7 from '../../assets/Brands/brand7.jpg';
import brand8 from '../../assets/Brands/brand8.jpeg';
import brand9 from '../../assets/Brands/brand9.png';
import brand10 from '../../assets/Brands/brand10.png';

const brandImages = [
  brand0, brand1, brand2, brand3, brand4, brand5,
  brand6, brand7, brand8, brand9, brand10
];

function Section4() {
  return (
      <>
          {/* Brand Carousel Section */}
<section className="brand_section">
  <Container>
    <Row>
      <Col>
        <Carousel indicators={false} controls={true} interval={3000} pause={false}>
          {/* First Slide */}
          <Carousel.Item>
            <div className='brand-carousel d-flex flex-wrap justify-content-center align-items-center'>
              {brandImages.slice(0, 6).map((img, index) => (
                <div key={index} className='brand_img_wrapper'>
                  <img src={img} className='img-fluid' alt={`brand${index}`} />
                </div>
              ))}
            </div>
          </Carousel.Item>

          {/* Second Slide */}
          <Carousel.Item>
            <div className='brand-carousel d-flex flex-wrap justify-content-center align-items-center'>
              {brandImages.slice(6).map((img, index) => (
                <div key={index + 6} className='brand_img_wrapper'>
                  <img src={img} className='img-fluid' alt={`brand${index + 6}`} />
                </div>
              ))}
            </div>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Container>
</section>

      {/* App Download Section */}
      <section className='shop_section'>
        <Container>
          <Row className='align-items-center'>
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Download mobile App and</h4>
              <h2>Save up to 50%</h2>
              <p>
                Aliquam a augue suscipit, luctus neque purus iqsum and neque
                dolor primis libero tempus, blandit varius
              </p>
              <div className="download-buttons">
                <a href="/">
                  <img src={IOSimage} alt='IOS' className='img-fluid' />
                </a>
                <a href="/">
                  <img src={PlayStoreimage} alt='PlayStore' className='img-fluid' />
                </a>
              </div>
            </Col>

            <Col lg={6}>
              <img src={fastfoodstallimage} alt="e-shop" className='img-fluid' />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section4;
