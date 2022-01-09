import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Products = (props) => {
  const { name, img, price, seller, stock, key } = props.product;
  return (
    <div className="productBar">
      <div className="productImage">
        <img src={img} alt="" />
      </div>
      <div className="productDetails">
        <h4><Link to={"/product/" + key}>{name}</Link></h4>
        <p>
          <small>by:{seller}</small>
        </p>
        <p>
          <small>price:{price}</small>
        </p>
        <p>
          <small>available in stock:{stock}piece</small>
        </p>
        {props.addToCart && <button
          className="mainBtn"
          onClick={() => props.handleAddedProduct(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          add to cart
        </button>}
      </div>
    </div>
  );
};

export default Products;
