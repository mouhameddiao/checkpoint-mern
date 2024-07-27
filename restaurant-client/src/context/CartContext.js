import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemToRemove) => {
        const newCartItems = cartItems.filter((item) => item.id !== itemToRemove.id);
        setCartItems(newCartItems);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {props.children}
        </CartContext.Provider>
    );
};

