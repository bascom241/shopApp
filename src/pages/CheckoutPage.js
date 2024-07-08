import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/shop-context';
import { productLists } from '../data';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cartItems } = useContext(ShopContext);
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    country: '',
    state: '',
    zipCode: '',
    city: '',
    address: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  const calculateTotal = () => {
    return productLists.reduce((total, product) => {
      const quantity = cartItems[product.id] || 0;
      const productPrice = parseFloat(product.price) || 0;
      return total + (productPrice * quantity);
    }, 0).toFixed(2);
  };

  return (
    <div className='checkout-container'>
      <h1>Checkout</h1>
      <form className='user-details-form' onSubmit={handleSubmit}>
        <h2>Shipping Information</h2>
        <div className='form-row'>
          <label>
            Full Name:
            <input type='text' name='fullName' value={userDetails.fullName} onChange={handleChange} required />
          </label>
          <label>
            Country:
            <input type='text' name='country' value={userDetails.country} onChange={handleChange} required />
          </label>
        </div>
        <div className='form-row'>
          <label>
            State:
            <input type='text' name='state' value={userDetails.state} onChange={handleChange} required />
          </label>
          <label>
            Zip Code:
            <input type='text' name='zipCode' value={userDetails.zipCode} onChange={handleChange} required />
          </label>
        </div>
        <div className='form-row'>
          <label>
            City:
            <input type='text' name='city' value={userDetails.city} onChange={handleChange} required />
          </label>
          <label>
            Address:
            <input type='text' name='address' value={userDetails.address} onChange={handleChange} required />
          </label>
        </div>
        <div className='form-row'>
          <label>
            Email:
            <input type='email' name='email' value={userDetails.email} onChange={handleChange} required />
          </label>
          <label>
            Phone:
            <input type='tel' name='phone' value={userDetails.phone} onChange={handleChange} required />
          </label>
        </div>
        <h2>Payment Details</h2>
        <div className='form-row'>
          <label>
            Card Number:
            <input type='text' name='cardNumber' value={userDetails.cardNumber} onChange={handleChange} required />
          </label>
          <label>
            Expiry Date:
            <input type='text' name='expiryDate' value={userDetails.expiryDate} onChange={handleChange} required />
          </label>
        </div>
        <div className='form-row'>
          <label>
            CVV:
            <input type='text' name='cvv' value={userDetails.cvv} onChange={handleChange} required />
          </label>
          <label>
            Name on Card:
            <input type='text' name='nameOnCard' value={userDetails.nameOnCard} onChange={handleChange} required />
          </label>
        </div>
        <button type='submit' className='checkout-button'>Submit</button>
      </form>
      <div className='checkout-products'>
        {productLists.map((product) => {
          const quantity = cartItems[product.id];
          if (quantity > 0) {
            return (
              <div key={product.id} className='checkout-product'>
                <img src={product.image} alt={product.tittle} className='checkout-product-image' />
                <div className='checkout-product-details'>
                  <h4>{product.tittle}</h4>
                  <div className='checkout-product-info'>
                    <p>Quantity: {quantity}</p>
                    <p>Price: ${parseFloat(product.price).toFixed(2)}</p>
                    <p>Subtotal: ${(parseFloat(product.price) * quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className='checkout-summary'>
        <h2>Total: ${calculateTotal()}</h2>
        <button className='checkout-button'>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
