import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from "../../fakeData"
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([])
    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }
    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productKey = Object.keys(savedCart)
        const cartProduct = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product
        })
        setCart(cartProduct)
    }, [])
    return (
        <div className="product-container">
            <div>
                {
                    cart.map(pd => <ReviewItem
                        products={pd}
                        removeProduct={removeProduct}
                    ></ReviewItem>)
                }
            </div>
            <div>
                <Cart cart={Cart}></Cart>
            </div>
        </div>
    );
};

export default Review;