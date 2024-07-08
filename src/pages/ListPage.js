import React, { useState, useContext } from 'react';
import './ListPage.css';
import { productLists } from '../data';
import { ShopContext } from '../context/shop-context';

const ListPage = () => {
    const [list, setList] = useState(productLists);
    const { addToCart, cartItems } = useContext(ShopContext);

    return (
        <main className='content-container'>
            <div className='category-container'>
                <h1>Fashion Category</h1>
                <section className='sec1'>
                    <h2>Categories</h2>
                    <div className='btn-container'>
                        <button className='btn1'>Dresses</button>
                        <button className='btn2'>Tops</button>
                        <button className='btn3'>Shirts</button>
                    </div>
                    <div className='btn-container'>
                        <button className='btn4'>Pants</button>
                        <button className='btn5'>Men's</button>
                        <button className='btn6'>Women's</button>
                    </div>
                    <div className='btn-container'>
                        <button className='btn7'>Jeans</button>
                        <button className='btn8'>Sweatshirt</button>
                        <button className='btn9'>Kids</button>
                    </div>
                </section>

                <section className='sec2'>
                    <h2>Price Range</h2>
                    <p>$0-$50</p>
                    <p>$51-$100</p>
                    <p>$101-$200</p>
                    <p>$201-$300</p>
                    <p>$301-$500</p>
                </section>
                <section className='sec3'>
                    <h2>Brand</h2>
                    <div className='btn-container'>
                        <button className='btn10'>Nike</button>
                        <button className='btn11'>Zara</button>
                        <button className='btn12'>Prada</button>
                    </div>
                    <div className='btn-container'>
                        <button className='btn13'>Gucci</button>
                        <button className='btn14'>Louis Vuitton</button>
                    </div>
                </section>
                <section className='sec4'>
                    <h2>Rating</h2>
                    <div>


                        <span className='material-symbols-outlined star'>star</span>
                        <span className='material-symbols-outlined star'>star</span>
                        <span className='material-symbols-outlined star'>star</span>
                        <span className='material-symbols-outlined star'>star</span>
                        <span className='material-symbols-outlined star'>star</span>
                    </div>
                    <div>


                        <span className='material-symbols-outlined star'>star</span>
                        <span className='material-symbols-outlined star'>star</span>
                        <span className='material-symbols-outlined star'>star</span>
                        <span className='material-symbols-outlined star'>star</span>
                        <span className='material-symbols-outlined star'>star</span>
                    </div>
                    <div>


                        <span className='material-symbols-outlined star'>star</span>
                        <span className='material-symbols-outlined star'>star</span>
                        <span className='material-symbols-outlined star'>star</span>
                        <span className='material-symbols-outlined star'>star</span>
                        <span className='material-symbols-outlined star'>star</span>
                    </div>
                </section>
            </div>

            <div className='product-container'>
                {list.map((e) => {
                    const cartItemAmount = cartItems[e.id] || 0;
                    return (
                        <div className='product' key={e.id}>
                            <img src={e.image} alt={e.tittle} />
                            <div className='image-detail'>
                                <h4>{e.tittle}</h4>
                                <p>${e.price}</p>
                                <div>
                                    <span className='material-symbols-outlined star'>star</span>
                                    <span className='material-symbols-outlined star'>star</span>
                                    <span className='material-symbols-outlined star'>star</span>
                                    <span className='material-symbols-outlined star'>star</span>
                                    <span className='material-symbols-outlined star'>star</span>
                                </div>
                            </div>
                            <button className='btn1' onClick={() => addToCart(e.id)}>
                                <span className='material-symbols-outlined'>shopping_cart</span>
                                Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                            </button>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default ListPage;
