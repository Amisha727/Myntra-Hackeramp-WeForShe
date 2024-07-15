import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ item }) => {
  return (
    <div className="container">
      <div className="circle" />
      <img className="image" src={item.img} alt={item.title} />
      <div className="info">
        <div className="icon">
          <i className="fas fa-shopping-cart" />
        </div>
        <div className="icon">
          <Link to={`/product/${item._id}`}>
            <i className="fas fa-search" />
          </Link>
        </div>
        <div className="icon">
          <i className="fas fa-heart" />
        </div>
      </div>
    </div>
  );
};

export default Product;
