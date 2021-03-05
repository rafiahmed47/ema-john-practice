import React, { useState } from "react";
import fakeData from "../../fakeData";
import Products from "../products/Products";
import Cart from "../cart/Cart";
import "./Shop.css";
import { addToDatabaseCart } from "../../utilities/databaseManager";

const Shop = () => {
  const firstTen = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firstTen);
  const [cart, setCart] = useState([]);
  const handleAddedProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    const sameProduct = newCart.filter(pd => pd.key === product.key)
    const count = sameProduct.length;

    addToDatabaseCart(product.key, count)
  };
  return (
    <div className="product-container">
      <div className="shop-container">
        {products.map((product) => (
          <Products
            addToCart={true}
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
