import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import "./Shop.css";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import { Link } from "react-router-dom";

const Shop = () => {
  const firstTen = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firstTen);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart)
    const previousCart = productKeys.map(pdKey => {
      const product = fakeData.find(pd => pd.key === pdKey)
      product.quantity = savedCart[pdKey]
      return product
    })
    setCart(previousCart)
  }, [])
  const handleAddedProduct = (product) => {
    const toBeAdded = product.key;
    const sameProduct = cart.find(pd => pd.key === toBeAdded)
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const other = cart.filter(pd => pd.key !== toBeAdded)
      newCart = [...other, product]
    }
    else {
      product.quantity = 1
      newCart = [...cart, product];
    }

    setCart(newCart);
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
        <Cart cart={cart}>
          <Link to={'/review'}>
            <button className="mainBtn">See Review </button >
          </Link>

        </Cart>
      </div>
    </div>
  );
};

export default Shop;
