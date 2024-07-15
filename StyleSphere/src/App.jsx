// src/App.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'; // Assuming you have a global CSS file
import Announcement from './components/Announcement/Announcement';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'; // Import Cart component
import Home from './Pages/Home'; // Import Home component
import Login from './Pages/Login'; // Import Login component
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Announcement />
        <main>
          <section className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </section>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
