import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Cart.css"; // Import CSS for styling

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();

return (
    <div className="container">
    
    <div className="wrapper">
        <h1 className="title">YOUR BAG</h1>
        <div className="top">
        <button className="topButton" onClick={() => navigate("/")}>
            CONTINUE SHOPPING
        </button>
        <div className="topTexts">
            <span className="topText">Shopping Bag(2)</span>
            <span className="topText">Your Wishlist (0)</span>
        </div>
        <button className="topButton filled" onClick={() => navigate("/checkout")}>
            CHECKOUT NOW
        </button>
        </div>
        <div className="bottom">
        <div className="info">
            {cart.products.map((product) => (
            <div className="product" key={product._id}>
                <div className="productDetail">
                <img className="image" src={product.img} alt={product.title} />
                <div className="details">
                    <span className="productName">
                    <b>Product:</b> {product.title}
                    </span>
                    <span className="productId">
                    <b>ID:</b> {product._id}
                    </span>
                    <div className="productColor" style={{ backgroundColor: product.color }}></div>
                    <span className="productSize">
                    <b>Size:</b> {product.size}
                    </span>
                </div>
                </div>
                <div className="priceDetail">
                <div className="productAmountContainer">
                    <button className="add">+</button>
                    <div className="productAmount">{product.quantity}</div>
                    <button className="remove">-</button>
                </div>
                <div className="productPrice">
                    $ {product.price * product.quantity}
                </div>
                </div>
            </div>
            ))}
            <hr className="hr" />
        </div>
          <div className="summary">
            <h1 className="summaryTitle">ORDER SUMMARY</h1>
            <div className="summaryItem">
              <span className="summaryItemText">Subtotal</span>
              <span className="summaryItemPrice">$ {cart.total}</span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Estimated Shipping</span>
              <span className="summaryItemPrice">$ 5.90</span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Shipping Discount</span>
              <span className="summaryItemPrice">$ -5.90</span>
            </div>
            <div className="summaryItem total">
              <span className="summaryItemText">Total</span>
              <span className="summaryItemPrice">$ {cart.total}</span>
            </div>
            <button className="button" onClick={() => navigate("/checkout")}>
              CHECKOUT NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
