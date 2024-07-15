import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AddItemPage from './pages/AddItemPage';

const App = () => {
    return (
    <Router>
        <NavBar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddItemPage />} />
        </Routes>
    </Router>
    );
};

export default App;
