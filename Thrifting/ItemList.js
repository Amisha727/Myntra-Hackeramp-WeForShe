import React from 'react';
import { items } from '../data';

const ItemList = () => {
    return (
    <div>
        {items.map((item) => (
        <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Age: {item.age} years</p>
            <p>Price: ${item.price}</p>
            {item.image && <img src={item.image} alt={item.name} width="200" />}
        </div>
        ))}
    </div>
    );
};

export default ItemList;
