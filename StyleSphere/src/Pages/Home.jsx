// src/pages/Home.jsx
import React from 'react';
import Announcement from '../components/Announcement/Announcement';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Newsletter from '../components/NewsLetter/NewsLetter';
import Slider from '../components/Slider/Slider';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Announcement />
      <main>
        <section style={{ height: '200vh', paddingTop: '4rem' }}>
          {/* Your home page content goes here */}
          <Slider />
        </section>
        <Newsletter />
      </main>
  
      <Footer />
    </div>
  );
}

export default Home;
