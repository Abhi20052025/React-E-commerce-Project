import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../Style.css/section6.css';

function Section6() {
  return (
      <section className='contact_section'>
          <Row className='justify-content-center'>
              <Col sm={8} className='text-center'>
                  <h4>We Guarantee</h4>
                  <h2>35 Minutes Delivery!</h2>
                  <p>
                      Aliquam a augue suscipit, luctus neque ipsum neque undo dolor primis libero tempus,
                      blandit a cursus varius luctus neque magna
                  </p>
                  <a href='tel:9998887564' className='btn btn-red px-4 py-2'>
                      CALL : 999-888-7564
                  </a>
              </Col>
          </Row>
    </section>
  )
}

export default Section6
