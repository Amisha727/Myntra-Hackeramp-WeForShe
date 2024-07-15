import React, { useState } from 'react';
import { addItem } from '../data';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const AddItemForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
        id: uuidv4(),
        name,
        age,
        price,
        image,
    };
    addItem(newItem);
    navigate('/');
    };

    return (
    <form onSubmit={handleSubmit}>
        <TextField
        label="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        />
        <TextField
        label="Age (years)"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
        />
        <TextField
        label="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        />
        <input
        type="file"
        onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
        required
        />
        <Button type="submit" variant="contained" color="primary">
        Add Item
        </Button>
    </form>
    );
};

export default AddItemForm;
