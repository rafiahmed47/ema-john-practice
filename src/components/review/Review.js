import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from "../../fakeData"
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'
import { useHistory } from 'react-router';

const Review = () => {
    const [cart, setCart] = useState([])
    const [orderPlaced, setOrderPlaced] = useState(false)
    const history = useHistory()
    const handleProceedCheckout = () => {
        history.push('/shipping')
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
                    <button onClick={() => handleProceedCheckout()} className="mainBtn">Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;