import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.jpeg';
import '../../Style.css/Header.css'; // Make sure path is correct

function Header() {
  const [sticky, setSticky] = useState(false);

  // Detect scroll to add sticky class
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`navbar ${sticky ? 'sticky' : ''}`}
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="logo" className="img-fluid logo" />
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
          <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
          <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/cart" className="position-relative">
            <i className="bi bi-basket fs-5"></i>
            <em className="roundpoint">2</em>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
