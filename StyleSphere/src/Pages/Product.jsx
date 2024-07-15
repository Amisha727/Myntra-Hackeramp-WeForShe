import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";
import "./Product.css";

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <div className="Container">
    
      <div className="Wrapper">
        <div className="ImgContainer">
          <img className="Image" src={product.img} alt={product.title} />
        </div>
        <div className="InfoContainer">
          <h1 className="Title">{product.title}</h1>
          <p className="Desc">{product.desc}</p>
          <span className="Price">$ {product.price}</span>
          <div className="FilterContainer">
            <div className="Filter">
              <span className="FilterTitle">Color</span>
              {product.color?.map((c) => (
                <div
                  className="FilterColor"
                  style={{ backgroundColor: c }}
                  key={c}
                  onClick={() => setColor(c)}
                />
              ))}
            </div>
            <div className="Filter">
              <span className="FilterTitle">Size</span>
              <select
                className="FilterSize"
                onChange={(e) => setSize(e.target.value)}
              >
                {product.size?.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="AddContainer">
            <div className="AmountContainer">
            <button onClick={() => handleQuantity("dec")}>-</button>
            <span className="Amount">{quantity}</span>
            <button onClick={() => handleQuantity("inc")}>+</button>
            </div>
            <button className="Button" onClick={handleClick}>
            ADD TO CART
            </button>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default Product;
