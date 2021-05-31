import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import About from '../About';
import Footer from '../Footer';
import Contact from '../Contact';

function Home() {
  return (
    <>
      <About />
      <Cards />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
