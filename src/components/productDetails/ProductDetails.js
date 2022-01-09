import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const ProductDetails = () => {
    const { productKey } = useParams();
    const product = fakeData.find(pd => pd.key === productKey)
    return (
        <div>
            <h1>Developer is working Product details is coming soon</h1>
            <Products addToCart={false} product={product}></Products>
        </div>
    );
};

export default ProductDetails;