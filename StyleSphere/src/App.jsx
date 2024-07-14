// src/App.jsx
import React from 'react';
import './App.css'; // Assuming you have a global CSS file
import Announcement from './components/Announcement/Announcement';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Announcement />
      <main>
        <section style={{ height: '200vh', paddingTop: '4rem' }}>
          
          {/* Your main content goes here */}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
