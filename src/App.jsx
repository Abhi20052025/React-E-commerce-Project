import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Layouts
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';

// Pages
import Home from './Pages/Home/Home';
import About from './Pages/Home/Section1';
import Menu from './Pages/Home/Section2';
import Shop from './Pages/Home/Section4';
import BlogPage from './Pages/Home/Section3';
import ContactUs from './Pages/Home/Section6';
import Cart from './Pages/Home/Section';

function App() {
  return (
    <Router>
      {/* Header always visible */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;
