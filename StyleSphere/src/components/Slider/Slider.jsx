// src/components/Slider.jsx
import React, { useState } from 'react';
import './Slider.css';

const Slider = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    const handleMouseEnter = (category) => {
        setActiveCategory(category);
    };

    const handleMouseLeave = () => {
        setActiveCategory(null);
    };

    return (
        <div className="slider-container">
            <div 
                className="category" 
                onMouseEnter={() => handleMouseEnter('men')} 
                onMouseLeave={handleMouseLeave}
            >
                Men
                {activeCategory === 'men' && (
                    <div className="dropdown">
                        <a href="#men-clothing">Clothing</a>
                        <a href="#men-shoes">Shoes</a>
                        <a href="#men-accessories">Accessories</a>
                    </div>
                )}
            </div>
            <div 
                className="category" 
                onMouseEnter={() => handleMouseEnter('women')} 
                onMouseLeave={handleMouseLeave}
            >
                Women
                {activeCategory === 'women' && (
                    <div className="dropdown">
                        <a href="#women-clothing">Clothing</a>
                        <a href="#women-shoes">Shoes</a>
                        <a href="#women-accessories">Accessories</a>
                    </div>
                )}
            </div>
            <div 
                className="category" 
                onMouseEnter={() => handleMouseEnter('kids')} 
                onMouseLeave={handleMouseLeave}
            >
                Kids
                {activeCategory === 'kids' && (
                    <div className="dropdown">
                        <a href="#kids-clothing">Clothing</a>
                        <a href="#kids-shoes">Shoes</a>
                        <a href="#kids-accessories">Accessories</a>
                    </div>
                )}
            </div>
            <div 
                className="category" 
                onMouseEnter={() => handleMouseEnter('home')} 
                onMouseLeave={handleMouseLeave}
            >
                Home & Living
                {activeCategory === 'home' && (
                    <div className="dropdown">
                        <a href="#gift-clothing">Gift Set</a>
                        <a href="#Bed-Sheets">Bed Sheets</a>
                        <a href="#storage">Storage</a>
                    </div>
                )}
            </div>
            <div 
                className="category" 
                onMouseEnter={() => handleMouseEnter('beauty')} 
                onMouseLeave={handleMouseLeave}
            >
                Beauty 
                {activeCategory === 'beauty' && (
                    <div className="dropdown">
                        <a href="#makeup">Makeup</a>
                        <a href="#skincare">SkinCare</a>
                        <a href="#haircare">HairCare</a>
                    </div>
                )}
            </div>
            <div 
                className="category" 
                onMouseEnter={() => handleMouseEnter('studio')} 
                onMouseLeave={handleMouseLeave}
            >
                Studio
                {activeCategory === 'studio' && (
                    <div className="dropdown">
                        <a href="#trendy-wear">Trendy</a>
                        <a href="#trendy-shoes">Shoes</a>
                        <a href="#trendy-accessories">Accessories</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Slider;
