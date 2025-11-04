import React, { useState } from 'react';
import { Button, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../Style.css/Section2.css';
import Image from '../../assets/fastfoosads1.jpg';
import Image0 from '../../assets/fastfoodadsimage.webp';


// Import images
import Image1 from '../../assets/food menu/food menu 1.jpeg';
import Image2 from '../../assets/food menu/food menu2.jpg';
import Image3 from '../../assets/food menu/food menu 3.jpg';
import Image4 from '../../assets/food menu/food menu4.jpg';
import Image5 from '../../assets/food menu/food menu5.jpeg';
import Image6 from '../../assets/food menu/food menu 6.jpeg';
import Image7 from '../../assets/food menu/food menu 7.jpeg';
import Image8 from '../../assets/food menu/food menu 8.jpeg';

const mockData = [
  { id: "0001", image: Image1, title: "Cheese Burger", paragraph: "A juicy beef patty with cheddar cheese, lettuce, tomato, and special sauce.", rating: 5, price: "Rs 120" },
  { id: "0002", image: Image2, title: "Veggie Pizza", paragraph: "Thin crust pizza topped with fresh veggies and mozzarella cheese.", rating: 4, price: "Rs 150" },
  { id: "0003", image: Image3, title: "Chicken Nuggets", paragraph: "Crispy fried chicken nuggets served with your choice of dipping sauce.", rating: 4, price: "Rs 90" },
  { id: "0004", image: Image4, title: "French Fries", paragraph: "Golden and crispy fries lightly salted, perfect as a side or snack.", rating: 5, price: "Rs 70" },
  { id: "0005", image: Image5, title: "Hot Dog", paragraph: "Classic hot dog with ketchup, mustard, and relish on a soft bun.", rating: 3, price: "Rs 80" },
  { id: "0006", image: Image6, title: "Taco", paragraph: "Soft tortilla filled with spiced beef, cheese, and fresh vegetables.", rating: 5, price: "Rs 100" },
  { id: "0007", image: Image7, title: "Grilled Sandwich", paragraph: "Toasted sandwich with ham, cheese, tomato, and lettuce.", rating: 4, price: "Rs 110" },
  { id: "0008", image: Image8, title: "Chocolate Milkshake", paragraph: "Creamy chocolate milkshake topped with whipped cream and a cherry.", rating: 5, price: "Rs 90" },
];

const Section2 = () => {
  const [, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert(`✅ ${item.title} added to cart!`);
  };

  return (
    <section className="section2-container">
      <Container>
        <div className="section2-heading text-center mb-5">
          <h2>Our Crazy Foods Menu</h2>
          <p>
            Aliquam a augue suscript, luctus nequs ispus neque undo <br />
            dolor primis libero temus, blandit a cursus varius magna
          </p>
        </div>

        <Row className="g-4">
          {mockData.map((item) => (
            <Col key={item.id} xs={12} sm={6} lg={3}>
              <div className="food-card">
                <img src={item.image} alt={item.title} className="img-fluid rounded" />
                <h5 className="mt-3">{item.title}</h5>
                <p>{item.paragraph}</p>
                <p><strong>Rating:</strong> {item.rating} ⭐</p>
                <p><strong>Price:</strong> {item.price}</p>
                <Button variant="danger" className="add-to-cart-btn" onClick={() => addToCart(item)}>
                  Add to Cart
                </Button>
              </div>
            </Col>
          ))}
        </Row>

        {/* Promo Boxes */}
        <div class="ads-container">
  <div class="ads-box ads_img1 content-right">
    <div class="ads-content">
      <h4>Special Offer!</h4>
      <h5>Get 50% off fast food today</h5>
    </div>
  </div>

  <div class="ads-box ads_img2 content-left">
    <div class="ads-content">
      <h4>Delicious Meals</h4>
      <h5>Fresh, Fast, and Affordable</h5>
    </div>
  </div>
</div>
      </Container>
    </section>
  );
};

export default Section2;
