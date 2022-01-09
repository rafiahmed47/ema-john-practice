import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity, key } = props.products;
    return (
        <div>
            <h4>{name}</h4>
            <p>Quantity:{quantity}</p>
            <button
                onClick={() => props.removeProduct(key)}
                className="mainBtn"
            >Remove Item
            </button>
        </div>
    );
};

export default ReviewItem;