import React, { useState } from 'react';
import '../../Style.css/Cart.css';

const Cart = () => {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Classic Burger', price: 5.99, quantity: 1 },
    { id: 2, name: 'Cheese Burger', price: 6.99, quantity: 2 },
    { id: 3, name: 'Fries', price: 2.99, quantity: 1 },
  ]);

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Increment quantity
  const incrementQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrement quantity
  const decrementQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Calculate total
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <div className="item-controls">
                <button onClick={() => decrementQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQty(item.id)}>+</button>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${totalPrice}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
