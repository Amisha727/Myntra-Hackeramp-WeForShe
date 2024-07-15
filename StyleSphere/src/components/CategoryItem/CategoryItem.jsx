import React from "react";
import { Link } from "react-router-dom";
import "./CategoryItem.css";

const CategoryItem = ({ item }) => {
  return (
    <div className="category-item-container">
      <Link to={`/products/${item.cat}`}>
        <img src={item.img} alt={item.title} className="category-item-image" />
        <div className="category-item-info">
          <h1 className="category-item-title">{item.title}</h1>
          <button className="category-item-button">SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
