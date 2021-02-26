import React, { useState } from "react";
import fakeData from "../../fakeData";
import Products from "../products/Products";
import Cart from "../cart/Cart";
import "./Shop.css";

const Shop = () => {
  const firstTen = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firstTen);
  const [cart, setCart] = useState([]);
  const handleAddedProduct = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="product-container">
      <div className="shop-container">
        {products.map((product) => (
          <Products
            handleAddedProduct={handleAddedProduct}
            product={product}
          ></Products>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
