import React, { useContext } from 'react';
import { productLists } from '../data';
import { ShopContext } from '../context/shop-context';
import './CartPage.css';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems } = useContext(ShopContext);

  return (

    <section className='cart-page-container'>




      <div className='cart-container'>
        <div>
          <h1>Shopping Cart</h1>
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
                    <div className='product-cell'><img src={product.image} alt={product.title} className='product-image' /></div>
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

      <div className='shop-con'> 
      <Link to='/' className='shopping'>Continue Shopping</Link>
      <Link to='/checkout' className='shopping2'>Proceed to checkout</Link>
      </div>
    </section>
  );
};

export default CartPage;
