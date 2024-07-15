import React from "react";
import { categories } from "../../data";
import CategoryItem from "../CategoryItem/CategoryItem";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
