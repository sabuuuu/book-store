import React, { useEffect, useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Tab from '../components/Tab';


const Home = () => {
  return (
    <div className='flex flex-col min-h-screen h-auto bg-gray-900'>
      <Navbar />
      <Tab />
      <Footer />
    </div>
  );
};

export default Home;