import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from "../../fakeData"
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([])
    const [orderPlaced, setOrderPlaced] = useState(false)
    const handlePlaceOrder = () => {
        setCart([])
        setOrderPlaced(true)
        processOrder();
    }


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
    }, []);
    let placed;
    if (orderPlaced) {
        placed = <img src={happyImage} alt="" />
    }
    return (
        <div className="product-container">
            <div>
                {
                    cart.map(pd => <ReviewItem
                        products={pd}
                        removeProduct={removeProduct}
                    ></ReviewItem>)
                }
                {placed}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={() => handlePlaceOrder()} className="mainBtn">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;