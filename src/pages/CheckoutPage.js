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
    <>


    <div className='checkout-container'>

      <form className='user-details-form' onSubmit={handleSubmit}>
        <h2>Personal Details</h2>
        <div className='form-row'>
          <label>
            Full Name:
            <input type='text' name='fullName' value={userDetails.fullName} onChange={handleChange} required />
          </label>
        </div>
        <div className='form-row'>


          <label>
            Email Address
            <input type='text' name='country' value={userDetails.country} onChange={handleChange} required />
          </label>
          <label>
            Phone number
            <input type='tel' name='phone' value={userDetails.phone} onChange={handleChange} required />
          </label></div>


        <h2>Shipping Information</h2>
        <div className='form-row'>
          <label>
            Country
            <input type='text' name='state' value={userDetails.state} onChange={handleChange} required />
          </label>
          <label>
            State
            <input type='text' name='zipCode' value={userDetails.zipCode} onChange={handleChange} required />
          </label>
        </div>
        <div className='form-row'>
          <label>
            City
            <input type='text' name='city' value={userDetails.city} onChange={handleChange} required />
          </label>
          <label>
            ZipCode
            <input type='text' name='address' value={userDetails.address} onChange={handleChange} required />
          </label>
        </div>
        <div className='form-row'>
          <label>
            Address
            <input type='email' name='email' value={userDetails.email} onChange={handleChange} required />
          </label>

        </div>
        <h2>Payment Details</h2>
        <p>Choose a payment method</p>
        <div className='form-row'>
          <label>
            Name on card
            <input type='text' name='cardNumber' value={userDetails.cardNumber} onChange={handleChange} required />
          </label>
        </div>
        <div className='form-row'>
          <label>
            Card Number
            <input type='number' name='email' value={userDetails.email} onChange={handleChange} required />
          </label>

        </div>
        <div className='form-row'>
          <label>
            Expiry Date
            <input type='text' name='cvv' value={userDetails.cvv} onChange={handleChange} required />
          </label>
          <label>
            CVV
            <input type='text' name='nameOnCard' value={userDetails.nameOnCard} onChange={handleChange} required />
          </label>
        </div>
       
      </form>
      {/* <div className='checkout-products'>
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
      </div> */}
     





      <div className='cart-container'>
        <div>
          <h1>Order Summary</h1>
        </div>
        <div className='product-contain'>
          <div className='product-table'>
            <div className='product-row header'>
              <div className='product-cell'>Image</div>
              <div className='product-cell'>Details</div>
              <div className='product-cell'>Quantity</div>
            </div>
            {productLists.map((product) => {
              if (cartItems[product.id]) {
                return (
                  <div className='product-row' key={product.id}>
                    <div className='product-cell'><img src={product.image} alt={product.tittle} className='product-image' /></div>
                    <div className='product-cell image-detail'>
                      <h4>{product.tittle}</h4>
                      <p>${product.price}</p>
                    </div>
                    <div className='product-cell'>{cartItems[product.id]}</div>
                  </div>
                );
              }
              return null;
            })}
          </div>

        </div>

      </div>
     

    </div>

    <div className='checkout-summary'>
        <h2>Total: ${calculateTotal()}</h2>

      </div>
    <button type='submit' className='checkout-button'>Place an order</button>
    </>
  );
};

export default CheckoutPage;
