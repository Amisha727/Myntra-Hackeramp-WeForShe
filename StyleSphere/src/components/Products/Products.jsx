import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const containerStyle = {
  padding: "20px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
};

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const url = cat
          ? `http://localhost:5000/api/products?category=${cat}`
          : "http://localhost:5000/api/products";
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    if (products.length > 0) {
      const filtered = products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      );
      setFilteredProducts(filtered);
    }
  }, [products, filters]);

  useEffect(() => {
    if (filteredProducts.length > 0) {
      let sortedProducts = [...filteredProducts];
      if (sort === "newest") {
        sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      } else if (sort === "asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sort === "desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
      }
      setFilteredProducts(sortedProducts);
    }
  }, [sort, filteredProducts]);

  return (
    <div style={containerStyle}>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products.slice(0, 8).map((item) => <Product item={item} key={item.id} />)}
    </div>
  );
};

export default Products;
