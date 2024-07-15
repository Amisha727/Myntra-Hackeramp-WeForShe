// src/pages/Home.jsx
import React from 'react';
import Announcement from '../components/Announcement/Announcement';
import Header from '../components/Header/Header';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Announcement />
      <main>
        <section style={{ height: '200vh', paddingTop: '4rem' }}>
          {/* Your home page content goes here */}
        </section>
      </main>
    </div>
  );
}

export default Home;
