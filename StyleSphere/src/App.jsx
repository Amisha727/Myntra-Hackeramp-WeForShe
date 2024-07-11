// src/App.jsx
import React from 'react';
import './App.css'; // Assuming you have a global CSS file
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section style={{ height: '200vh', paddingTop: '4rem' }}>
          {/* Your main content goes here */}
          <h2>Welcome to my website!</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
