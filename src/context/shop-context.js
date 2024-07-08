import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (id) => {
        setCartItems((prevItems) => ({
            ...prevItems,
            [id]: (prevItems[id] || 0) + 1,
        }));
    };

    return (
        <ShopContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </ShopContext.Provider>
    );
};
